import { startTransition, useActionState } from "react";

import { AuthApi } from "@/lib/auth/api";
import { useRouter } from "next/navigation";

const login = (email: string, password: string) => {
  const router = useRouter();

  const [loginState, loginAction, loginIsPending] = useActionState(
    AuthApi.login,
    {
      errora: "",
    },
  );

  const handleLogin = () => {
    loginAction({ email, password });
    router.push("/");
  };

  return { loginState, loginIsPending, handleLogin };
};

export default login;
