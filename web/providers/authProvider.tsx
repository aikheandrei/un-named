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
import { LoginContextType, SignupContextType } from "@/types/auth";
import useAuthAction from "@/hooks/useAuthAction";

interface AuthContextType {
  error?: string;
  isPending: boolean;
  handleAuth: (email: string, password: string) => void;
}

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
  const [signupError, setSignupError] = useState<string>();

  const [signupState, signupAction, signupIsPending] = useActionState(
    AuthApi.signup,
    {
      error: "",
      success: false,
    },
  );

  useEffect(() => {
    if (signupState.error) {
      setSignupError(signupState.error);
    }
    console.log("hello signup");
  }, [signupState]);

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

  const loginAuth = useAuthAction({
    action: AuthApi.login,
    onSucess: () => router.push("/"),
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
