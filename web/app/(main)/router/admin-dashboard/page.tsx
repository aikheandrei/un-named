"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const runtime = "edge";

interface UserProps {
  id: string;
  name: string;
  email: string;
  emailVerified: string | null;
  image: string | null;
  admin: boolean | null;
}

const AdminDashboardPage = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const checkUserSignIn = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/auth`,
    ).then((res) => res.json());

    if (res) {
      setUser(res.user);
    }
  };

  useEffect(() => {
    checkUserSignIn();
  }, []);

  return (
    <>
      {user?.admin ? (
        <section className="grid h-[100svh] items-center justify-center font-geistmono text-sm">
          <div>
            {/* <p>{user}</p> */}
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
