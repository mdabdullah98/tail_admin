import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button, buttonVariants } from "../ui/button";

import { NavLink } from "react-router-dom";

function Accordian({ children, SidebarIcons, dataArray = [] }) {
  console.log(dataArray);

  return (
    <Accordion type="single" collapsible className="w-full text-slate-300 ">
      <AccordionItem value="item-1" className="border-none">
        <div className="flex items-center justify-between p-2 accrodian-dashboard-button">
          <div className="flex">
            <span className="mr-2">
              <SidebarIcons className="size-5" />
            </span>

            <p className="capitalize">{children}</p>
          </div>
          {dataArray?.length && (
            <AccordionTrigger className=" flex justify-end h-full w-12"></AccordionTrigger>
          )}
        </div>

        <div className="my-4 pl-7 ">
          {dataArray?.length && (
            <AccordionContent>
              {dataArray.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="flex justify-between items-center my-2">
                      <p className=" text-slate-400 transition hover:text-slate-100 ">
                        <NavLink to={item?.route} className="">
                          {item?.listName}
                        </NavLink>
                      </p>
                      {item?.pro && (
                        <Button className="bg-button-bg h-6 px-4 py-1 rounded-lg hover:bg-blue-500">
                          Pro
                        </Button>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </AccordionContent>
          )}
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordian;
