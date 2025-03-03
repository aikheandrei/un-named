import WithNavBar from "@/components/withNavBar";
import WithFooter from "@/components/withFooter";
import type { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <WithNavBar />

      <main>{children}</main>

      <WithFooter />
    </>
  );
};

export default HomeLayout;
