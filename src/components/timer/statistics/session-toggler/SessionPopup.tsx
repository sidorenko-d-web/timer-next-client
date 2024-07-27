import React from "react";
import { SessionItem } from "./SessionItem";

const sessions = [
  { name: "2x2", type: "2x2" },
  { name: "3x3", type: "3x3" },
  { name: "3x3 OH", type: "3x3" },
  { name: "3x3 BLD", type: "3x3" },
  { name: "4x4", type: "4x4" },
  { name: "5x5", type: "5x5" },
  { name: "6x6", type: "6x6" },
  { name: "7x7", type: "7x7" },
  { name: "Square-1", type: "square-1" },
  { name: "Megaminx", type: "megaminx" },
  { name: "Pyraminx", type: "pyraminx" },
  { name: "Skewb", type: "skewb" },
  { name: "Clock", type: "clock" },
];

export function SessionPopup({setIsShowed}: {setIsShowed: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <ul className=" absolute z-[110] bg-gray-bg right-0 grid grid-cols-3 gap-4 p-6 h-[100svh] overflow-y-scroll">
      {sessions.map((session) => (
        <SessionItem key={session.name} sessionName={session.name} sessionType={session.type} setIsShowed={setIsShowed}/>
      ))}
    </ul>
  );
}
