"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { createClient } from "@/lib/supabase/server";

import { OtpSchema } from "@/components/auth/otp-form";

export async function verifyOtp(
  prevState: { error?: string; email: string },
  data: z.infer<typeof OtpSchema>,
) {
  const email = prevState.email;
  const otp = data.otp;

  if (prevState.email && otp) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    if (error) {
      return { email, error: error.message };
    }
    redirect("/");
  }

  return { email };
}
