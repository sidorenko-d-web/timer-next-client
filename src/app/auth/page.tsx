export default function pageAuth () {
    return (
        <div className="flex justify-center items-center w-full h-[100svh]">
            <div className=" bg-violet-dec z-10 rounded-full w-40 h-40 absolute top-[100px] left-[400px]"></div>
            <div className=" bg-violet-dec z-10 rounded-[50%] w-56 h-52 absolute bottom-[100px] right-[400px]"></div>
            <div className=" bg-black/30 z-20 absolute top-0 left-0 h-full w-full backdrop-blur-[70px]"></div>
            <form className="bg-gray-bg flex z-40 flex-col p-8 w-3/12 rounded-3xl">
                <h1 className=" text-4xl text-center font-semibold mb-6">Log In</h1>
                <label className=" text-xl mb-2 ml-1" htmlFor="email">Email</label>
                <input className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" type="text" id="email"/>
                <label className=" text-xl mb-2 ml-1" htmlFor="pass">Password</label>
                <input className=" bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none" type="pass" id='pass' />
                <button className=" bg-best-time-color rounded-full py-2">Log In</button>
                <button type="button" className=" underline text-sm text-trueGray-400 mt-4">Havent registered yet? Click here</button>
            </form>

        </div>
    )
}
 