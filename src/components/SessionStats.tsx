"use client";
import { Solve } from "@/classes/Solve";
import { SingleSolve } from "./sessionStats/SingleSolve";
import { Mo3 } from "./sessionStats/Mo3";
import { Avg } from "./sessionStats/Avg";

export const SessionStats = () => {
  return (
    <div className="flex flex-col gap-2 w-4/12">
      <h3 className="text-xl">
        Всего сборок: <span className="font-bold"></span>
      </h3>
      <ul className="flex flex-col justify-between h-full">
        <SingleSolve />
        <Mo3 />
        <Avg />
        <Avg />
        <Avg />
        <Avg />
      </ul>
    </div>
  );
};
