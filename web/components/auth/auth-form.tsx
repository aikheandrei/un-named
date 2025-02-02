"use client";

import { useState } from "react";
import { useForm, FieldError, UseFormRegister } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

type ValidFieldNames = "email" | "password" | "confirmPassword";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

interface FormFieldProps {
  type: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  register,
  error,
}) => (
  <>
    <input
      className="border-slate-600 border-2"
      type={type}
      {...register(name)}
    />
    {error && <span>{error.message}</span>}
  </>
);

const AuthForm = () => {
  // const pathname = usePathname();
  // const router = useRouter();
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

  const handleSignin = async (data: z.infer<typeof FormSchema>) => {
    // signupWithOtp(data);
    // setIsVerify(!isVerify);
    // router.replace(pathname + "?email=" + data.get("email"));

    console.log(data);
  };

  return (
    <>
      {isVerify ? (
        <OtpForm />
      ) : (
        <form
          onSubmit={handleSubmit(handleSignin)}
          className="flex w-52 flex-col p-2"
        >
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

          <button type="submit">Send OTP</button>
        </form>
      )}
    </>
  );
};

export default AuthForm;
