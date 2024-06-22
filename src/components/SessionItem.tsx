import { useCurrentSession, useTimerStorage } from '@/hooks/storages'
import React from 'react'

type SessionItemProps = {
    propsType: string,
    propsName: string,
    closePopup: React.Dispatch<React.SetStateAction<boolean>>
}

export const SessionItem = ({ propsType, propsName, closePopup }: SessionItemProps) => {
    const {setType, setName} = useCurrentSession()

    const changeSession = () => {
        setType(propsType)
        setName(propsName)
        closePopup(false)
    }

    return (
        <li onClick={changeSession}  className='text-center bg-dark-gray-bg rounded-2xl py-3 px-8 aspect-square h-fit cursor-pointer'>
            <div className=" w-[72px] h-[72px] bg-gray-400 mb-2 mx-auto"></div>
            <span>{propsName}</span>
        </li>
    )
}
