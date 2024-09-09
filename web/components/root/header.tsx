"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Button, buttonVariants } from "../ui/button";

import { RouteLinks } from "./utils/route-links";

import { RatingModal } from "./rating-modal";

export const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [modal, toggleModal] = useState(false);
  let ratings = [];

  const fetchReviews = async () => {
    // const reviewsData: reviewProps[] = await fetch(
    //   `${process.env.WEBSITE_URL}/api/reviews`,
    // ).then((res) => res.json());
    const session = await fetch(`/api/reviews`).then((res) => res.json());

    if (session) {
      // ratings = reviewsData;
      console.log(session);
    }
  };

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
    fetchReviews();
  });

  const inSignInPage = usePathname() === "/router/overview";

  return (
    <header>
      <nav className="fixed left-[50%] h-14 w-[40rem] -translate-x-1/2 gap-2 whitespace-nowrap border border-t-0 font-geistsans backdrop-blur-md">
        <div className="absolute right-[100%] flex flex-col gap-2 pr-8 pt-4">
          {!inSignInPage && (
            <Link
              className={`${buttonVariants({ variant: "default" })} w-24`}
              href={"/router/overview"}
            >
              {isSignedIn ? "Account" : "Sign in"}
            </Link>
          )}
          <RatingModal>Rate!</RatingModal>
          <Link
            className={`${buttonVariants({ variant: "outline" })} w-24`}
            href={"/router/admin-dashboard"}
          >
            Admin
          </Link>
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
