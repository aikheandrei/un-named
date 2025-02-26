import { redirect } from "next/navigation";
import { startTransition, useActionState, useEffect } from "react";

import { verifyOtp } from "@/lib/auth/api";

type OtpVerifyAction = (otp: string, email: string | null) => Promise<void>;

interface OtpReturnTypes {
  otpError: string | null;
  otpIsPending: boolean;
  handleOtpVerify: OtpVerifyAction;
}

const useVerifyOtp = (): OtpReturnTypes => {
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
