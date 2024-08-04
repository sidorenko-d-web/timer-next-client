import { useSessionStore } from './storages'

export function useStorages() {
	const { setSessionName, setScrambleType } = useSessionStore()

	const name = window.localStorage.getItem('sessionName')
	setSessionName(name || '3x3')
	const type = window.localStorage.getItem('scrambleType')
	setScrambleType(type || '3x3')
}
