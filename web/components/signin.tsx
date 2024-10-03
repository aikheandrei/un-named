import { signIn } from "@/app/api/auth/auth";

export const SignIn = async () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("facebook");
        }}
      >
        <button type="submit">Signin with Facebook</button>
      </form>
    </>
  );
};
