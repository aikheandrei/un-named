import type { FC } from "react";

import NavBar from "./Containers/NavBar";

const WithNavBar: FC = () => {
  return (
    <header className="h-14 border-dashed border-b-2 border-black/30">
      <NavBar />
    </header>
  );
};

export default WithNavBar;
