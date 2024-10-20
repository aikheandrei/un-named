"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    Link: "/",
    Text: "root",
  },
  {
    Link: "/drizzle",
    Text: "drizzle",
  },
  {
    Link: "/route",
    Text: "route",
  },
];

export const HeaderLinks = () => {
  const isNotRoot = usePathname() !== "/";

  return (
    <>
      {isNotRoot && (
        <div className="absolute left-[50%] top-5 z-[1] flex max-w-fit -translate-x-[50%] gap-2 whitespace-nowrap font-geistmono text-sm">
          {Links.map((links, i) => {
            return (
              <Link href={links.Link} key={i}>
                {links.Text}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
