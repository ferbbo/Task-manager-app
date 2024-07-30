"use client";

import { useContext, useMemo } from "react";
import cn from "classnames";

import { CollapseContext } from "@/providers/CollapseProvider";
import TaskColumn from "@/components/TaskColumn";

export default function Page() {
  const [collapse] = useContext(CollapseContext);
  const pageStyle = useMemo(
    () => ({
      width: `calc(100% - ${collapse ? "68px" : "350px"})`,
    }),
    [collapse]
  );
  return (
    <section className={cn("h-screen py-3 pr-3")} style={pageStyle}>
      <div className='rounded-lg bg-purple-light min-w-[930] dark:bg-gray w-full h-full overflow-hidden'>
        <div className=' px-3 pt-4 min-w-[930] w-full flex gap-3'>
          <TaskColumn tasks={[1, 2, 3]} />
          <TaskColumn tasks={[4, 5, 6]} />
          <TaskColumn tasks={[7, 8, 9]} />
          <TaskColumn tasks={[10, 11, 12]} />
        </div>
      </div>
    </section>
  );
}
