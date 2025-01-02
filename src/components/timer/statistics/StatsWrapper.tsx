'use client'

import useRefetchSession from '@/hooks/useRefetchSession'

import { SessionStats } from './SessionStats'
import { SolvesList } from './SolvesList'
import { SessionControls } from './session-toggler/SessionControls'

export const StatsWrapper = () => {
	const { session, newSolveStatus } = useRefetchSession()

	if (newSolveStatus === 'pending') return <h2>Loading...</h2>
	if (newSolveStatus === 'error') return <h2>Error</h2>

	return (
		<div className='flex w-full h-1/2 md:px-4 md:pl-20  items-center gap-8'>
			{session && (
				<div className=' bg-dark-gray-bg rounded-2xl px-6 py-4 flex flex-1 gap-2 w-full 2xl:text-2xl h-5/6 mt-auto relative'>
					<SessionStats solves={session.data.solves} />
					<SolvesList solves={session.data.solves} />
					<SessionControls />
				</div>
			)}
		</div>
	)
}
