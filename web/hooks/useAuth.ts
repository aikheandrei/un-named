import { startTransition, useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AuthApi } from "@/lib/auth/api";

export const login = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string>();

  const [loginState, loginAction, loginIsPending] = useActionState(
    AuthApi.login,
    {
      error: "",
      success: false,
    },
  );

  useEffect(() => {
    if (!loginState.success) {
      setLoginError(loginState.error);
    } else {
      router.push("/");
    }
  }, [loginState]);

  const handleLogin = (email: string, password: string) => {
    try {
      startTransition(() => {
        console.log("hello world");
        loginAction({ email, password });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { loginError, loginIsPending, handleLogin };
};
