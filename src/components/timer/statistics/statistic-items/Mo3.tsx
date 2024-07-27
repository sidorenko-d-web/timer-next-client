"use client";
import { Solve } from "@/types/SolveInterface";
import { convertTime } from "@/hooks/statisticFunctions";
import React, { useEffect, useState } from "react";
import { Reddit_Mono } from "next/font/google";

const reddit_Mono = Reddit_Mono({
  weight: "500",
  subsets: ["latin"],
});

export const Mo3 = () => {
  return (
    <li className="flex justify-between border-b pb-2">
      <h3 className="w-1/3">Middle of 3</h3>
      <button className={reddit_Mono.className}>{}</button>
      <button className={`${reddit_Mono.className} text-best-time-color`}>
        {}
      </button>
    </li>
  );
};
