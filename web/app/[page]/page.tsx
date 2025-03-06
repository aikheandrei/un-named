import WithLayout from "@/components/withLayout";

import { Layouts } from "@/types/layouts";

const Home = async ({ params }: { params: Promise<{ page: string }> }) => {
  const { page } = await params;

  console.log(page);

  return <WithLayout layout={page as Layouts}></WithLayout>;
};

export default Home;
