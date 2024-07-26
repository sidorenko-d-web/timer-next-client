"use client";
import {
  faGear,
  faHandFist,
  faHome,
  faTrophy,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { NavigateItem } from "./NavigateItem";
import { useState } from "react";
import { Settings } from "./Settings";

export const Navigate = () => {
  const [settingsState, setSettingsState] = useState<boolean>(false);
  const [windowSettings, setWindowSettings] = useState<string>("Account");

  return (
    <>
      <nav className=" hidden md:block absolute z-50 w-16 py-12 px-4 h-[100svh] bg-dark-gray-bg hover:w-[230px] transition-all overflow-hidden">
        <ul className="flex flex-col justify-between h-full items-start">
          <div className="flex flex-col gap-6 items-start">
            <li className="hover:border-l-8 border-green-600 active:text-green-600  hover:pl-4 transition-all">
              <NavigateItem icon={faHome} value="Home" link="/" />
            </li>
            <li className="hover:border-l-8  mt-12 border-green-600 active:text-green-600  hover:pl-4 transition-all">
              <NavigateItem icon={faTrophy} value="Contest" link="/" />
            </li>
            <li className="hover:border-l-8 border-green-600 active:text-green-600  hover:pl-4 transition-all">
              <NavigateItem icon={faHandFist} value="Battle" link="/" />
            </li>
            <li className="hover:border-l-8 border-green-600 active:text-green-600  hover:pl-4 transition-all">
              <NavigateItem icon={faUserGroup} value="Friends" link="/" />
            </li>
          </div>
          <li className="hover:border-l-8 hover:pl-4 border-green-600 active:text-green-600 transition-all">
            <button
              onClick={() => setSettingsState(true)}
              className="flex items-end text-xl gap-8"
            >
              <NavigateItem icon={faGear} value="Settings" />
            </button>
          </li>
        </ul>
      </nav>
      {settingsState && (
        <div className="absolute top-0 left-0 w-[100svw] h-[100svh]">
          {/* bg */}
          <div
            className=" absolute top-0 left-0 z-[100] bg-black/50  w-[100svw] h-[100svh]"
            onClick={() => setSettingsState(false)}
          ></div>
          {/* settings window */}
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
                  <button onClick={() => setWindowSettings("Timer")}>
                    Timer
                  </button>
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
        </div>
      )}
    </>
  );
};
