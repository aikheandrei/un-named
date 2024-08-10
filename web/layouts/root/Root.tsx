"use client";

import Link from "next/link";
import Image from "next/image";
import Lenis from "lenis";
import { buttonVariants } from "@/components/ui/button";
import { useEffect } from "react";
import { RootHeader } from "@/components/landing/header";

export default function Root() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <RootHeader />
      <section className="flex h-[200svh] items-center justify-center">
        <div className="font-geistsans">
          <h1 className="mb-2 flex gap-2 font-geistmono text-[1.4rem] font-bold">
            Drizzling
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={20}
              height={20}
            />
          </h1>

          <ol className="mb-4 list-inside list-decimal">
            <li className="font-geistmono text-sm">
              back-end purposes{" "}
              <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
                routers.ts
              </code>
              .
            </li>
          </ol>

          <Link
            href="/route"
            // className="flex h-12 max-w-fit items-center justify-center rounded-full bg-foreground px-[1.5rem] text-base text-background transition-colors hover:bg-[#ccc]"
            className={buttonVariants({ variant: "default" })}
          >
            Checkout route →
          </Link>
        </div>
      </section>
    </>
  );
}
