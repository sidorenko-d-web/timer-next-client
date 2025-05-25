'use client'
import { useScrambleStorage } from "@/hooks/storages";
import { Reddit_Mono } from "next/font/google";

const reddit_Mono = Reddit_Mono({
  weight: "500",
  subsets: ["latin"],
	display: 'swap'
});

export const ScrambleButton = () => {
  
	const { scramble } = useScrambleStorage()
  return (
    <button >
      <p className={` w-full md:w-[55vw] text-sm md:text-3xl ${reddit_Mono.className}`}>{scramble}</p>
    </button>
  );
};
