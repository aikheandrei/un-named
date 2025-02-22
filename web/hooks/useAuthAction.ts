import { startTransition, useActionState, useEffect, useState } from "react";

import { AuthActions, AuthCredentials, AuthState } from "@/types/auth";

const useAuthAction = ({ action, onSuccess }: AuthActions) => {
  const [error, setError] = useState<string>();
  const [currentEmail, setCurrentEmail] = useState<string>();

  const actionWrapper = async (
    prevState: AuthState,
    credentials: AuthCredentials,
  ): Promise<AuthState> => {
    setCurrentEmail(credentials.email);
    return action(prevState, credentials);
  };

  const [state, authAction, isPending] = useActionState(actionWrapper, {
    error: "",
    success: false,
  });

  useEffect(() => {
    if (state.success && currentEmail) {
      onSuccess?.(currentEmail);
    } else {
      setError(state.error);
    }
    console.log(currentEmail);
  }, [state]);

  const handleAuth = (email: string, password: string) => {
    try {
      startTransition(async () => {
        authAction({ email, password });
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.log(Error(errorMessage));
    }
  };

  return { error, isPending, handleAuth };
};

export default useAuthAction;
