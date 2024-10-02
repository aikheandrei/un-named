import { auth, signIn, signOut } from "@/app/api/auth/auth";

export const SignIn = async () => {
  const session = await auth();

  return (
    <div>
      {session ? (
        <>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign out with Facebook</button>
          </form>
          {session.user && (
            <>
              {session.user.image && (
                <img src={session.user.image} alt="User Avatar" />
              )}
              <p>{session.user.name}</p>
            </>
          )}
        </>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("facebook");
          }}
        >
          <button type="submit">Sign in with Facebook</button>
        </form>
      )}
    </div>
  );
};
