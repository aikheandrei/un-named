import { startTransition, useActionState, useEffect, useState } from "react";

interface AuthState {
  error: string;
  success: boolean;
}

interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthActions {
  action: (
    currentState: AuthState,
    credentials: AuthCredentials,
  ) => Promise<AuthState>;
  onSucess?: () => void;
}

const useAuthAction = ({ action, onSucess }: AuthActions) => {
  const [error, setError] = useState<string>();

  const actionWrapper = async (
    prevState: AuthState,
    credentials: AuthCredentials,
  ): Promise<AuthState> => {
    return action(prevState, credentials);
  };

  const [state, authAction, isPending] = useActionState(actionWrapper, {
    error: "",
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      onSucess?.();
    } else {
      setError(state.error);
    }
  }, [state]);

  const handleAuth = (email: string, password: string) => {
    try {
      startTransition(() => {
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
