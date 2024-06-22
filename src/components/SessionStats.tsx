'use client'
import { Solve } from '@/classes/Solve'
import { SingleSolve } from './sessionStats/SingleSolve'
import { Mo3 } from './sessionStats/Mo3'
import { Avg } from './sessionStats/Avg'

export const SessionStats = ({ solves }: { solves: Solve[] }) => { 

    

    return (

        <div className="flex flex-col gap-2 w-4/12">
            <h3 className="text-xl">Всего сборок: <span className="font-bold">{solves.length}</span></h3>
            <ul className="flex flex-col justify-between h-full">
                <SingleSolve solves={solves} />
                <Mo3 solves={solves} />
                <Avg solves={solves} type={5}/>
                <Avg solves={solves} type={12}/>
                <Avg solves={solves} type={50}/>
                <Avg solves={solves} type={100}/>
            </ul>
        </div>
    )
}
