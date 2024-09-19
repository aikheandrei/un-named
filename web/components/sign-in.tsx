import { auth, signIn, signOut } from "@/app/api/auth/auth";
// import { redirect } from "next/navigation";

export const SignIn = async () => {
  const session = await auth();

  // if (session?.user) {
  //   redirect("/route");
  // }

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
            <button type="submit">Sign out</button>
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
        <>
          <form
            action={async () => {
              "use server";
              await signIn("facebook");
            }}
          >
            <button type="submit">Sign in with Facebook</button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit">Sign in with google</button>
          </form>
        </>
      )}
    </div>
  );
};
