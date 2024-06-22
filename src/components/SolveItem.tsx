'use client'
import React, { useState } from 'react'
import { Solve } from '@/classes/Solve'
import { Reddit_Mono } from 'next/font/google'

const reddit_Mono = Reddit_Mono({
    weight: '500',
    subsets: ['latin'],
})

type SolveItemProps = {
    item: Solve,
    number: number,
    setSolves:  React.Dispatch<React.SetStateAction<Solve[]>> 
}

export const SolveItem = ({ item, number, setSolves } : SolveItemProps) => {
    const [isModalClosed, setIsModalClosed] = useState<boolean>(false);

    const changePenalty = (type: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const changedSolve = item.setPenalty(type)

        setSolves(solves => 
            solves.map(solve => solve.timestamp === item.timestamp ? changedSolve : solve)
            .filter(solve => solve.penalty !== "Delete")
    )}

    return (
        <li className={`${reddit_Mono.className} flex gap-4 border-b pb-1 mb-1 hover:bg-trueGray-700 transition-all`}>#{number}
            <button className='w-full' onClick={() => setIsModalClosed(true)}>{item.timeToString()}</button>
            {
                isModalClosed &&
                <div onClick={() => setIsModalClosed(false)} className=" absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#000000aa] flex justify-center items-center">
                    <div className="bg-gray-bg w-6/12 h-2/3">
                        <h3>{item.scramble}</h3>
                        <h2>{item.timeToString()}</h2>

                        <div className='xl:text-xl'>
                            <button
                                onClick={(e) => changePenalty('+2', e)}
                                className=" w-24 2xl:w-32 py-3 2xl:py-4 bg-dark-gray-bg rounded-l-full text-center active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all"
                            >+2</button>

                            <button
                                onClick={(e) => changePenalty('DNF', e)}
                                className=" py-3 2xl:py-4 bg-dark-gray-bg text-center active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all"
                            >
                                <span className=" inline-block w-24  2xl:w-32  border-r border-l">DNF</span>
                            </button>
                            <button
                                onClick={(e) => changePenalty('Delete', e)}
                                className="w-24 2xl:py-4 2xl:w-32 py-3 bg-dark-gray-bg rounded-r-full text-center  active:bg-trueGray-400 active:text-trueGray-900 hover:bg-trueGray-800 transition-all"
                            >Delete</button>
                        </div>
                    </div>
                </div>
            }
        </li>
    )
}
