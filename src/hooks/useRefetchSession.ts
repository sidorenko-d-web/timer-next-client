import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { useSessionStore } from './storages'
import { sessionService } from '@/services/session.service'

export default function useRefetchSession() {
	const { sessionName, setSessionId, setLastSolve, lastSolve } =
		useSessionStore()

	const queryClient = useQueryClient()
	const { data: session, status: newSolveStatus } = useQuery({
		queryKey: ['session'],
		queryFn: async () => {
			const res = await sessionService.getSessionOfUser(sessionName)
			setSessionId(res.data.id)
			if (res.data.solves[0]) setLastSolve(res.data.solves[0])
			return res
		},
		enabled: !!sessionName
	})

	const fetchData = async () => {
		useEffect(() => {
			if (!session) return
			queryClient.invalidateQueries({ queryKey: ['session'] })
		}, [sessionName])
	}

	fetchData()

	return { session, newSolveStatus }
}
