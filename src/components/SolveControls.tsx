import { useTimerStorage } from '@/hooks/storages'
import React, { useState } from 'react'

export const SolveControls = () => {
    const { setCurrentSolve, currentSolve } = useTimerStorage()

    const changePenalty = (penalty: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.currentTarget.blur()
        if(!currentSolve || currentSolve.timestamp === 0) return
        setCurrentSolve(currentSolve.setPenalty(penalty))
    }

    return (
        <div className='xl:text-xl'>
            <button
                onClick={(e) => changePenalty('+2', e)} className=" w-24 2xl:w-32 py-3 2xl:py-4 bg-dark-gray-bg rounded-l-full text-center active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all"
            >+2</button>

            <button
                onClick= {(e) => changePenalty('DNF', e)} className=" py-3 2xl:py-4 bg-dark-gray-bg text-center active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all"
            ><span className=" inline-block w-24  2xl:w-32  border-r border-l">DNF</span></button>
            <button
                onClick={(e) => changePenalty('Delete', e)} className="w-24 2xl:py-4 2xl:w-32 py-3 bg-dark-gray-bg rounded-r-full text-center  active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all">Delete</button>
        </div>
    )
}
