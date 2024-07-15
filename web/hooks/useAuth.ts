"use client";

import { useContext } from "react";

import { loginContext, signupContext } from "@/providers/authProvider";

export const useLogin = () => {
  const { error, isPending, handleAuth } = useContext(loginContext);

  return {
    loginError: error,
    loginIsPending: isPending,
    handleLogin: handleAuth,
  };
};

export const useSignup = () => {
  const { error, isPending, handleAuth } = useContext(signupContext);

  return {
    signupError: error,
    signupIsPending: isPending,
    handleSignup: handleAuth,
  };
};
