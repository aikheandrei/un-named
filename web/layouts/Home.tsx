import WithNavBar from "@/components/withNavBar";
import WithFooter from "@/components/withFooter";
import type { FC, PropsWithChildren } from "react";
import HomePage from "@/_pages/home";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <WithNavBar />

      <main>
        <HomePage />
        {children}
      </main>

      <WithFooter />
    </>
  );
};

export default HomeLayout;
