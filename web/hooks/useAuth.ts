"use client";

import { useContext } from "react";

import { loginContext, signupContext } from "@/providers/authProvider";
import { AuthReturnTypes, AuthType } from "@/types/auth";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const useAuth = <T extends AuthType>(
  authType: T,
): AuthReturnTypes[T] => {
  const context =
    authType === "login" ? useContext(loginContext) : useContext(signupContext);

  const { error, isPending, handleAuth } = context;

  return {
    [`${authType}Error`]: error,
    [`${authType}IsPending`]: isPending,
    [`handle${capitalize(authType)}`]: handleAuth,
  } as AuthReturnTypes[T];
};
