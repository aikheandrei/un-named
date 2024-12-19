import Link from "next/link";
import { buttonVariants } from "../ui/button";

const HeaderLinks = [
  {
    Href: "#about",
    Text: "About",
  },
  {
    Href: "#story",
    Text: "Story",
  },
  {
    Href: "/route",
    Text: "Reviews",
  },
  {
    Href: "#testimonial",
    Text: "Testimonial",
  },
  {
    Href: "#asset-gallery",
    Text: "Asset Gallery",
  },
];

export const Header = () => {
  return (
    <header>
      <nav className="font-halimount fixed z-50 flex h-20 w-full items-center justify-between px-10">
        <div className="flex items-center justify-center space-x-6 text-2xl text-white">
          <a className="font-newyear mr-1 text-4xl" href="">
            JJX
          </a>
          {HeaderLinks.map((link, i) => (
            <a className="tracking-wide" key={i} href={link.Href}>
              {link.Text}
            </a>
          ))}
        </div>

        <div className="space-x-4">
          <Link
            className={`${buttonVariants({ variant: "outline" })} font-halimount rounded-md border-[3px] border-white px-6 py-5 text-2xl tracking-wide text-white drop-shadow-[0px_5px_5px_rgba(0,0,0,0.90)]`}
            href="/admin-dashboard"
          >
            <p className="text-2xl">Admin</p>
          </Link>
          <Link
            className={`${buttonVariants({ variant: "outline" })} font-halimount mt-4 rounded-md border-[3px] border-white px-6 py-5 text-2xl tracking-wide text-white drop-shadow-[0px_5px_5px_rgba(0,0,0,0.90)]`}
            href="/overview"
          >
            <p className="text-2xl">Sign in</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};
