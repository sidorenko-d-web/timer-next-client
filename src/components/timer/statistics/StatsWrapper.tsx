"use client";
import React, { useEffect, useState } from "react";
import { SessionStats } from "./SessionStats";
import { SolvesList } from "./SolvesList";
import { Solve } from "@/classes/Solve";
import { SessionButton } from "./SessionButton";
import Popup from "@/components/ui/Popup";
import { SessionPopup } from "./session-toggler/SessionPopup";

export const StatsWrapper = () => {
  return (
    <div className="flex w-full h-1/2 pl-20  items-center gap-8">
      <div className=" bg-dark-gray-bg rounded-2xl px-6 py-4 flex flex-1 gap-2 w-full 2xl:text-2xl h-5/6 mt-auto relative">
        <SessionStats />
        <SolvesList />
        <Popup
          ButtonItem={"3x3"}
          PopupItem={SessionPopup}
          buttonStyle="bg-gray-bg px-8 py-2 text-3xl font-medium rounded-lg text-center absolute right-6  top-4"
        />
      </div>
    </div>
  );
};
