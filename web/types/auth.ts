// Global

export interface AuthState {
  error: string;
  success: boolean;
}

// useAuthAction

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

// authReducer

export type AuthAction =
  | { type: "LOGIN"; payload: AuthState }
  | { type: "SIGNUP"; payload: AuthState };

export type AuthActionType = "LOGIN" | "SIGNUP";

type AuthDispatchFunction = (
  prevState: { error: string; success: boolean } | undefined,
  credentials: { email: string; password: string },
  authType: string,
) => void;

export interface AuthDispatchActions {
  login: AuthDispatchFunction;
  signup: AuthDispatchFunction;
}

// authProvider

export interface AuthContextType {
  error?: string;
  isPending: boolean;
  handleAuth: (email: string, password: string) => void;
}

// useAuth

export interface AuthReturnTypes {
  login: {
    loginError: string | null;
    loginIsPending: boolean;
    handleLogin: (email: string, password: string) => Promise<void>;
  };
  signup: {
    signupError: string | null;
    signupIsPending: boolean;
    handleSignup: (email: string, password: string) => Promise<void>;
  };
}

// authProvider & useAuth

export type AuthType = "login" | "signup";
