"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

import { verifyOtp } from "./action";

const VerifyOtpPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [state, formAction, isPending] = useActionState(verifyOtp, {
    email,
  });

  return (
    <main>
      <form action={formAction}>
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
      </form>
    </main>
  );
};

export default VerifyOtpPage;
