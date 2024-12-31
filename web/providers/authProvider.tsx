"use client";

import {
  createContext,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import type { FC, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

import { AuthApi } from "@/lib/auth/api";

interface LoginContextProps {
  loginError?: string;
  loginIsPending: boolean;
  handleLogin: (email: string, password: string) => void;
}

export const loginContext = createContext<LoginContextProps>({
  loginError: undefined,
  loginIsPending: false,
  handleLogin: () => {},
});

export const signupContext = createContext({});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string>();

  const [loginState, loginAction, loginIsPending] = useActionState(
    AuthApi.login,
    {
      error: "",
      success: false,
    },
  );

  useEffect(() => {
    if (!loginState.success) {
      setLoginError(loginState.error);
    } else {
      router.push("/");
    }
  }, [loginState]);

  const handleLogin = (email: string, password: string) => {
    try {
      startTransition(() => {
        loginAction({ email, password });
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.log(Error(errorMessage));
    }
  };

  return (
    <loginContext.Provider
      value={{
        loginError,
        loginIsPending,
        handleLogin,
      }}
    >
      {children}
    </loginContext.Provider>
  );
};
