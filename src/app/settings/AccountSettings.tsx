import React, { useState } from "react";
import { useLogout } from "../../hooks/useLogout";

export const AccountSettings = () => {
  const { logout } = useLogout()
  return (
    <>
      <div className=" bg-gray-bg h-full rounded-b-3xl flex pt-6 px-8 gap-12">
        <div className="flex flex-col w-1/2 gap-6">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <h3 className="text-2xl font-medium ml-2">Avatar</h3>
              <input type="file" id="selectedFile" className=" hidden" />
              <input
                className=" py-2 text-2xl px-12 bg-dark-gray-bg rounded-xl"
                type="button"
                value="Browse..."
                onClick={() => document.getElementById("selectedFile")?.click()}
              />
            </div>
            <div className=" bg-trueGray-400 w-28 h-28 rounded-xl"></div>
          </div>
          <div className="flex flex-col gap-6 justify-between">
            <h3 className="text-2xl font-medium ml-2">Change nickname</h3>
            <input
              type="text"
              className=" px-6 py-3 text-2xl bg-dark-gray-bg rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl w-7/12">Show others my nickname</h3>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between items-start">
            <h3 className="text-2xl w-7/12">Decline all friend requests</h3>
            <input type="checkbox" />
          </div>
        </div>
      </div>
      <button onClick={() => logout()} className="absolute bottom-8 left-8 bg-violet-dec px-10 py-3 text-xl rounded-xl">
        Logout
      </button>
      <button className="absolute bottom-8 right-8 bg-best-time-color px-10 py-3 text-xl rounded-xl">
        Save settings
      </button>
    </>
  );
};
