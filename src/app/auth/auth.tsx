"use client";
import { LoginFrom } from "@/components/auth/LoginFrom";
import { RegistrationForm } from "@/components/auth/RegistrationForm";
import { useState } from "react";

export function Auth() {
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <div className="flex justify-center items-center w-full h-[100svh] overflow-hidden">
      <div className=" bg-violet-dec z-10 rounded-full w-[30vw] aspect-square absolute top-0 left-[200px]"></div>
      <div className=" bg-violet-dec z-10 rounded-[50%] w-[35vw] aspect-square absolute bottom-0 right-[100px]"></div>
      <div className=" z-20 absolute left-0 bottom-[-1px]  h-full w-full backdrop-blur-[300px]" style={{backdropFilter: 'blur(300)'}}></div>
      {isRegistered ? (
        <LoginFrom setIsRegistered={setIsRegistered} />
      ) : (
        <RegistrationForm setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
}