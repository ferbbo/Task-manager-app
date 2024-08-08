"use client";

import { useContext, useMemo } from "react";
import cn from "classnames";

import { useCollapse } from "@/providers/CollapseProvider";

export default function ClientWrapper({ children }) {
  const { collapse } = useCollapse();
  const pageStyle = useMemo(
    () => ({
      width: `calc(100% - ${collapse ? "68px" : "350px"})`,
    }),
    [collapse]
  );
  return (
    <section className={cn("h-screen py-3 pr-3")} style={pageStyle}>
      <div className='rounded-lg bg-purple-light min-w-[930] dark:bg-gray w-full h-full overflow-hidden'>
        <div className='px-3 pt-4 min-w-[930] w-full flex gap-3'>
          {children}
        </div>
      </div>
    </section>
  );
}
