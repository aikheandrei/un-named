"use client";

import { createContext, useEffect, useMemo, useReducer, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { usePathname, useRouter } from "next/navigation";

import authReducer, { authState, getAuthActions } from "@/reducers/authReducer";
import useAuthAction from "@/hooks/useAuthAction";
import { AuthContextType, AuthState, AuthType } from "@/types/auth";

const createAuthContext = () =>
  createContext<AuthContextType>({
    error: undefined,
    isPending: false,
    handleAuth: () => {},
  });

export const loginContext = createAuthContext();
export const signupContext = createAuthContext();

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [state, dispatch] = useReducer(authReducer, authState);
  const authAction = useMemo(() => getAuthActions(dispatch), [dispatch]);
  const statePromiseRef = useRef<((value: AuthState) => void) | null>(null);

  useEffect(() => {
    if (statePromiseRef.current) {
      statePromiseRef.current(state);
      statePromiseRef.current = null;
    }
  }, [state]);

  const handleAuth =
    (authType: AuthType) =>
    async (
      prevState: { error: string; success: boolean },
      credentials: { email: string; password: string },
    ): Promise<AuthState> => {
      // const action =
      //   authType === "login" ? authAction.login : authAction.signup;
      // action(prevState, credentials, authType);

      authAction.login(prevState, credentials, authType);

      return new Promise<AuthState>((resolve) => {
        statePromiseRef.current = resolve;
      });
    };

  const loginAuth = useAuthAction({
    action: handleAuth("login"),
    onSuccess: () => router.push("/"),
  });

  const signupAuth = useAuthAction({
    action: handleAuth("signup"),
    onSuccess: (email) => router.replace(pathname + "?email=" + email),
  });

  return (
    <loginContext.Provider value={loginAuth}>
      <signupContext.Provider value={signupAuth}>
        {children}
      </signupContext.Provider>
    </loginContext.Provider>
  );
};
