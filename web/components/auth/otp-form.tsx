"use client";

import { startTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import useVerifyOtp from "@/hooks/useVerifyOtp";

const OtpSchema = z.object({
  otp: z.string().min(6, { message: "Invalid OTP" }),
});

const OtpForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof OtpSchema>>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { otpError, otpIsPending, handleOtpVerify } = useVerifyOtp();

  const handleOtpSubmit = (data: z.infer<typeof OtpSchema>) => {
    startTransition(() => {
      handleOtpVerify(data.otp, email);
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit(handleOtpSubmit)}>
        <label htmlFor="token">OTP:</label>
        <input placeholder="OTP" {...register("otp")} />
        <button type="submit" disabled={otpIsPending}>
          {otpIsPending ? "Submitting..." : "Submit OTP"}
        </button>
        {errors.otp && <span>{errors.otp.message}</span>}
        {otpError && <p style={{ color: "red" }}>{otpError}</p>}
      </form>
    </main>
  );
};

export default OtpForm;
