"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { RatingForm } from "../router/rating-form";
import { Button, buttonVariants } from "../ui/button";
import Backdrop from "../router/ui/backdrop";

import { RouteLinks } from "./utils/route-links";

export const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [modal, toggleModal] = useState(false);

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
          <Button
            onClick={() => toggleModal(!modal)}
            className="w-24"
            variant={"outline"}
          >
            Rate!
          </Button>
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

      {modal && (
        <Backdrop onClick={() => toggleModal(!modal)}>
          <RatingForm toggleModal={() => toggleModal(!modal)} />
        </Backdrop>
      )}
    </header>
  );
};
