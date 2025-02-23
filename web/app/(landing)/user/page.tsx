"use client";

import { useTransition } from "react";
import { redirect } from "next/navigation";

import { createBrowser } from "@/lib/supabase/client";

const UserPage = () => {
  const supabase = createBrowser();

  const [signOutPending, startSignOut] = useTransition();

  const signOut = () => {
    startSignOut(async () => {
      await supabase.auth.signOut();
      redirect("/sign-up");
    });
  };

  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/sign-un");
  // }

  return (
    <main>
      <form action={signOut}>
        <button type="submit">
          {signOutPending ? "Signing out..." : "Sign out"}
        </button>
      </form>
    </main>
  );
};

export default UserPage;
