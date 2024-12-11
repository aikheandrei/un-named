import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

export const RatingForm = () => {
  const [userInfo, setUserInfo] = useState<{
    user: any;
    userId: string;
  } | null>(null);
  const [isSignedIn, setIsSignedIn] = useState<boolean>();

  const getSession = async () => {
    const session = await fetch(`/api/auth`).then((res) => res.json());
    setUserInfo(session);

    if (session) {
      setIsSignedIn(true);
    }
  };

  return (
    <div>
      <form
        className="mb-10 space-y-2"
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const content = formData.get("content") as string;

          if (isSignedIn) {
            await fetch(`/api/comments`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                content,
                userId: userInfo?.userId,
              }),
            });
          } else {
            alert("sign in first");
          }
        }}
      >
        <Input name="content" type="text" placeholder="comment" />
        <Button variant={"outline"} type="submit">
          Add Comment
        </Button>
      </form>
    </div>
  );
};
