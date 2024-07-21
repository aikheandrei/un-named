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
import { LoginContextType } from "@/types/auth";

export const loginContext = createContext<LoginContextType>({
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

  const [signupState, signupAction, signupIsPending] = useActionState(
    AuthApi.signup,
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

  useEffect(() => {
    if (!signupState.success) {
      setLoginError(signupState.error);
    } else {
      router.push("/");
    }
  }, [signupState]);

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

  const handleSignup = (email: string, password: string) => {
    try {
      startTransition(() => {
        signupAction({ email, password });
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
