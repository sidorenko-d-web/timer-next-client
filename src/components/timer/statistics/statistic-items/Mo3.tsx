'use client'

import { Reddit_Mono } from 'next/font/google'
import React, { useEffect, useState } from 'react'

import type { ISolveResponse } from '@/types/solves.types'

import { useFindMo3 } from './hooks/useMO3'

const reddit_Mono = Reddit_Mono({
	weight: '500',
	subsets: ['latin'],
	display: 'swap'
})

export const Mo3 = ({ solves }: { solves: ISolveResponse[] }) => {
	const { currtMo3, bestMo3 } = useFindMo3(solves)

	return (
		<li className='flex md:justify-between border-b pb-2 gap-1 md:gap-0'>
			<h3 className='w-1/3 hidden md:block'>Middle of 3</h3>
			<h3 className='text-sm md:hidden mr-auto'>Mo3</h3>
			<button className={`${reddit_Mono.className}  text-sm md:text-base`}>
				{currtMo3}
			</button>
			<button
				className={`${reddit_Mono.className} text-best-time-color  text-sm md:text-base`}
			>
				{bestMo3}
			</button>
		</li>
	)
}
