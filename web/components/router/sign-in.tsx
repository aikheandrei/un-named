import { auth, signIn, signOut } from "@/app/api/auth/auth";
import { Button } from "../ui/button";

export const SignIn = async () => {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div className="flex flex-col items-center justify-center gap-2">
          {session.user && (
            <div className="flex items-center justify-center gap-2">
              {session.user.image && (
                <img
                  className="size-14 rounded-full"
                  src={session.user.image}
                  alt="User Avatar"
                />
              )}
              <p className="text-lg">{session.user.name}</p>
            </div>
          )}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">Sign out</Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button variant={"outline"} type="submit">
              Sign in with Google
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("facebook");
            }}
          >
            <Button variant={"outline"} type="submit">
              Sign in with Facebook
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
