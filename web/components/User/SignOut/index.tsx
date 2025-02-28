"use client";

import { useTransition } from "react";
import { redirect } from "next/navigation";

import { createBrowser } from "@/lib/supabase/client";

const SignOut = () => {
  const supabase = createBrowser();

  const [signOutPending, startSignOut] = useTransition();

  const signOut = () => {
    startSignOut(async () => {
      await supabase.auth.signOut();
      redirect("/sign-up");
    });
  };

  return (
    <form action={signOut}>
      <button type="submit">
        {signOutPending ? "Signing out..." : "Sign out"}
      </button>
    </form>
  );
};

export default SignOut;
