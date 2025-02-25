// Global

export interface AuthState {
  error: string;
  success: boolean;
}

type AuthHandlerAction = (email: string, password: string) => void;

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
  onSuccess: (email?: string) => void;
}

// authReducer

export type AuthAction =
  | { type: "LOGIN"; payload: AuthState }
  | { type: "SIGNUP"; payload: AuthState };

export type AuthActionType = "LOGIN" | "SIGNUP";

export type AuthDispatchAction = (
  prevState: { error: string; success: boolean },
  credentials: { email: string; password: string },
  authType: string,
) => void;

// authProvider

export interface AuthContextType {
  error?: string;
  isPending: boolean;
  handleAuth: AuthHandlerAction;
}

// useAuth

export interface AuthReturnTypes {
  login: {
    loginError: string | null;
    loginIsPending: boolean;
    handleLogin: AuthHandlerAction;
  };
  signup: {
    signupError: string | null;
    signupIsPending: boolean;
    handleSignup: AuthHandlerAction;
  };
}
