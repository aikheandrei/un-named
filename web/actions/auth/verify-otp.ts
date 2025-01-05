"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function verifyOtp(
  prevState: { error?: string },
  data: { otp: string; email: string },
) {
  const { otp, email } = data;

  if (otp && email) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    if (error) {
      return { error: prevState.error || error.message };
    }

    redirect("/");
  }

  return { otp, email };
}
