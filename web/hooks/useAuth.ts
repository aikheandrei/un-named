"use client";

import { useContext } from "react";

import { loginContext, signupContext } from "@/providers/authProvider";

export const useLogin = () => {
  const { loginError, loginIsPending, handleLogin } = useContext(loginContext);

  return { loginError, loginIsPending, handleLogin };
};

export const useSignup = () => {
  const { signupError, signupIsPending, handleSignup } =
    useContext(signupContext);

  return { signupError, signupIsPending, handleSignup };
};
