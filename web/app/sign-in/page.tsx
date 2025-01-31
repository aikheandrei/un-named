"use client";

import { useState, useActionState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { verifyOtp } from "../verify-otp/action";

import { login, signupWithOtp, signup } from "./actions";

const SignInPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [isVerify, setIsVerify] = useState(false);

  const handleSignin = (formData: FormData) => {
    signupWithOtp(formData);
    setIsVerify(!isVerify);

    router.replace(pathname + "?email=" + formData.get("email"));
  };

  const [state, formAction, isPending] = useActionState(verifyOtp, {
    error: "",
    email: email || "",
  });

  return (
    <main>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
        <button formAction={handleSignin}>Send OTP</button>
      </form>

      {isVerify && (
        <form action={formAction}>
          <input type="hidden" name="email" value={email || ""} />
          <label htmlFor="token">OTP:</label>
          <input
            placeholder="OTP"
            id="token"
            name="token"
            type="number"
            required
          />
          <button disabled={isPending}>
            {isPending ? "Submitting..." : "Submit OTP"}
          </button>
          {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        </form>
      )}
    </main>
  );
};

export default SignInPage;
