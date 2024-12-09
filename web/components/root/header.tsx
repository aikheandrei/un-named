"use client";

import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { RouteLinks } from "./utils/route-links";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Backdrop from "../router/ui/backdrop";
import { RatingForm } from "../router/rating-form";
import { Star } from "lucide-react";

export const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isRating, setIsRating] = useState(false);

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
  });

  const inSignInPage = usePathname() === "/router/overview";

  return (
    <header>
      <nav className="fixed left-[50%] h-14 w-[40rem] -translate-x-1/2 gap-2 whitespace-nowrap border border-t-0 font-geistsans text-sm backdrop-blur">
        <div className="absolute right-[100%] space-y-2 pr-8 pt-4">
          <h1 className="text-2xl font-bold leading-6">jje</h1>
          <div className="flex gap-[.1rem]">
            {Array.from({ length: 5 }, (_, i) => (
              <Star className="size-[1.125rem]" />
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
            <Button
              onClick={() => setIsRating(!isRating)}
              className="w-24"
              variant={"outline"}
            >
              Rate!
            </Button>
          </div>
        </div>

        <div className="absolute flex h-full w-full items-center justify-center gap-2">
          <RouteLinks />
        </div>
      </nav>

      {isRating && (
        <Backdrop onClick={() => setIsRating(!isRating)}>
          <RatingForm />
        </Backdrop>
      )}
    </header>
  );
};
