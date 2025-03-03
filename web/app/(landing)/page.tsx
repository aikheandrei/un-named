import WithLayout from "@/components/withLayout";
import HomePage from "@/pages/home";

const Home = () => {
  return (
    <WithLayout layout="home">
      <HomePage />
    </WithLayout>
  );
};

export default Home;
