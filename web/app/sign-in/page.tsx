import { login, signinWithOtp, signup } from "./actions";

const SignInPage = () => {
  return (
    <main>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
        <button formAction={signinWithOtp}>Send OTP</button>
      </form>
    </main>
  );
};

export default SignInPage;
