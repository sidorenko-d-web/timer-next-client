'use client'

import { Reddit_Mono } from 'next/font/google'
import { useEffect, useState } from 'react'

import type { ISolveResponse } from '@/types/solves.types'

import { useSinlge } from './hooks/useSinlge'
import { Solve } from '@/classes/Solve'

const reddit_Mono = Reddit_Mono({
	weight: '500',
	subsets: ['latin']
})

export const SingleSolve = ({ solves }: { solves: ISolveResponse[] }) => {
	const { single, bestSingle } = useSinlge(solves)
	return (
		<li className='flex justify-between border-b pb-2'>
			<h3 className='w-1/3'>Единичная</h3>
			<button className={reddit_Mono.className}>{single}</button>
			<button className={`${reddit_Mono.className} text-best-time-color`}>
				{bestSingle}
			</button>
		</li>
	)
}
