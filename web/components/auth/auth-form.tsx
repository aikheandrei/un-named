"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { z } from "zod";

import { signupWithOtp } from "../../app/sign-in/actions";

import OtpForm from "./otp-form";

const FormSchema = z
  .object({
    email: z.string().email({ message: "Invalid Email Address" }),
    password: z.string().min(6, { message: "Password is too short" }),
    confirmPassword: z.string().min(6, { message: "Password is too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does't match",
    path: ["confirmPassword"],
  });

const AuthForm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isVerify, setIsVerify] = useState(false);

  const form = useForm();

  const handleSignin = (formData: FormData) => {
    signupWithOtp(formData);
    setIsVerify(!isVerify);

    router.replace(pathname + "?email=" + formData.get("email"));
  };

  return (
    <>
      {isVerify ? (
        <OtpForm />
      ) : (
        <form className="flex w-52 flex-col p-2">
          <label htmlFor="email">Email:</label>
          <input
            className="border-slate-600 border-2"
            id="email"
            name="email"
            type="email"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            className="border-slate-600 border-2"
            id="password"
            name="password"
            type="password"
            required
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            className="border-slate-600 border-2"
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
          />

          <button formAction={handleSignin}>Send OTP</button>
        </form>
      )}
    </>
  );
};

export default AuthForm;
