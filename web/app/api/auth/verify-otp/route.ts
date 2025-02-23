import { VerifyOtpParams } from "@supabase/supabase-js";

import { createServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = await createServer();

  const { otp, email } = await req.json();

  const otpData: VerifyOtpParams = {
    email,
    token: otp,
    type: "email",
  };

  try {
    const { data, error } = await supabase.auth.verifyOtp(otpData);

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
