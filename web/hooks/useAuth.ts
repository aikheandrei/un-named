"use client";

import { useContext, startTransition, useActionState, useEffect } from "react";
import { redirect } from "next/navigation";

import { loginContext, signupContext } from "@/providers/authProvider";
import { verifyOtp } from "@/lib/auth/api";
import { AuthContextType, AuthType } from "@/types/auth";
import { OtpReturnType, OtpVerifyAction } from "@/types/otp";

export const useAuth = (authType: AuthType): AuthContextType => {
  const { error, isPending, handleAuth } =
    authType === "login" ? useContext(loginContext) : useContext(signupContext);

  return { error, isPending, handleAuth };
};

export const useVerifyOtp = (): OtpReturnType => {
  const [state, formAction, isPending] = useActionState(verifyOtp, {
    error: "",
    success: false,
  });

  const handleOtpVerify: OtpVerifyAction = async (otp, email) => {
    startTransition(() => {
      formAction({ otp, email });
    });
  };

  useEffect(() => {
    state.success && redirect("/user");
  }, [state]);

  return {
    otpError: state.error,
    otpIsPending: isPending,
    handleOtpVerify,
  };
};
