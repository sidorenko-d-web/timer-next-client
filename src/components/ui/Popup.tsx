import React, { useState } from "react";

export default function Popup({
  ButtonItem,
  PopupItem,
}: {
  ButtonItem: React.JSX.Element;
  PopupItem: React.JSX.Element;
}) {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsShowed(true)}
        className="flex items-end text-xl gap-8"
      >
        {ButtonItem}
      </button>

      {isShowed && (
        <div className="fixed top-0 left-0 w-[100svw] h-[100svh] z-20">
          {/* bg */}
          <div
            className=" absolute top-0 left-0 z-[100] bg-black/50  w-[100svw] h-[100svh]"
            onClick={() => setIsShowed(false)}
          ></div>
          {/* settings window */}
          {PopupItem}
        </div>
      )}
    </>
  );
}
