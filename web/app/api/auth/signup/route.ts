import supabaseAdmin from "@/lib/supabase/admin";
-[];
import { GenerateLinkParams } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const supabase = supabaseAdmin();

  const { email, password } = await req.json();

  const userData: GenerateLinkParams = {
    type: "signup",
    email: email,
    password: password,
  };

  try {
    const { data, error } = await supabase.auth.admin.generateLink(userData);

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
