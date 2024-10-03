"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const runtime = "edge";

const RoutePage = () => {
  const [comments, setComments] = useState<{ id: number }[]>([]);

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
        <Link href="/route/overview">Sign in</Link>
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const req = await fetch(`/api/comments`, {
              method: "POST",
            });

            console.log(req.json);

            fetchComments();
          }}
        >
          <input name="comment" type="text" placeholder="comment" />
          <button type="submit">comment</button>
        </form>
        {comments.map(({ id }) => (
          <p key={id}>{id}</p>
        ))}
      </div>
    </section>
  );
};

export default RoutePage;
