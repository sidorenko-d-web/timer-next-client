'use client'

import { Timer } from '@/components/timer/Timer'
import { Scramble } from '@/components/timer/scramble/Scramble'
import { StatsWrapper } from '@/components/timer/statistics/StatsWrapper'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useSettings } from '@/hooks/useSettings'

export default function App() {
	useLocalStorage()
	useSettings()

	return (
		<main className=' z-0 flex px-4 py-4 flex-col w-full items-center justify-between h-[100svh] bg-gray-bg gap-3'>
			<div className='flex flex-col items-center justify-between h-1/2'>
				<Scramble />
				<Timer />
			</div>
			<StatsWrapper />
		</main>
	)
}
