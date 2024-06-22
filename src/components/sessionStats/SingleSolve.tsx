'use client'
import { Solve } from '@/classes/Solve'
import React, { useEffect, useState } from 'react'
import { Reddit_Mono } from 'next/font/google'

const reddit_Mono = Reddit_Mono({
    weight: '500',
    subsets: ['latin'],
})

export const SingleSolve = ({ solves }: { solves: Solve[] }) => {
    const [bestSingle, setBestSingle] = useState<Solve>(new Solve(new Date('000000'), 0, '', ''));

    const [currentSingle, setCurrentSingle] = useState<Solve>(new Solve(new Date('000000'), 0, '', ''))
    
    useEffect(() => {
        if(solves.length == 0) {
            setBestSingle(new Solve(new Date('000000'), 0, '', ''))
            setCurrentSingle(new Solve(new Date('000000'), 0, '', ''))
            return
        }

        setCurrentSingle(solves[0])

        let bestSolve: Solve | undefined

        for(let i = 0; i < solves.length; i++){
            if((!bestSolve || solves[i].time < bestSolve.time) && solves[i].penalty !== 'DNF'){
                bestSolve = solves[i]
            }
        }

        if(!bestSolve) return
        setBestSingle(bestSolve)
    }, [solves])

    return (
        <li className="flex justify-between border-b pb-2">
            <h3 className="w-1/3">Единичная</h3>
            <button className={reddit_Mono.className}>{currentSingle.timeToString()}</button>
            <button className={`${reddit_Mono.className} text-best-time-color`}>{bestSingle.timeToString()}</button>
        </li>
    )
}
