"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";

import { createBrowser } from "@/lib/supabase/client";

const useUser = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const supabase = createBrowser();

    supabase.auth.getUser().then(({ data }) => {
      if (!data?.user) return redirect("/sign-up");
      setUser(data.user);

      console.log(data);
    });
  }, []);

  return user ? { user } : {};
};

export default useUser;
