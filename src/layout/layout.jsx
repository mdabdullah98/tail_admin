import React from "react";
import Sidebar from "@/components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/header";

function Layout() {
  return (
    <div className="flex items-start justify-center">
      <Sidebar />

      {/* header and outlet */}
      <div className="header-and-outlet h-svh overflow-x-hidden overflow-y-auto  flex-1  ">
        <Header />

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
