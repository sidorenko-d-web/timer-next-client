import React, { useState } from "react";
import { Settings } from "./Settings";

export function SettingsPopUp({}: {}) {
  const [windowSettings, setWindowSettings] = useState<string>("Account");
  return (
    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-gray-bg w-9/12 h-5/6 z-[200] rounded-3xl flex flex-col">
      <nav className="">
        <ul className="flex px-12">
          <li
            className={`px-10 py-2 text-2xl ${
              windowSettings == "Account" && "bg-gray-bg rounded-t-xl"
            }`}
          >
            <button onClick={() => setWindowSettings("Account")}>
              Account
            </button>
          </li>
          <li
            className={`px-10 py-2 text-2xl ${
              windowSettings == "Timer" && "bg-gray-bg rounded-t-xl"
            }`}
          >
            <button onClick={() => setWindowSettings("Timer")}>Timer</button>
          </li>
          <li
            className={`px-10 py-2 text-2xl ${
              windowSettings == "Sessions" && "bg-gray-bg rounded-t-xl"
            }`}
          >
            <button onClick={() => setWindowSettings("Sessions")}>
              Sessions
            </button>
          </li>
        </ul>
      </nav>
      <Settings windowSettings={windowSettings} />
    </div>
  );
}
