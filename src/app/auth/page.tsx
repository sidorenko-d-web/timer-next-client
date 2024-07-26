'use client'
import { LoginFrom } from "@/components/auth/LoginFrom"
import { RegistrationForm } from "@/components/auth/RegistrationForm"
import { useState } from "react"

export default function pageAuth () {
    const [isRegistered, setIsRegistered] = useState<boolean>(true)
    return (
        <div className="flex justify-center items-center w-full h-[100svh] overflow-hidden">
            <div className=" bg-violet-dec z-10 rounded-full w-[30vw] aspect-square absolute top-0 left-[200px]"></div>
            <div className=" bg-violet-dec z-10 rounded-[50%] w-[35vw] aspect-square absolute bottom-0 right-[100px]"></div>
            <div className=" z-20 absolute top-0 left-0 h-full w-full backdrop-blur-[300px]"></div>
            {
                isRegistered ? 
                <LoginFrom />:
                <RegistrationForm />
            }

        </div>
    )
}
 