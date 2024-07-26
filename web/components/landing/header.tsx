import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { auth } from "@/app/api/auth/auth";

const HeaderLinks = [
  {
    Href: "#about",
    Text: "About",
  },
  {
    Href: "#game-mechanics",
    Text: "Game Mechanics",
  },
  {
    Href: "#asset-gallery",
    Text: "Asset Gallery",
  },
  {
    Href: "/route",
    Text: "Reviews",
  },
  {
    Href: "#story",
    Text: "Story",
  },
  {
    Href: "#testimonial",
    Text: "Testimonial",
  },
];

type CustomUser = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean | null;
  image: string;
  admin: boolean;
};

export const Header = async () => {
  const session = await auth();

  const users = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/users`,
  ).then((res) => res.json());

  return (
    <header>
      <nav className="fixed z-50 flex h-14 w-full items-center justify-between px-6 font-halimount">
        <div className="flex items-center justify-center space-x-6 text-white">
          <a className="mr-1 font-newyear text-4xl" href="">
            JJX
          </a>
          {HeaderLinks.map((link, i) => (
            <a
              className="text-[1.34rem] tracking-wide"
              key={i}
              href={link.Href}
            >
              {link.Text}
            </a>
          ))}
        </div>

        <div className="space-x-2">
          {session?.user?.admin && (
            <Link
              className={`${buttonVariants({ variant: "outline" })} rounded-md border-[3px] border-white px-4 py-5 font-halimount text-xl tracking-wide text-white drop-shadow-[0px_5px_5px_rgba(0,0,0,0.90)]`}
              href="/admin-dashboard"
            >
              <p className="text-2xl">Admin</p>
            </Link>
          )}
          <Link
            className={`${buttonVariants({ variant: "outline" })} mt-4 rounded-md border-[3px] border-white px-4 py-5 font-halimount text-2xl tracking-wide text-white drop-shadow-[0px_5px_5px_rgba(0,0,0,0.90)]`}
            href="/overview"
          >
            {session ? (
              <p className="text-xl">Account</p>
            ) : (
              <p className="text-xl">Sign in</p>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};
