'use client'

import { Reddit_Mono } from 'next/font/google'
import React, { useEffect, useState } from 'react'

import type { ISolveResponse } from '@/types/solves.types'
import { useFindMo3 } from './hooks/useMO3'


const reddit_Mono = Reddit_Mono({
	weight: '500',
	subsets: ['latin']
})

export const Mo3 = ({ solves }: { solves: ISolveResponse[] }) => {
	
  const { currtMo3, bestMo3 } = useFindMo3(solves)

	return (
		<li className='flex justify-between border-b pb-2'>
			<h3 className='w-1/3'>Middle of 3</h3>
			<button className={reddit_Mono.className}>{currtMo3}</button>
			<button className={`${reddit_Mono.className} text-best-time-color`}>
				{bestMo3}
			</button>
		</li>
	)
}
