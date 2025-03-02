"use client";

import { useContext, startTransition, useActionState, useEffect } from "react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createServer } from "@/lib/supabase/server";

import { loginContext, signupContext } from "@/providers/authProvider";
import { verifyOtp } from "@/lib/auth/api";
import { AuthReturnTypes, AuthType } from "@/types/auth";
import { OtpReturnType, OtpVerifyAction } from "@/types/otp";

export const useAuth = <T extends AuthType>(authType: T) => {
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

export const useSignOut = async () => {
  //   const supabase = await createClient();
  //
  //   const { error } = await supabase.auth.signOut();
  //
  //   if (error) {
  //     console.log(error);
  //   }
  //
  //   revalidatePath("/sign-up", "layout");
  //   redirect("/sign-up");
};
