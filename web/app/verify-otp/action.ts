"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function verifyOtp(
  prevState: { error?: string; email: string },
  formData: FormData,
) {
  const email = prevState.email;
  const token = formData.get("token") as string;

  if (email && token) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });

    if (error) {
      return { email, error: error.message };
    }

    redirect("/");
  }

  console.log(email);
  return { email };
}
