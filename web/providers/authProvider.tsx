"use client";

import { createContext, useEffect, useReducer, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

import AuthApi, { authReducer, getAuthActions } from "@/lib/auth/api";
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
  const authState: AuthState = {
    error: "",
    success: false,
  };

  const [state, dispatch] = useReducer(authReducer, authState);
  const authAction = getAuthActions(dispatch);
  const statePromiseRef = useRef<((value: AuthState) => void) | null>(null);

  useEffect(() => {
    if (statePromiseRef.current) {
      statePromiseRef.current(state);
      statePromiseRef.current = null;
    }
  }, [state]);

  const callAuthReducer = (
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
    authType: string,
  ): Promise<AuthState> => {
    authAction.login(prevState, credentials, authType);

    return new Promise<AuthState>((resolve) => {
      statePromiseRef.current = resolve;
    });
  };

  const AuthApi = {
    login: async (
      prevState: { error: string; success: boolean } | undefined,
      credentials: { email: string; password: string },
    ): Promise<AuthState> => {
      return callAuthReducer(prevState, credentials, "login");
    },

    signup: async (
      prevState: { error: string; success: boolean } | undefined,
      credentials: { email: string; password: string },
    ): Promise<AuthState> => {
      return callAuthReducer(prevState, credentials, "signup");
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
