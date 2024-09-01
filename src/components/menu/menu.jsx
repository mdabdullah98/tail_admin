import React from "react";
import { DashboardMenu } from "./menu.style";
import {
  LayoutDashboard,
  LayoutList,
  BookCheck,
  Table,
  Layers,
} from "lucide-react";

import Accordian from "../../components/accordian/accordian";

import { dashBoardList, taskArray, forms, pages, table } from "./menu.data.js";

function Menu() {
  return (
    <DashboardMenu className="w-full  mt-5 z-40 ">
      <h6 className="dashboard-heading">menu</h6>

      <Accordian SidebarIcons={LayoutDashboard} dataArray={dashBoardList}>
        dashboard
      </Accordian>
      <Accordian SidebarIcons={LayoutList} dataArray={taskArray}>
        Task
      </Accordian>
      <Accordian SidebarIcons={BookCheck} dataArray={forms}>
        Forms
      </Accordian>
      <Accordian SidebarIcons={Table} dataArray={table}>
        Tables
      </Accordian>
      <Accordian SidebarIcons={Layers} dataArray={pages}>
        Pages
      </Accordian>
    </DashboardMenu>
  );
}

export default Menu;
