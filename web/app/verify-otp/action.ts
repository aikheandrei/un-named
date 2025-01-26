"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function verifyOtp(
  prevState: { email: string | null },
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
      redirect("/error");
    }

    redirect("/");
  }

  return { email };
}
