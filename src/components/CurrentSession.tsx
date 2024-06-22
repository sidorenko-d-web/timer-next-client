import { useState } from 'react'
import { SessionItem } from './SessionItem'
import { useCurrentSession } from '@/hooks/storages'

const sessions = [
    {name: '2x2', type: '2x2'},
    {name: '3x3', type: '3x3'}, 
    {name: '3x3 OH', type: '3x3'},
    {name: '3x3 BLD', type: '3x3'}, 
    {name: '4x4', type: '4x4'}, 
    {name: '5x5', type: '5x5'}, 
    {name: '6x6', type: '6x6'}, 
    {name: '7x7', type: '7x7'}, 
    {name: 'Square-1', type: 'square-1'}, 
    {name: 'Megaminx', type: 'megaminx'}, 
    {name: 'Pyraminx', type: 'pyraminx'}, 
    {name: 'Skewb', type: 'skewb'}, 
    {name: 'Clock', type: 'clock'}
]

export const CurrentSession = () => {
    const [popup, setPopup] = useState<boolean>(false)

    const {name} = useCurrentSession()

    return (
        <div className='ml-auto'>
            <button
                className=' bg-gray-bg px-8 py-2 text-3xl font-medium rounded-lg text-center'
                onClick={() => setPopup(true)}
            >{name}</button>
            {popup &&
                <div className='z-10 absolute w-[100svw] h-[100svh] top-0 left-0 '>
                        <ul className=' absolute z-40 bg-gray-bg right-0 grid grid-cols-3 gap-4 p-6 max-h-[100svh] overflow-y-scroll'>
                            {
                                sessions.map(session => <SessionItem closePopup={setPopup} propsName={session.name} propsType={session.type}/>)
                            }
                        </ul>
                    <div onClick={() => setPopup(false)} className=" z-10 bg-black opacity-50 w-full h-full absolute top-0 left-0"></div>
                </div>}
        </div>
    )
}
