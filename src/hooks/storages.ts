
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
	sessionName: '',
	setSessionName: (name: string) => {
		localStorage.setItem('sessionName', name)
		set({ sessionName: name })

	},
	scrambleType: '',
	setScrambleType: (type: string) => {
		localStorage.setItem('scrambleType', type)
		set({ scrambleType: type })
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
