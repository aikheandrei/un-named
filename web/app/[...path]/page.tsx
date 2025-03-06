import { notFound, redirect } from "next/navigation";
import WithLayout from "@/components/withLayout";

import { Layouts } from "@/types/layouts";

const validLayouts: Layouts[] = ["home", "auth"];

const Home = async ({ params }: { params: Promise<{ path: string }> }) => {
  const { path } = await params;

  console.log(path);

  if (!validLayouts.includes(path[0] as Layouts)) {
    console.log(path);
    return notFound();
  }

  if (path.length > 1) {
    return notFound();
  }

  return <WithLayout layout={path[0] as Layouts}></WithLayout>;
};

export default Home;
