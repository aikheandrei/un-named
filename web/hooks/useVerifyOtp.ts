import { redirect } from "next/navigation";
import { startTransition, useActionState, useEffect } from "react";

import { verifyOtp } from "@/lib/auth/api";

import { OtpReturnType, OtpVerifyAction } from "@/types/otp";

const useVerifyOtp = (): OtpReturnType => {
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

export default useVerifyOtp;
