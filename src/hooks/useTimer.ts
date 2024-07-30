import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

import { TypeSolveRequest } from '@/types/solves.types'

import { usePopupStatus, useScrambleStorage, useSessionStore } from '@/hooks/storages'

import { Solve } from '@/classes/Solve'
import { solveService } from '@/services/solves.service'

export function useTimer() {
	const [isSolving, setIsSolving] = useState<boolean>(false)
	const [isSpacePressed, setIsSpacePressed] = useState<boolean>(false)

	const [time, setTime] = useState<string>('0.000')
	let intervalId = useRef<NodeJS.Timeout>()
	const queryClient = useQueryClient()

	const { popupStatus } = usePopupStatus()

	const { scramble } = useScrambleStorage()

	const { sessionId, scrambleType } = useSessionStore()

	const { mutate } = useMutation({
		mutationKey: ['add-solve'],
		mutationFn: (data: TypeSolveRequest) => {
			return solveService.create(data)
		},
		onSuccess() {
		},
		onError(e){
			console.log(e)
		}
	})

	const keyDown = (e: KeyboardEvent) => {
		if (popupStatus) return
		if (e.code === 'Space') {
			if (isSolving) {
				mutate({ 
					sessionId: sessionId, 
					time: new Date(time),
					penalty: null,
					scramble
				 })
				clearInterval(intervalId.current)
			} else {
				setIsSpacePressed(true)
			}
		}
	}
	const keyUp = (e: KeyboardEvent) => {
		if (popupStatus) return
		if (e.code === 'Space') {
			if (!isSolving) {
				setIsSpacePressed(false)
				setIsSolving(true)
				const startTime = new Date().getTime()
				intervalId.current = setInterval(() => {
					setTime(startTimer(startTime))
				}, 1)
			} else {
				setIsSolving(false)
			}
		}
	}

	const startTimer = (startTime: number) => {
		const diff: Solve = new Solve()
		diff.time = new Date(new Date().getTime() - startTime)

		return diff.timeToString()
	}

	useEffect(() => {
		document.addEventListener('keydown', keyDown)
		document.addEventListener('keyup', keyUp)

		return () => {
			document.removeEventListener('keydown', keyDown)
			document.removeEventListener('keyup', keyUp)
		}
	})

	return { time, isSpacePressed }
}
