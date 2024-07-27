import React from "react";

export const SessionItem = () => {
  return (
    <li className="text-center bg-dark-gray-bg rounded-2xl py-3 px-8 aspect-square h-fit cursor-pointer">
      <div className=" w-[72px] h-[72px] bg-gray-400 mb-2 mx-auto"></div>
      <span>{}</span>
    </li>
  );
};
