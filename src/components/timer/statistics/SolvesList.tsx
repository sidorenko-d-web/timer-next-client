'use client'
import { Solve } from "@/classes/Solve";
import { SolveItem } from "./SolveItem";
import { ISolveResponse, TypeSolveRequest } from "@/types/solves.types";
import { useEffect } from "react";

export const SolvesList = ({solves}: {solves: ISolveResponse[]}) => {
 
  return (
    <div className="overflow-hidden w-1/6 px-4">
      <h3 className="mb-2 mr-4 text-xl">Сборки</h3>
      <ul className="overflow-scroll h-full  flex flex-col pr-6 ">
        {solves.map((solve, index) => <SolveItem key={solve.id} solve={solve} index={solves.length - index} />)}
      </ul>
    </div>
  );
};
  