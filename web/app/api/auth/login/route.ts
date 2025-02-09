import { AuthService } from "@/lib/auth/service";

export async function POST(req: Request) {
  try {
    const authService = new AuthService();

    const { email, password } = await req.json();

    const { data, error } = await authService.login({ email, password });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
