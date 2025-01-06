"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { verifyOtp } from "@/actions/auth/verify-otp";

export const OtpSchema = z.object({
  otp: z.string().min(6, { message: "Invalid Token" }),
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

  const [state, formAction, isPending] = useActionState(verifyOtp, {
    error: "",
    email: email || "",
  });

  return (
    <main>
      <form onSubmit={handleSubmit(formAction)}>
        <label htmlFor="token">OTP:</label>
        <input placeholder="OTP" type="number" {...register("otp")} />
        <button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit OTP"}
        </button>
        {errors.otp && <span>{errors.otp.message}</span>}
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      </form>
    </main>
  );
};

export default OtpForm;
