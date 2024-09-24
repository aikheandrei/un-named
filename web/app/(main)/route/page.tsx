"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";

export const runtime = "edge";

const RoutePage = () => {
  const [comments, setComments] = useState<{ id: number; content: string }[]>(
    [],
  );

  const fetchComments = async () => {
    const res = await fetch(`/api/comments`);
    setComments(await res.json());

    console.log(comments);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <section className="grid h-[100svh] items-center justify-center">
      <div>
        <Link
          className={`${buttonVariants({ variant: "default" })} mb-10`}
          href="/route/overview"
        >
          Sign in
        </Link>
        <form
          className="mb-10 space-y-2"
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const content = formData.get("content") as string;

            const req = await fetch(`/api/comments`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ content }),
            });

            console.log(req.json);

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
