import React from "react";
import { Solve } from "@/classes/Solve";
import { SolveItem } from "./SolveItem";

export const SolvesList = () => {
  return (
    <div className="overflow-hidden w-1/6 px-4">
      <h3 className="mb-2 mr-4 text-xl">Сборки</h3>
      <ul className="overflow-scroll h-full  flex flex-col pr-6 "></ul>
    </div>
  );
};
