
import { create } from 'zustand'

import { TypeSolveRequest } from '@/types/solves.types'

interface ISessionStorage {
	sessionName: string
	setSessionName: (name: string) => void
	scrambleType: string
	setScrambleType: (name: string) => void
	sessionId: string
	setSessionId: (name: string) => void
	sessionSolves: TypeSolveRequest[]
	setSessionSolves: (solve: TypeSolveRequest[]) => void
}

export const useSessionStore = create<ISessionStorage>()(set => ({
	sessionName: localStorage.getItem('sessionName') || '3x3',
	setSessionName: (name: string) => {
		set({ sessionName: name })
			localStorage.setItem('sessionName', name)

	},
	scrambleType: localStorage.getItem('scrambleType') || '3x3',
	setScrambleType: (type: string) => {
		set({ scrambleType: type })
		localStorage.setItem('scrambleType', type)
	},
	sessionId: '',
	setSessionId: (type: string) => {
		set({ sessionId: type })
	},
	sessionSolves: [],
	setSessionSolves: (solves: TypeSolveRequest[]) => {
		set({ sessionSolves: solves })
	}
}))

interface IPopupStatus {
	popupStatus: boolean
	setPopupStatus: (status: boolean) => void
}

export const usePopupStatus = create<IPopupStatus>()(set => ({
	popupStatus: false,
	setPopupStatus: (status: boolean) => set({ popupStatus: status })
}))

interface IScrambleStorage {
	scramble: string
	setScramble: (scramble: string) => void
}

export const useScrambleStorage = create<IScrambleStorage>()(set => ({
	scramble: '',
	setScramble: (scramble: string) => set({ scramble: scramble })
}))
