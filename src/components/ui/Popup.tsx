import React, { useState } from "react";

export default function Popup({
  ButtonItem,
  PopupItem,
  buttonStyle,
}: {
  ButtonItem: React.JSX.Element | string;
  PopupItem: React.ElementType<{setIsShowed?: React.Dispatch<React.SetStateAction<boolean>>}>;
  buttonStyle?: string;
}) {
  const [isShowed, setIsShowed] = useState(false);
  return (
    <div>
      <button onClick={() => setIsShowed(true)} className={buttonStyle}>
        {ButtonItem}
      </button>

      {isShowed && (
        <div className={`fixed top-0 left-0 w-[100svw] h-[100svh] z-20 `}>
          {/* bg */}
          <button
            className=" absolute top-0 left-0 z-[60] bg-black/50  w-[100svw] h-[100svh]"
            onClick={() => setIsShowed(false)}
          ></button>
          {/* settings window */}
          {<PopupItem setIsShowed={setIsShowed}/>}
        </div>
      )}
    </div>
  );
}
