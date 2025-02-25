import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { useSignOut } from "@/hooks/useAuth";

const UserPage = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/sign-un");
  }

  return (
    <main>
      <p>Hello {data.user.email}</p>
      <form action={useSignOut}>
        <button type="submit">Sign out</button>
      </form>
    </main>
  );
};

export default UserPage;
