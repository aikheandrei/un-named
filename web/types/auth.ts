export interface AuthState {
  error: string;
  success: boolean;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthActions {
  action: (
    currentState: AuthState,
    credentials: AuthCredentials,
  ) => Promise<AuthState>;
  onSuccess?: () => void;
}

export type AuthAction =
  | { type: "LOGIN"; payload: AuthState }
  | { type: "SIGNUP"; payload: AuthState };

export interface AuthDispatchActions {
  login: (
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
    authType: string,
  ) => void;
  signup: (
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
    authType: string,
  ) => void;
}

export interface AuthContextType {
  error?: string;
  isPending: boolean;
  handleAuth: (email: string, password: string) => void;
}
