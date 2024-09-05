"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { RatingModal } from "./rating-modal";
import { buttonVariants } from "../ui/button";
import { RouteLinks } from "./utils/route-links";
import { Rating } from "../ui/rating";

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
  });

  return (
    <header>
      <nav className="fixed left-[50%] h-14 w-[40rem] -translate-x-1/2 gap-2 whitespace-nowrap border border-t-0 font-geistsans backdrop-blur-md">
        <div className="absolute right-[100%] flex flex-col items-center justify-center gap-2 pr-8 pt-4">
          <Link
            className={`${buttonVariants({ variant: "default" })} w-24`}
            href={"/router/overview"}
          >
            {isSignedIn ? "Account" : "Sign in"}
          </Link>
          <RatingModal>Rate!</RatingModal>
          <Link
            className={`${buttonVariants({ variant: "outline" })} w-24`}
            href={"/router/admin-dashboard"}
          >
            Admin
          </Link>
          <Rating />
        </div>

        <div className="absolute flex h-full w-full items-center justify-center gap-2 text-sm">
          <RouteLinks />
        </div>
      </nav>

      {/* Root modal portal from '<RatingModal />' */}
      <div id="rating-modal"></div>
    </header>
  );
};
