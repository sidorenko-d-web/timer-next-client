'use client'
import React, { useEffect, useRef, useState } from 'react'

import { SolveControls } from './SolveControls'
import { Reddit_Mono } from 'next/font/google'
import { Solve } from '@/classes/Solve'

const reddit_Mono = Reddit_Mono({
    weight: '500',
    subsets: ['latin'],
})

export const Timer = () => {

    
    const [isSolving, setIsSolving] = useState<boolean>(false)
    const [timerStopped, setTimerStopped] = useState<boolean>(false)
    const [time, setTime] = useState<string>('0.000')
    const [dateTime, setDateTime] = useState<Date>(new Date)
    let intervalId = useRef<NodeJS.Timeout>()

    const keyDown = (e: KeyboardEvent) => {
        if (e.code === 'Space') {
            if (isSolving) {
                clearInterval(intervalId.current)
                setTimerStopped(true)
            }

        }
    }
    const keyUp = (e: KeyboardEvent) => {
        if (e.code === 'Space') {
            if (!isSolving) {
                setIsSolving(true)
                const startTime = new Date().getTime()
                intervalId.current = setInterval(() => {
                    setTime(startTimer(startTime))
                    setDateTime(new Date(new Date().getTime() - startTime))
                }, 1)
            } else {
                setIsSolving(false)
                setTimerStopped(false)
            }

        }
    }

    const startTimer = (startTime: number) => {
        const diff = new Solve(new Date(new Date().getTime() - startTime), 0, '', '')
        return diff.timeToString()
    }

  


    useEffect(() => {
        document.addEventListener('keydown', keyDown)
        document.addEventListener('keyup', keyUp)

        return () => {
            document.removeEventListener('keydown', keyDown)
            document.removeEventListener('keyup', keyUp)
        }
    })

    return (
        <>
            <div className={`${reddit_Mono.className} text-[116px] 2xl:text-[214px] max-h-[200px] flex justify-center items-center`}>
                {time.split('.')[0]}.<span className="text-[80px]">{time.split('.')[1]}</span>
            </div>
            <SolveControls />
        </>
    )
}
