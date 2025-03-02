"use client";

import { createContext, useEffect, useMemo, useReducer, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { usePathname, useRouter } from "next/navigation";

import authReducer, { authState, getAuthAction } from "@/reducers/authReducer";
import useAuthAction from "@/hooks/useAuthAction";
import { AuthActionType, AuthContextType, AuthState } from "@/types/auth";

const createAuthContext = () =>
  createContext<AuthContextType>({
    error: undefined,
    isPending: false,
    handleAuth: () => {},
  });

export const loginContext = createAuthContext();
export const signupContext = createAuthContext();

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [state, dispatch] = useReducer(authReducer, authState);
  const authAction = useMemo(() => getAuthAction(dispatch), [dispatch]);
  const statePromiseRef = useRef<((value: AuthState) => void) | null>(null);

  useEffect(() => {
    if (statePromiseRef.current) {
      statePromiseRef.current(state);
      statePromiseRef.current = null;
    }
  }, [state]);

  const handleAuth =
    (authType: AuthActionType) =>
    async (
      prevState: { error: string; success: boolean },
      credentials: { email: string; password: string },
    ): Promise<AuthState> => {
      authAction(prevState, credentials, authType);

      return new Promise<AuthState>((resolve) => {
        statePromiseRef.current = resolve;
      });
    };

  const loginAuth = useAuthAction({
    action: handleAuth("LOGIN"),
    onSuccess: () => router.push("/"),
  });

  const signupAuth = useAuthAction({
    action: handleAuth("SIGNUP"),
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

export default AuthProvider;
