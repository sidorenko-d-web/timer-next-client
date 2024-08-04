'use client'
import { Reddit_Mono } from "next/font/google";
import { ISolveResponse } from "@/types/solves.types";
import { useAvg } from "./hooks/useAvg";

const reddit_Mono = Reddit_Mono({
  weight: "500",
  subsets: ["latin"],
  
	display: 'swap'
});

export const Avg = ({ solves, type }: { solves: ISolveResponse[], type: number }) => {

  const {avg, bestAvg} = useAvg(solves, type)

  return (
    <li className="flex justify-between border-b pb-2">
      <h3 className="w-1/3">Avg of {type}</h3>
      <button className={reddit_Mono.className}>{avg}</button>
      <button className={`${reddit_Mono.className} text-best-time-color`}>
        {bestAvg}
      </button>
    </li>
  );
};
