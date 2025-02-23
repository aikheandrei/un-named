"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createServer } from "@/lib/supabase/server";

export async function signOut() {
  const supabase = await createServer();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/sign-up", "layout");
  redirect("/sign-up");
}
