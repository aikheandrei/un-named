"use client";

import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export const LandingPages = [
  {
    Id: "#hero",
    Text: "Home",
  },
  {
    Id: "#About",
    Text: "About",
  },
  {
    Id: "#asset-gallery",
    Text: "Asset Gallery",
  },
  {
    Id: "#story",
    Text: "Story",
  },
  {
    Id: "#testimonial",
    Text: "Testimonials",
  },
  {
    Id: "/route",
    Text: "Reviews",
  },
];

const dmSans = DM_Sans({ subsets: ["latin"] });

export const Footer = () => {
  const pathName = usePathname();
  const isRoot = pathName === "/";

  return (
    <section
      id="footer"
      className={`${dmSans.className} flex w-full items-center justify-center bg-[#101013] px-8 py-8 text-white/80`}
    >
      <div className="flex w-full flex-col items-center gap-10 md:w-[50%] md:gap-8">
        <div className="z-50 flex w-full items-center justify-between">
          <div />
          <Link
            href="#home"
            className="flex size-10 items-center justify-center rounded-md border-2 border-white/50 text-white/50 hover:border-white hover:text-white"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
        <Link
          href="/"
          className="font-valorant mt-4 text-2xl text-white/60 md:mt-0"
        >
          JUNGLE JUMPER EXTREME
        </Link>
        <div
          className={`grid flex-col place-items-center gap-2 leading-none md:grid-cols-2 md:gap-x-20`}
        >
          {LandingPages.map((page, index) => {
            return (
              <Link href={isRoot ? page.Id : "/"} key={index}>
                {page.Text}
              </Link>
            );
          })}
        </div>
        <div className="h-[2px] w-full rounded-full bg-white/10"></div>
        <p className="max-w-[35ch] text-center text-sm text-white/70 md:max-w-[60ch]">
          &copy; 2024 JJX Limited. All rights reserved. The JJX logo, bean logo
          and characters are trademarks of JJX Limited
        </p>
      </div>
    </section>
  );
};
