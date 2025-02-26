import { verifyOtp } from "@/lib/auth/api";
import { startTransition, useActionState } from "react";

type OtpVerifyAction = (otp: string, email: string) => Promise<void>;

interface OtpReturnTypes {
  otpError: string | null;
  otpIsPending: boolean;
  handleOtpVerify: OtpVerifyAction;
}

const useVerifyOtp = (): OtpReturnTypes => {
  const [state, formAction, isPending] = useActionState(verifyOtp, {
    error: "",
  });

  const handleOtpVerify: OtpVerifyAction = async (otp, email) => {
    startTransition(() => {
      formAction({ otp, email });
    });
  };

  return {
    otpError: state.error,
    otpIsPending: isPending,
    handleOtpVerify,
  };
};

export default useVerifyOtp;
