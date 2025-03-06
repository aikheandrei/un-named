import DefaultLayout from "@/layouts/Default";
import RandomLayout from "@/layouts/Random";
import { Layouts } from "@/types/layouts";
import type { FC, PropsWithChildren } from "react";

const layouts: Record<Layouts, FC<PropsWithChildren<{}>>> = {
  home: DefaultLayout,
  auth: DefaultLayout,
};

type WithLayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }>;

const WithLayout: FC<WithLayoutProps<Layouts>> = ({ layout, children }) => {
  const LayoutComponent = layouts[layout] ?? RandomLayout;

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default WithLayout;
