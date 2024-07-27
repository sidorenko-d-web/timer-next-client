import type { Dispatch, SetStateAction } from "react"


export const LoginFrom = ({setIsRegistered}: {setIsRegistered: Dispatch<SetStateAction<boolean>>}) => {

    return (
        <form className="bg-gray-bg flex z-40 flex-col p-8 w-3/12 rounded-3xl" >
            <h1 className=" text-4xl text-center font-semibold mb-6">Log In</h1>
            <label className=" text-xl mb-2 ml-1" htmlFor="email">Email</label>
            <input className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" type="text" id="email" />
            <label className=" text-xl mb-2 ml-1" htmlFor="pass">Password</label>
            <input className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" type="pass" id='pass' />
            <button className=" bg-best-time-color rounded-full py-2">Log In</button>
            <button onClick={() => setIsRegistered(false)} type="button" className=" underline text-sm text-trueGray-400 mt-4">Havent registered yet? Click here</button>
        </form>
    )
}