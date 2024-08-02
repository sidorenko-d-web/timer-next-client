'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { useSessionStore } from '@/hooks/storages'

import { SessionStats } from './SessionStats'
import { SolvesList } from './SolvesList'
import { SessionControls } from './session-toggler/SessionControls'
import { sessionService } from '@/services/session.service'
import { ISolveResponse } from '@/types/solves.types'

export const StatsWrapper = () => {
	const { sessionName, setSessionId, setLastSolve, lastSolve } = useSessionStore()
	const [solves, setSolves] = useState<ISolveResponse[]>([])

	const queryClient = useQueryClient()

	const { data: session } = useQuery({
		queryKey: ['session'],
		queryFn: async () => {
			const res = await sessionService.getSessionOfUser(sessionName)
			setSessionId(res.data.id)
			if(res.data.solves[0]) setLastSolve(res.data.solves[0])
			return res
		},
		enabled: !!sessionName
	})

	const fetchData = async () => {
		useEffect(() => {
			if(!session) return
			queryClient.invalidateQueries({ queryKey: ['session'] })
		}, [sessionName])
	}
	fetchData()
	return (
		<div className='flex w-full h-1/2 pl-20  items-center gap-8'>
			<div className=' bg-dark-gray-bg rounded-2xl px-6 py-4 flex flex-1 gap-2 w-full 2xl:text-2xl h-5/6 mt-auto relative'>
				<SessionStats />
				{session? <SolvesList solves={session.data.solves} /> : <h2>Loading...</h2>}
				<SessionControls />
			</div>
		</div>
	)
}
