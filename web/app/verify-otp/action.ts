"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function verifyOtp(
  prevState: { error?: string; email: string },
  formData: FormData,
) {
  const email = formData.get("email") as string;
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

    console.log(email);
    console.log(token);
    redirect("/");
  }

  console.log(email);
  console.log(token);
  return { email };
}
