'use client'
import { Reddit_Mono } from 'next/font/google'
import React, { useEffect, useRef, useState } from 'react'

import { useTimer } from '../../hooks/useTimer'

import { SolveControls } from './SolveControls'

const reddit_Mono = Reddit_Mono({
	weight: '500',
	subsets: ['latin']
})

export const Timer = () => {
	const { time, isSpacePressed } = useTimer()


	return (
		<>
			<div
				className={`${reddit_Mono.className} ${isSpacePressed && 'text-red-600'} text-[116px] 2xl:text-[214px] max-h-[200px] flex justify-center items-end`}
			>
				<span>{time.split('.')[0]}.</span>
				<span className='text-[80px] pb-3 2xl:pb-12'>{time.split('.')[1]}</span>
			</div>
			<SolveControls />
		</>
	)
}
