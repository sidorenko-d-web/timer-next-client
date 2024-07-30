import { useEffect } from 'react'

import { useSessionStore } from './storages'

export function useLocalStorage() {
	const { sessionName, scrambleType, setSessionName, setScrambleType } =
		useSessionStore()

	useEffect(() => {
		const storedSessionName = localStorage.getItem('sessionName')
		const storedScrambleType = localStorage.getItem('scrambleType')
		if (storedSessionName && sessionName === '')
			setSessionName(storedSessionName)
		if (storedScrambleType && scrambleType === '')
			setScrambleType(storedScrambleType)
	}, [])
}
