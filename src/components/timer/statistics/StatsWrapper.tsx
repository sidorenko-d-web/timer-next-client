'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { useSessionStore } from '@/hooks/storages'

import { SessionStats } from './SessionStats'
import { SolvesList } from './SolvesList'
import { SessionControls } from './session-toggler/SessionControls'
import { sessionService } from '@/services/session.service'

export const StatsWrapper = () => {
	const { sessionName, setSessionId } = useSessionStore()

	const { data: session } = useQuery({
		queryKey: ['session'],
		queryFn: () => sessionService.getSessionOfUser(sessionName)
	})

	

	return (
		<div className='flex w-full h-1/2 pl-20  items-center gap-8'>
			<div className=' bg-dark-gray-bg rounded-2xl px-6 py-4 flex flex-1 gap-2 w-full 2xl:text-2xl h-5/6 mt-auto relative'>
				<SessionStats />
				{/* {ses && <SolvesList solves={ses.solves} />} */}
				<SessionControls />
			</div>
		</div>
	)
}
