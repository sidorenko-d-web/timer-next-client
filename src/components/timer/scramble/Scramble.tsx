'use client'

import React, { useEffect, useRef, useState } from 'react'
import { generateScramble } from 'react-rubiks-cube-utils'

import { useScrambleStorage, useSessionStore } from '@/hooks/storages'

import { NextButton } from './NextButton'
import { PrevButton } from './PrevButton'
import { ScrambleButton } from './ScrambleButton'

export const Scramble = () => {
	const { scrambleType } = useSessionStore()
	const { setScramble, scramble } = useScrambleStorage()

	const [prevScramble, setPrevScramble] = useState('')

	useEffect(() => {
		if (!scrambleType) return 
		setScramble(generateScramble({ type: scrambleType || localStorage.getItem('scrambleType')!}))
	}, [scrambleType])

	const nextScrambleHandle = () => {
		if (!scrambleType) return
		setPrevScramble(scramble)
		setScramble(generateScramble({ type: scrambleType }))
	}

	const prevScrambleHandle = () => {
		if (prevScramble === '') return
		setScramble(prevScramble)
	}

	return (
		<div className='flex gap-2 items-start pl-16 pr-8 '>
			<ScrambleButton />
			<PrevButton
				handleFunction={prevScrambleHandle}
				disabled={scramble === prevScramble}
			/>

			<NextButton handleFunction={nextScrambleHandle} />
		</div>
	)
}
