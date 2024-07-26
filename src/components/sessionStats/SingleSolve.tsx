"use client";
import { Solve } from "@/classes/Solve";
import React, { useEffect, useState } from "react";
import { Reddit_Mono } from "next/font/google";

const reddit_Mono = Reddit_Mono({
  weight: "500",
  subsets: ["latin"],
});

export const SingleSolve = () => {
  return (
    <li className="flex justify-between border-b pb-2">
      <h3 className="w-1/3">Единичная</h3>
      <button className={reddit_Mono.className}></button>
      <button
        className={`${reddit_Mono.className} text-best-time-color`}
      ></button>
    </li>
  );
};
