"use client";

import { useEffect, useState, useTransition } from "react";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";

import { createBrowser } from "@/lib/supabase/client";
import UserProfile from "@/components/User/UserProfile";

const UserPage = () => {
  const supabase = createBrowser();

  const [signOutPending, startSignOut] = useTransition();
  const [user, setUser] = useState<User>();

  const signOut = () => {
    startSignOut(async () => {
      await supabase.auth.signOut();
      redirect("/sign-up");
    });
  };

  const fetchUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      redirect("/sign-un");
    }
    setUser(data?.user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main>
      <UserProfile />
    </main>
  );
};

export default UserPage;
