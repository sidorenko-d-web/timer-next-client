"use client";
import React, { useState } from "react";
import { Solve } from "@/classes/Solve";
import { Reddit_Mono } from "next/font/google";
import { ISolveResponse, TypeSolveRequest } from "@/types/solves.types";

const reddit_Mono = Reddit_Mono({
  weight: "500",
  subsets: ["latin"],
});

export const SolveItem = ({solve, index}: {solve: ISolveResponse, index: number,}) => {
  const [isModalClosed, setIsModalClosed] = useState<boolean>(false);

  const timeToString = (): string =>  {
    if(!solve) return ''

    if (solve.penalty === "dnf") {
        return 'DNF';
    }
    const time = new Date(solve.time)
    
    if(solve.penalty === "plus2"){
      time.setSeconds(time.getSeconds() + 2)
  }

    let string: string
    let ms = time.getMilliseconds().toString();
    if (ms.length == 1) ms = "00" + ms.toString();
    else if (ms.length == 2) ms = "0" + ms.toString();

    if (time.getMinutes()) {
        if (time.getSeconds() < 10) {
            string = `${time.getMinutes()}:0${time.getSeconds()}.${ms}`;
        }
        string = `${time.getMinutes()}:${time.getSeconds()}.${ms}`;
    } else if (time.getSeconds()) {
        string = `${time.getSeconds()}.${ms}`;
    } else {
        string = `0.${ms}`;
    }
    
    if(solve.penalty === "plus2"){
        return `+${string}`
    }
    return string
}

  return (
    <li
      className={`${reddit_Mono.className} flex gap-4 border-b last:border-b-none pb-1 mb-1 hover:bg-trueGray-700 transition-all`}
    >
      #{index}
      <button
        className="w-full"
        onClick={() => setIsModalClosed(true)}
      >{timeToString()}</button>
      {isModalClosed && (
        <div
          onClick={() => setIsModalClosed(false)}
          className=" absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#000000aa] flex justify-center items-center"
        >
          <div className="bg-gray-bg w-6/12 h-2/3">
            <h3></h3>
            <h2></h2>

            <div className="xl:text-xl">
              <button className=" w-24 2xl:w-32 py-3 2xl:py-4 bg-dark-gray-bg rounded-l-full text-center active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all">
                +2
              </button>

              <button className=" py-3 2xl:py-4 bg-dark-gray-bg text-center active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all">
                <span className=" inline-block w-24  2xl:w-32  border-r border-l">
                  DNF
                </span>
              </button>
              <button className="w-24 2xl:py-4 2xl:w-32 py-3 bg-dark-gray-bg rounded-r-full text-center  active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
