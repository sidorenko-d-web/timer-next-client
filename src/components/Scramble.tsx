"use client";
import React, { useEffect, useState, useRef } from "react";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";
import { ScrambleButton } from "./ScrambleButton";
import { generateScramble } from "react-rubiks-cube-utils";

export const Scramble = () => {
  return (
    <div className="flex gap-2 items-start pl-16 pr-8 w-full">
      <ScrambleButton />
      {/* prev scramble 
            <PrevButton handleFunction={prevScrambleHandle} disabled={scramble == prevScramble.current}/>
            
            <NextButton handleFunction={nextScrambleHandle} />*/}
    </div>
  );
};
