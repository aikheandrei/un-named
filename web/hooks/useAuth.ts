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
        loginAction({ email, password });
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.log(Error(errorMessage));
    }
  };

  return { loginError, loginIsPending, handleLogin };
};
