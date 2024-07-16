"use client";

import { useContext } from "react";

import { loginContext, signupContext } from "@/providers/authProvider";

export const useLogin = () => {
  const { error, isPending, handleAuth } = useContext(loginContext);

  return { error, isPending, handleAuth };
};

export const useSignup = () => {
  const { signupError, signupIsPending, handleSignup } =
    useContext(signupContext);

  return { signupError, signupIsPending, handleSignup };
};
