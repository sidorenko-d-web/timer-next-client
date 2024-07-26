"use client";
import { Reddit_Mono } from "next/font/google";

const reddit_Mono = Reddit_Mono({
  weight: "500",
  subsets: ["latin"],
});

export const ScrambleButton = () => {
  return (
    <button>
      <p className={`whitespace-pre-line text-2xl${reddit_Mono.className}`}></p>
    </button>
  );
};
