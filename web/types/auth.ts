export interface LoginContextType {
  loginError?: string;
  loginIsPending: boolean;
  handleLogin: (email: string, password: string) => void;
}

export interface SignupContextType {
  signupError?: string;
  signupIsPending: boolean;
  handleSignup: (email: string, password: string) => void;
}
