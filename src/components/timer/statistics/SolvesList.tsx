'use client'

import type { ISolveResponse } from '@/types/solves.types'

import { SolveItem } from './SolveItem'

export const SolvesList = ({ solves }: { solves: ISolveResponse[] }) => {
	return (
		<div className='overflow-y-hidden w-full md:w-1/6 md:px-4'>
			<h3 className='mb-2 mr-4 text-xl'>Сборки</h3>
			<ul className='overflow-y-scroll h-full pb-4 flex flex-col pr-6 '>
				{solves.map((solve, index) => (
					<SolveItem
						key={solve.id}
						solve={solve}
						index={solves.length - index}
					/>
				))}
			</ul>
		</div>
	)
}
