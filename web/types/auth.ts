export interface LoginContextType {
  loginError?: string;
  loginIsPending: boolean;
  handleLogin: (email: string, password: string) => void;
}
