"use client";

import { createContext, useEffect, useMemo, useReducer, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

import authReducer, { authState, getAuthActions } from "@/reducers/authReducer";
import useAuthAction from "@/hooks/useAuthAction";
import { AuthContextType, AuthState } from "@/types/auth";

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

  const [state, dispatch] = useReducer(authReducer, authState);
  const authAction = useMemo(() => getAuthActions(dispatch), [dispatch]);
  const statePromiseRef = useRef<((value: AuthState) => void) | null>(null);

  useEffect(() => {
    if (statePromiseRef.current) {
      statePromiseRef.current(state);
      statePromiseRef.current = null;
    }
  }, [state]);

  const AuthApi = {
    login: async (
      prevState: { error: string; success: boolean } | undefined,
      credentials: { email: string; password: string },
    ): Promise<AuthState> => {
      authAction.login(prevState, credentials, "login");

      return new Promise<AuthState>((resolve) => {
        statePromiseRef.current = resolve;
      });
    },

    signup: async (
      prevState: { error: string; success: boolean } | undefined,
      credentials: { email: string; password: string },
    ): Promise<AuthState> => {
      authAction.login(prevState, credentials, "signup");

      return new Promise<AuthState>((resolve) => {
        statePromiseRef.current = resolve;
      });
    },
  };

  const loginAuth = useAuthAction({
    action: AuthApi.login,
    onSuccess: () => router.push("/"),
  });

  const signupAuth = useAuthAction({
    action: AuthApi.signup,
  });

  return (
    <loginContext.Provider value={loginAuth}>
      <signupContext.Provider value={signupAuth}>
        {children}
      </signupContext.Provider>
    </loginContext.Provider>
  );
};
