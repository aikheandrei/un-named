"use client";

import { Button, buttonVariants } from "../ui/button";
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
    } else {
      setIsSignedIn(false);
    }
  };

  useEffect(() => {
    checkUserSignIn();
  }, []);

  const inSignInPage = usePathname() === "/router/overview";

  return (
    <header>
      <nav className="fixed left-[50%] h-14 w-[40rem] -translate-x-1/2 gap-2 whitespace-nowrap border border-t-0 font-geistsans text-sm backdrop-blur">
        <div className="absolute right-[100%] space-y-2 pr-8 pt-4">
          <h1 className="text-2xl font-bold leading-6">jje</h1>
          <div className="flex gap-[.1rem]">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-[1.125rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {!inSignInPage && (
              <Link
                className={`${buttonVariants({ variant: "default" })} w-24`}
                href={"/router/overview"}
              >
                {isSignedIn ? "Overview" : "Sign in"}
              </Link>
            )}
            <Button className="w-24" variant={"outline"}>
              Rate!
            </Button>
          </div>
        </div>
        <div className="absolute flex h-full w-full items-center justify-center gap-2">
          <RouteLinks />
        </div>
      </nav>
    </header>
  );
};
