import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Dispatch, SetStateAction } from 'react'

import { TypeSessionRequest } from '@/types/session.types'

import { sessionService } from '@/services/session.service'

export default function useMutateSession(
	sessionName: string,
	setSessionName: (name: string) => void,
	setScrambleType: (type: string) => void
) {
	const queryClient = useQueryClient()

	const {
		mutate: deleteSession,
		error: deleteError,
		status: updateStatus
	} = useMutation({
		mutationKey: ['delete-session'],
		mutationFn: ({}: { setIsShowed: Dispatch<SetStateAction<boolean>> }) =>
			sessionService.deleteSession(sessionName),
		onSuccess(data, { setIsShowed }) {
			if (!data) return
			setSessionName(data.data.name)
			setScrambleType(data.data.scrambleType)

			setIsShowed(false)
			queryClient.invalidateQueries({ queryKey: ['sessions'] })
		}
	})

	const {
		mutate: updateSession,
		error: updateError,
		isSuccess
	} = useMutation({
		mutationKey: ['update-session'],
		mutationFn: async ({
			prevName,
			data
		}: {
			prevName: string
			data: Omit<TypeSessionRequest, 'scrambleType'>
			setIsShowed: Dispatch<SetStateAction<boolean>>
		}) => await sessionService.updateSession(prevName, data),
		onSuccess(data, { setIsShowed }) {
			if (!data) return
			setSessionName(data.data.name)
			setIsShowed(false)
			queryClient.invalidateQueries({ queryKey: ['sessions'] })
		},
		onError(error){
			console.log(error)
		}
	})

	const { mutate: createSession, error: createError } = useMutation({
		mutationKey: ['create-ession'],
		mutationFn: ({
			data
		}: {
			data: TypeSessionRequest
			setIsShowed: Dispatch<SetStateAction<boolean>>
		}) => sessionService.createSession(data),
		onSuccess(data, { setIsShowed }) {
			if (!data) return
			setSessionName(data.data.name)
			setScrambleType(data.data.scrambleType)
			setIsShowed(false)
			queryClient.invalidateQueries({ queryKey: ['sessions'] })
		},
		onError(error) {
			console.log(error)
		}
	})

	return {
		deleteSession,
		deleteError,
		updateSession,
		updateError,
		isSuccess,
		createSession,
		createError
	}
}
