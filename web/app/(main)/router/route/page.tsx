"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";

export const runtime = "edge";

const RoutePage = () => {
  const [userInfo, setUserInfo] = useState<{ user: any } | null>(null);
  const [isSignedIn, setIsSignedIn] = useState<boolean>();
  const [comments, setComments] = useState<{ id: number; content: string }[]>(
    [],
  );

  const getSession = async () => {
    const session = await fetch(`/api/auth`).then((res) => res.json());
    setUserInfo(session);

    if (session) {
      setIsSignedIn(true);
    }
  };

  const fetchComments = async () => {
    const comments = await fetch(`/api/comments`).then((res) => res.json());
    setComments(comments);
  };

  useEffect(() => {
    getSession();
    fetchComments();
  }, []);

  return (
    <section className="grid h-[150svh] items-center justify-center">
      <div>
        <p>{userInfo?.user.name}</p>
        <img src={userInfo?.user.image} alt="User Avatar" />

        <form
          className="mb-10 mt-10 space-y-2"
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const content = formData.get("content") as string;

            if (isSignedIn) {
              const req = await fetch(`/api/comments`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ content }),
              });

              console.log(req.json);
            } else {
              alert("sign in first");
            }

            fetchComments();
          }}
        >
          <Input name="content" type="text" placeholder="comment" />
          <Button
            className={buttonVariants({ variant: "outline" })}
            type="submit"
          >
            Add Comment
          </Button>
        </form>

        {comments.map(({ id, content }) => (
          <p key={id}>
            {id} {content}
          </p>
        ))}
      </div>
    </section>
  );
};

export default RoutePage;
