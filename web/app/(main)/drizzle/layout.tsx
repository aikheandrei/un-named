import Link from "next/link";

const Links = [
  {
    Link: "/",
    Text: "root",
  },
  {
    Link: "/route-link",
    Text: "route-link",
  },
];

export default function DrizzleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="absolute left-[50%] top-5 z-[1] flex max-w-fit -translate-x-[50%] gap-2 whitespace-nowrap font-geistmono text-sm">
        {Links.map((links, i) => {
          return (
            <Link href={links.Link} key={i}>
              {links.Text}
            </Link>
          );
        })}
      </div>
      {children}
    </main>
  );
}
