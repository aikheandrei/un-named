"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import supabaseAdmin from "@/lib/supabase/admin";
import { GenerateLinkParams } from "@supabase/supabase-js";
// import Mailjet from "node-mailjet";

export async function login(
  prevState: { error?: string },
  data: { email: string; password: string },
) {
  const supabase = await createClient();

  const userData = {
    email: data.email,
    password: data.password,
  };

  const { error } = await supabase.auth.signInWithPassword(userData);

  if (error) {
    return { error: prevState.error || error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signupWithOtp(
  prevState: { error?: string },
  data: { email: string; password: string },
) {
  const supabase = supabaseAdmin();

  const { email, password } = data;

  const userData: GenerateLinkParams = {
    type: "signup",
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.admin.generateLink(userData);

  if (error) {
    return { error: prevState.error || error.message };
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

  console.log(data);
  return { email, password };
}
