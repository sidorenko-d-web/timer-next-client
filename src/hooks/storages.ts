import { create } from 'zustand'

import { ISettingsResponse } from '@/types/settings.types'
import { ISolveResponse, TypeSolveRequest } from '@/types/solves.types'

interface ISessionStorage {
	sessionName: string
	setSessionName: (name: string) => void
	scrambleType: string
	setScrambleType: (name: string) => void
	sessionId: string
	setSessionId: (name: string) => void
	lastSolve: { id: string; penalty: string | null }
	setLastSolve: (solve: { id: string; penalty: string | null }) => void
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
	lastSolve: {
		id: '',
		penalty: null
	},
	setLastSolve: (solve: { id: string; penalty: string | null }) => {
		set({ lastSolve: solve })
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
	needNewScramble: boolean
	setNeedNewScramble: (value: boolean) => void
}

export const useScrambleStorage = create<IScrambleStorage>()(set => ({
	scramble: '',
	setScramble: (scramble: string) => set({ scramble }),
	needNewScramble: false,
	setNeedNewScramble: (value: boolean) => set({ needNewScramble: value }),
}))

interface ISettingsStorage {
	settingsId: string,
	setSettingsId: (settingsId: string) => void,
	isTimeShowed: boolean
	setIsTimeShowed: (isTimeShowed: boolean) => void,

}

export const useSettingsStorage = create<ISettingsStorage>()(set => ({
	settingsId: '',
	setSettingsId: (settingsId: string) => set({ settingsId }),
	isTimeShowed: false,
	setIsTimeShowed: (isTimeShowed: boolean) => set({ isTimeShowed })
}))
