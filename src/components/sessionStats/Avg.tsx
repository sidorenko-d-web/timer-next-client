import { Solve } from '@/types/SolveInterface'
import { findAvg, findBestAvg } from '@/hooks/statisticFunctions'
import { convertTime } from '@/hooks/statisticFunctions'
import React, { useEffect, useState } from 'react'
import { Reddit_Mono } from 'next/font/google'

const reddit_Mono = Reddit_Mono({
    weight: '500',
    subsets: ['latin'],
})

export const Avg = ({ solves, type }: { solves: Solve[], type: number }) => {

    const [avg, setAvg] = useState<string>('0.000')
    const [bestAvg, setBestAvg] = useState<string>('0.000')

    useEffect(() => {
        const avg = findAvg(solves, type)
        if (avg == Infinity) setAvg("DNF") 
        else setAvg(convertTime(new Date(avg)))

        const bestavg = findBestAvg(solves, type)
        if (bestavg == Infinity) setAvg("DNF") 
        else setBestAvg(convertTime(new Date(bestavg)))

    }, [solves])

    return (
        <li className="flex justify-between border-b pb-2">
            <h3 className="w-1/3">Avg of {type}</h3>
            <button className={reddit_Mono.className}>{avg}</button>
            <button className={`${reddit_Mono.className} text-best-time-color`}>{bestAvg}</button>
        </li>
    )
}
