import Link from "next/link";
import Routes from "@/lib/routes";

export const RouteLinks = () => {
  return (
    <>
      {Routes.map((routes, i) => {
        return (
          <Link className="font-geistmono" href={routes.Link} key={i}>
            {routes.Text}
          </Link>
        );
      })}
    </>
  );
};
