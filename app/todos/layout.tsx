import React, { ReactNode, Suspense } from "react";
import TodoList from "./TodoList";

const LayoutODO = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <div>
        <Suspense>

        {/* @ts-ignore */}
        <TodoList />
        </Suspense>

        <Suspense>

        {/* @ts-ignore */}
        <TodoList />
        </Suspense>
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
};

export default LayoutODO;
