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
  }, [state]);

  const handleAuth = (email: string, password: string) => {
    startTransition(async () => {
      authAction({ email, password });
    });
  };

  return { error, isPending, handleAuth };
};

export default useAuthAction;
