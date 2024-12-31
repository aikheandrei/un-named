"use client";

import { useContext } from "react";

import { loginContext } from "@/providers/authProvider";

export const useLogin = () => {
  const { loginError, loginIsPending, handleLogin } = useContext(loginContext);

  return { loginError, loginIsPending, handleLogin };
};
