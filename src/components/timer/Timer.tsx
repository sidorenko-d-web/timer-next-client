'use client'

import { Reddit_Mono } from 'next/font/google'
import React, { useEffect, useRef, useState } from 'react'

import { useSettingsStorage } from '@/hooks/storages'

import { useTimer } from '../../hooks/useTimer'

import { SolveControls } from './SolveControls'

const reddit_Mono = Reddit_Mono({
	weight: '500',
	subsets: ['latin'],
	display: 'swap'
})

export const Timer = () => {
	const { time, isSpacePressed, isSolving } = useTimer()
	const { isTimeShowed } = useSettingsStorage()

	return (
		<>
			{(!isSolving || !isTimeShowed) && (
				<div
					className={`${reddit_Mono.className} ${isSpacePressed && 'text-red-600'} text-[116px] 2xl:text-[214px] max-h-[200px] flex justify-center items-end relative`}
				>
					<span>{time.split('.')[0]}.</span>
					<span className='text-[80px] pb-3 2xl:pb-12'>
						{time.split('.')[1]}
					</span>
					
			<div id='timer' className='absolute left-0 top-0 h w-full h-full lg:hidden border-red-500 border-2'></div>
				</div>
			)}
			<div
				className={`${isSolving ? 'opacity-0 transition-opacity' : 'opacity-1 transition-opacity'} 'transition-opacity`}
			>
				<SolveControls />
			</div>
		</>
	)
}
