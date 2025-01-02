import { login } from "@/lib/auth/service";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const { data, error } = await login({ email, password });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    console.log("hello world");
    return Response.json(data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
