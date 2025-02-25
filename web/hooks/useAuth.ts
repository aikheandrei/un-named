import { useContext, startTransition, useActionState, useEffect } from "react";
import { redirect } from "next/navigation";

import { loginContext, signupContext } from "@/providers/authProvider";
import { verifyOtp } from "@/lib/auth/api";
import { AuthReturnTypes, AuthType } from "@/types/auth";
import { OtpReturnType, OtpVerifyAction } from "@/types/otp";

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
