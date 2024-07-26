"use client";
import React, { useEffect, useState } from "react";
import { SessionStats } from "./SessionStats";
import { SolvesList } from "./SolvesList";
import { Solve } from "@/classes/Solve";
import { CurrentSession } from "./CurrentSession";

export const StatsWrapper = () => {
  return (
    <div className="flex w-full h-1/2 pl-20  items-center gap-8">
      <div className=" bg-dark-gray-bg rounded-xl px-6 py-4 flex flex-1 gap-2 w-full 2xl:text-2xl h-5/6 mt-auto">
        <SessionStats />
        <SolvesList />
        <CurrentSession />
      </div>
    </div>
  );
};
