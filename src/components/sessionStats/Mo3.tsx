'use client'
import { Solve } from '@/types/SolveInterface';
import { convertTime } from '@/hooks/statisticFunctions';
import React, { useEffect, useState } from 'react'
import { Reddit_Mono } from 'next/font/google'

const reddit_Mono = Reddit_Mono({
    weight: '500',
    subsets: ['latin'],
})

export const Mo3 = ({ solves }: { solves: Solve[] }) => {

    const [bestMo3, setBestMo3] = useState<string>('0.000');
    const [currMo3, setCurrMo3] = useState<string>('0.000');

    const findMo3 = (solves: Solve[]) => {
        if (solves.length >= 3) {
            let bestMo3: number = Infinity

            for (let j = 0; j < solves.length - 2; j++) {
                let time: number = 0

                for (let i = 0; i < 3; i++) {
                    const dateTime = new Date(solves[j + i].time)

                    switch (solves[j + i].penalty) {
                        case 'DNF':
                            time += Infinity
                            break;
                        case '+2':
                            time += dateTime.getTime() + 2000
                            break;
                        default:
                            time += dateTime.getTime()
                            break;
                    }
                }
                if (time / 3 < bestMo3) {
                    bestMo3 = time / 3
                }

                if (j == 0) {
                    if(time === Infinity){
                        setCurrMo3('DNF')
                    }else{
                        setCurrMo3(convertTime(new Date(time / 3))) //setting middle of 3 last solves in array
                    }
                }

            }
            if(bestMo3 === Infinity){
                setBestMo3('DNF')
            }else{
                setBestMo3(convertTime(new Date(bestMo3)))
            }
        }else{
            setBestMo3('0.000')
            setCurrMo3('0.000')
        }
    }

    useEffect(() => {
        findMo3(solves)
    }, [solves])

    return (
        <li className="flex justify-between border-b pb-2">
            <h3 className="w-1/3">Middle of 3</h3>
            <button className={reddit_Mono.className}>{currMo3}</button>
            <button className={`${reddit_Mono.className} text-best-time-color`}>{bestMo3}</button>
        </li>
    )
}