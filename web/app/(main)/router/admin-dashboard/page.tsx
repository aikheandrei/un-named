"use client";

import { UserProps } from "@/types/props";
import Image from "next/image";
import { useEffect, useState } from "react";

export const runtime = "edge";

const AdminDashboardPage = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  const checkUserSignIn = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/auth`,
      ).then((res) => res.json());

      if (res) {
        setUser(res.user);
      }
    } catch (error) {
      console.error("Failed to fetch user admin status", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    checkUserSignIn();
  }, []);

  if (loading) {
    return (
      <section className="grid h-[100svh] items-center justify-center font-geistmono">
        <p>loading...</p>
      </section>
    );
  }

  return (
    <>
      {user?.admin ? (
        <section className="grid h-[100svh] items-center justify-center font-geistmono text-sm">
          <div>
            <p>
              signed in {user?.name} {user?.admin}
            </p>
            <Image
              src="/d85d022bedcf129ebd23a2b21e97ef19.jpg"
              alt=""
              width={300}
              height={300}
              priority
            />
            <p className="mt-2">(deserted)</p>
          </div>
        </section>
      ) : (
        <section className="grid h-[100svh] items-center justify-center font-geistmono">
          <p className="text-sm">You're not an admin</p>
        </section>
      )}
    </>
  );
};

export default AdminDashboardPage;
