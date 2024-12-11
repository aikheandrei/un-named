"use client";

import { Comment } from "@/components/router/comment";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useEffect, useState } from "react";

export const runtime = "edge";

const RoutePage = () => {
  const [comments, setComments] = useState<
    { id: number; content: string; userId: string }[]
  >([]);
  const [users, setUsers] = useState<
    { id: string; name: string; image: string }[]
  >([]);

  const fetchComments = async () => {
    const comments = await fetch(`/api/comments`).then((res) => res.json());
    setComments(comments);
  };

  const fetchUsers = async () => {
    const users = await fetch(`/api/users`).then((res) => res.json());
    setUsers(users);
  };

  useEffect(() => {
    fetchComments();
    fetchUsers();
  }, []);

  return (
    <section>
      <div className="mx-auto w-[40rem] border-x-2 pt-14">
        {/* <p>{userInfo?.user.name}</p>
        <p>{userInfo?.userId}</p>
        <img src={userInfo?.user.image} alt="User Avatar" /> */}

        {comments.map(({ id, content, userId }) => {
          const user = users.find((user) => user.id === userId);
          console.log(user?.image);

          return (
            <Comment
              key={id}
              img={user?.image}
              userName={user?.name}
              userId={user?.id}
              content={content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RoutePage;
