"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";

import { createBrowser } from "@/lib/supabase/client";

import SignOut from "./SignOut";

const UserPage = () => {
  const supabase = createBrowser();

  const [user, setUser] = useState<User>();

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
      <h1>{user?.email}</h1>
      <SignOut />
    </main>
  );
};

export default UserPage;
