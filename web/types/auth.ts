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
  onSucess?: () => void;
}

export interface AuthContextType {
  error?: string;
  isPending: boolean;
  handleAuth: (email: string, password: string) => void;
}
