"use client";

import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { RouteLinks } from "./utils/route-links";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const checkUserSignIn = async () => {
    const session = await fetch(`/api/auth`).then((res) => res.json());
    if (session) {
      setIsSignedIn(true);
      console.log(isSignedIn);
    } else {
      setIsSignedIn(false);
      console.log(isSignedIn);
    }
  };

  useEffect(() => {
    checkUserSignIn();
  }, []);

  const inSignInPage = usePathname() === "/route/overview";

  return (
    <div className="fixed left-[50%] flex h-14 w-[40rem] -translate-x-1/2 items-center justify-center gap-2 whitespace-nowrap border border-t-0 font-geistmono text-sm backdrop-blur">
      <RouteLinks />
      {!inSignInPage && (
        <Link
          className={`${buttonVariants({ variant: "default" })} w-22 absolute right-4 font-geistsans`}
          href={"/router/overview"}
        >
          {isSignedIn ? "Sign out" : "Sign in"}
        </Link>
      )}
    </div>
  );
};
