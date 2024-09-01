import React from "react";
import { Airplay, ArrowLeft } from "lucide-react";
import Menu from "../menu/menu";
import { SidebarNav } from "./sidebar.style";

function Sidebar() {
  return (
    <SidebarNav className="basis-72 w-72 h-svh p-6 lg:block bg-custom-blue overflow-x-hidden overflow-y-auto   ">
      <div className="siderbar-inner">
        <div className=" brand-logo fixed top-0  z-50">
          <div className="flex items-center  py-5 bg-custom-blue">
            <span className="bg-blue-800 mr-2  text-white w-8 h-8 rounded-lg flex justify-center items-center">
              <Airplay />
            </span>

            <h1 className="text-3xl text-white font-medium">TailAdmin</h1>
            <span className="text-slate-500 cursor-pointer ml-10">
              <ArrowLeft />
            </span>
          </div>
        </div>

        <Menu />
      </div>
    </SidebarNav>
  );
}

export default Sidebar;
