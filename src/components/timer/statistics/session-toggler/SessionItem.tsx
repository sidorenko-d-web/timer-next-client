import React from "react";

export const SessionItem = ({sessionName, sessionType, setIsShowed}: {sessionName: string, sessionType: string, setIsShowed: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <li onClick={() => setIsShowed(false)} className="text-center text-xl bg-dark-gray-bg rounded-2xl py-3 px-4 aspect-square h-fit cursor-pointer">
      <div className=" w-[72px] h-[72px] bg-gray-400 mb-2 mx-auto"></div>
      <span>{sessionName}</span>
    </li>
  );
};
