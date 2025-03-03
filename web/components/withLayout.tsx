import HomeLayout from "@/layouts/Home";
import RandomLayout from "@/layouts/Random";
import { Layouts } from "@/types/layouts";
import type { FC, PropsWithChildren } from "react";

const layouts: Record<Layouts, FC<PropsWithChildren<{}>>> = {
  home: HomeLayout,
  auth: RandomLayout,
};

type WithLayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }>;

const WithLayout: FC<WithLayoutProps<Layouts>> = ({ layout, children }) => {
  const LayoutComponent = layouts[layout] ?? HomeLayout;

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default WithLayout;
