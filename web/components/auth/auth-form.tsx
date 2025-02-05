"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { login, signup, signupWithOtp } from "../../app/sign-in/actions";

import OtpForm from "./otp-form";

const AuthForm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isVerify, setIsVerify] = useState(false);

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
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button>
          <button formAction={handleSignin}>Send OTP</button>
        </form>
      )}
    </>
  );
};

export default AuthForm;
