import { Outlet } from "react-router-dom";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex flex-col max-w-[2300px] mx-auto">
      <Topbar />
      {/* <LeftSidebar /> */}

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
