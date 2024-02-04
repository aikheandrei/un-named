"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

import { verifyOtp } from "../../app/verify-otp/action";

const OtpForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [state, formAction, isPending] = useActionState(verifyOtp, {
    error: "",
    email: email || "",
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
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      </form>
    </main>
  );
};

export default OtpForm;
