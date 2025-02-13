"use client";

import { startTransition, useActionState, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// import { login, signupWithOtp } from "@/actions/auth/auth-actions";
import { login } from "@/hooks/useAuth";

import OtpForm from "./otp-form";
import FormField from "./ui/auth-field";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { loginError, loginIsPending, handleLogin } = login();

  const onSubmit = (data: z.infer<typeof FormSchema>, isSignup: boolean) => {
    if (isSignup) {
      // startTransition(() => {
      //   otpAction({ email: data.email, password: data.password });
      // });
      // router.replace(pathname + "?email=" + data.email);
      // setIsVerify(!isVerify);
    } else {
      handleLogin(data.email, data.password);
    }
  };

  return (
    <>
      {/* {isVerify && !otpIsPending && !otpState.error ? (
      //   <OtpForm />
      // ) : ( */}
      <form className="flex w-52 flex-col p-2">
        <label htmlFor="email">Email:</label>
        <FormField
          type="email"
          name="email"
          register={register}
          error={errors.email}
        />
        <label htmlFor="password">Password:</label>
        <FormField
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <FormField
          type="password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />

        {/* {(otpState.error || loginState.error) && (
        //   <p style={{ color: "red" }}>{otpState.error || loginState.error}</p>
        // )} */}

        {loginError && <p style={{ color: "red" }}>{loginError}</p>}

        <button
          type="button"
          onClick={handleSubmit((data) => onSubmit(data, true))}
        >
          {/* {otpIsPending ? "Signing up..." : "Sign up"} */}
        </button>
        <button
          type="button"
          onClick={handleSubmit((data) => onSubmit(data, false))}
        >
          {loginIsPending ? "Logging in..." : "Log in"}
        </button>
      </form>
      {/* )} */}
    </>
  );
};

export default AuthForm;
