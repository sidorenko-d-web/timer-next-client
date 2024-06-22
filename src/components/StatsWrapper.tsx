'use client'
import React, { useEffect, useState } from 'react'
import { SessionStats } from './SessionStats'
import { SolvesList } from './SolvesList'
import { useTimerStorage } from '@/hooks/storages'
import { Solve } from '@/classes/Solve'
import { CurrentSession } from './CurrentSession'


export const StatsWrapper = () => {
    const { currentSolve, setCurrentSolve, resetSolve } = useTimerStorage()

    const [solves, setSolves] = useState<Solve[]>([]);

    useEffect(() => {
        if(!currentSolve || currentSolve.timestamp === 0 ) return
        if (solves.length === 0  && currentSolve.penalty !== 'Delete') {
            setSolves([currentSolve])
        }
        else {            
            if (solves[0] && currentSolve.timestamp === solves[0].timestamp) {
                setSolves(solves.slice(1))
            }
            if (currentSolve.penalty !== "Delete") {
                setSolves(prev => [currentSolve, ...prev])
            } else {
                setCurrentSolve(solves[0])
            }
        }
    }, [currentSolve])

    useEffect(() => {
        console.log(solves)
    }, [solves])


    return (
        <div className="flex w-full h-1/2 pl-20  items-center gap-8">
            <div className=" bg-dark-gray-bg rounded-xl px-6 py-4 flex flex-1 gap-2 w-full 2xl:text-2xl h-full">
                <SessionStats solves={solves} />
                <SolvesList solves={solves} setSolves={setSolves}/>
                <CurrentSession />
            </div>
        </div>
    )
}
