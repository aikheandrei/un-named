import WithLayout from "@/components/withLayout";

import { Layouts } from "@/types/layouts";

const Home = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  console.log(slug);

  return <WithLayout layout={slug as Layouts}></WithLayout>;
};

export default Home;
