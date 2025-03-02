"use client";

import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";

import { createBrowser } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const supabase = createBrowser();
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        redirect("/sign-up");
      }
      return data.user as User;
    },
  });

  return { data, isPending };
};

export default useUser;
