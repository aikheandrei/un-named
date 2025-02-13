"use server";

import { createClient } from "@/lib/supabase/server";
import supabaseAdmin from "@/lib/supabase/admin";
import { GenerateLinkParams } from "@supabase/supabase-js";
import { AuthError } from "@supabase/supabase-js";
// import Mailjet from "node-mailjet";

const handleError = (error: unknown) => {
  const errorMessage =
    error instanceof AuthError ? error.message : "Unknown error";

  return new Error(errorMessage);
};

async function login(req: { email: string; password: string }) {
  const supabase = await createClient();

  const userData = {
    email: req.email,
    password: req.password,
  };

  try {
    const { data, error } = await supabase.auth.signInWithPassword(userData);

    if (error) {
      return { error: error.message };
    }

    return { data };
  } catch (error) {
    throw handleError(error);
  }
}

async function signupWithOtp(req: { email: string; password: string }) {
  const supabase = supabaseAdmin();

  const { email, password } = req;

  const userData: GenerateLinkParams = {
    type: "signup",
    email: email,
    password: password,
  };

  try {
    const { error } = await supabase.auth.admin.generateLink(userData);

    if (error) {
      return { error: error.message };
    }

    console.log(userData);
    return { email, password };
  } catch (error) {
    throw handleError(error);
  }

  // const mailjet = Mailjet.apiConnect(
  //   `${process.env.MJ_APIKEY_PUBLIC}`,
  //   `${process.env.MJ_APIKEY_PRIVATE}`,
  // );

  // mailjet.post("send", { version: "v3.1" }).request({
  //   Messages: [
  //     {
  //       From: {
  //         Email: "ikeandrie.ro@gmail.com",
  //         Name: "Me",
  //       },
  //       To: [
  //         {
  //           Email: emailData.email,
  //           Name: "You",
  //         },
  //       ],
  //       Subject: "OTP",
  //       TextPart: "OTP Verification Code",
  //       HTMLPart: `<p>${data.properties.email_otp}</p>`,
  //     },
  //   ],
  // });
}

export { login, signupWithOtp };
