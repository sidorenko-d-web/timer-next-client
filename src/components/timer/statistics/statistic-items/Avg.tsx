'use client'

import { Reddit_Mono } from 'next/font/google'

import { ISolveResponse } from '@/types/solves.types'

import { useAvg } from './hooks/useAvg'

const reddit_Mono = Reddit_Mono({
	weight: '500',
	subsets: ['latin'],

	display: 'swap'
})

export const Avg = ({
	solves,
	type
}: {
	solves: ISolveResponse[]
	type: number
}) => {
	const { avg, bestAvg } = useAvg(solves, type)

	return (
		<li className='flex md:justify-between border-b pb-2 gap-1 md:gap-0'>
			<h3 className='w-1/3 hidden md:block'>Avg of {type}</h3>
			<h3 className='text-sm md:hidden mr-auto'>Ao{type}</h3>
			<button className={`${reddit_Mono.className}  text-sm md:text-base`}>{avg}</button>
			<button className={`${reddit_Mono.className} text-best-time-color text-sm md:text-base`}>
				{bestAvg}
			</button>
		</li>
	)
}
