"use client";

import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { RouteLinks } from "./utils/route-links";

export const Header = () => {
  const checkUserSignIn = async () => {
    try {
      const res = await fetch(`/api/auth`);
      return res.ok;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <div className="fixed flex h-14 w-[100%] items-center justify-center gap-2 whitespace-nowrap border-b font-geistmono text-sm backdrop-blur">
      <RouteLinks />
      <Link
        className={`${buttonVariants({ variant: "default" })}`}
        href="/route/overview"
      >
        {checkUserSignIn ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
};
