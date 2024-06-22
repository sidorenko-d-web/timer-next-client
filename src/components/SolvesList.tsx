import React from 'react'
import { Solve } from '@/classes/Solve'
import { SolveItem } from './SolveItem'

export const SolvesList = ({solves, setSolves} : {solves: Solve[], setSolves: React.Dispatch<React.SetStateAction<Solve[]>>}) => { 

    return (
        <div className="overflow-hidden w-1/6 px-4">
            <h3 className="mb-2 mr-4 text-xl">Сборки</h3>
            <ul className="overflow-scroll h-full  flex flex-col pr-6">
                {solves.map((item, index) => 
                    <SolveItem key={item.timestamp} item={item} number={solves.length - index} setSolves={setSolves}/>
                )}
            </ul>
            
        </div>
    )
}
