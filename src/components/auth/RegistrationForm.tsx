'use client'
import type { Dispatch,  SetStateAction } from 'react'

export const RegistrationForm = ({setIsRegistered}: {setIsRegistered: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <form className="bg-gray-bg flex z-40 flex-col p-8 w-3/12 rounded-3xl" >
            <h1 className=" text-4xl text-center font-semibold mb-6">Register</h1>
            <label className=" text-xl mb-2 ml-1" htmlFor="nick">Nickname</label>
            <input className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" type="text" id="nick"/>
            <label className=" text-xl mb-2 ml-1" htmlFor="email">Email</label>
            <input className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" type="text" id="email"  />
            <label className=" text-xl mb-2 ml-1" htmlFor="pass">Password</label>
            <input className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" type="pass" id='pass'  />
            <label className=" text-xl mb-2 ml-1" htmlFor="pass">Repeat password</label>
            <input className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" type="pass" id='pass'   />
            <button className=" bg-best-time-color rounded-full py-2">Register</button>
            <button onClick={() => setIsRegistered(true)} type="button"  className=" underline text-sm text-trueGray-400 mt-4">Already have an account? Click here</button>
        </form>
    )
}

