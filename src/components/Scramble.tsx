'use client'
import React, {useEffect, useState, useRef } from 'react'
import { NextButton } from './NextButton'
import { PrevButton } from './PrevButton'
import { ScrambleButton } from './ScrambleButton'
import { generateScramble } from 'react-rubiks-cube-utils';
import { useCurrentSession, useSpaceState, useTimerStorage } from '@/hooks/storages'

export const Scramble = () => {
    const {setCurrentScramble} = useTimerStorage()
    const {isKeyDown} = useSpaceState()
    const {type} = useCurrentSession()

    const [scramble, setScramble] = useState<string>('')
    const [timerStopped, setTimerStopped] = useState<boolean>(false)
    const [nextButton, setNextButton] = useState<boolean>(true)
    const [isSolving, setIsSolving] = useState<boolean>(false)
    const prevScramble = useRef<string>(scramble)


    const nextScrambleHandle = () => {
        setNextButton(prev => !prev)
    }

    const prevScrambleHandle = () => {
        setScramble(prevScramble.current)
    }

    useEffect(() => {
        prevScramble.current = scramble
        const newScramble = generateScramble({ type })
        if(prevScramble.current == '') prevScramble.current = newScramble
        setScramble(newScramble)
        setCurrentScramble(newScramble)
    }, [nextButton])

    useEffect(() => {
        const newScramble = generateScramble({ type })
        setScramble(newScramble)
        setCurrentScramble(newScramble)
    }, [type])

    const keyDown = () => {
        if (!isSolving) {
            if(!timerStopped) {
                nextScrambleHandle()
                setCurrentScramble(scramble)
            }
            setTimerStopped(true)
        }
    }

    const keyUp = () => {
        if (!isSolving) {
            setIsSolving(true)
        }else{
            setIsSolving(false)
            setTimerStopped(false)
        }
    }

    useEffect(() => {
        if(isKeyDown) keyDown()
        else keyUp()
    }, [isKeyDown])

    return (
        <div className="flex gap-2 items-start pl-16 pr-8 w-full">
            <ScrambleButton scramble={scramble} />
            {/* prev scramble */}
            <PrevButton handleFunction={prevScrambleHandle} disabled={scramble == prevScramble.current}/>
            {/* next scramble */}
            <NextButton handleFunction={nextScrambleHandle} />
        </div>
    )
}