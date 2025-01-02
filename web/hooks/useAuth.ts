import { startTransition, useActionState } from "react";
import { useRouter } from "next/navigation";

import { AuthApi } from "@/lib/auth/api";

export const login = () => {
  const router = useRouter();

  const [loginState, loginAction, loginIsPending] = useActionState(
    AuthApi.login,
    {
      error: "",
    },
  );

  const handleLogin = (email: string, password: string) => {
    try {
      startTransition(() => {
        console.log("hello world");
        loginAction({ email, password });

        if (!loginState.error) {
          router.push("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { loginState, loginIsPending, handleLogin };
};
