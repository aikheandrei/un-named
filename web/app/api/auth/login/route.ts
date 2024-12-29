import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();

  const { email, password } = await req.json();

  const userData = {
    email,
    password,
  };

  try {
    const { data, error } = await supabase.auth.signInWithPassword(userData);

    if (error) {
      console.log(error);
      return Response.json({ error: error.message }, { status: 400 });
    }

    console.log(data);
    return Response.json(data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
