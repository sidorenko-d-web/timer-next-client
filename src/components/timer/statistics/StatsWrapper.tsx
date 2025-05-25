'use client'

import { SessionStats } from './SessionStats'
import { SolvesList } from './SolvesList'
import { SessionControls } from './session-toggler/SessionControls'
import useRefetchSession from '@/hooks/useRefetchSession'

export const StatsWrapper = () => {

	const {session} = useRefetchSession()
		
	return (
		<div className='flex w-full h-1/2 pl-20  items-center gap-8'>
			{session?  <div className=' bg-dark-gray-bg rounded-2xl px-6 py-4 flex flex-1 gap-2 w-full 2xl:text-2xl h-5/6 mt-auto relative'>
				<SessionStats solves={session.data.solves}/>
				<SolvesList solves={session.data.solves}/> 
				<SessionControls />
			</div> : <h2>Loading...</h2>}
		</div>
	)
}
