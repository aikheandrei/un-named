import { AuthService } from "@/lib/auth/service";

export async function POST(req: Request) {
  const authService = new AuthService();

  const { email, password } = await req.json();

  const { data } = await authService.login({ email, password });

  return Response.json(data);
}
