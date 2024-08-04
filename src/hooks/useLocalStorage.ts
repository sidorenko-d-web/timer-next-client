import { useEffect } from 'react'

import { useSessionStore } from './storages'

export function useLocalStorage() {
	const { sessionName, scrambleType, setSessionName, setScrambleType } =
		useSessionStore()

	useEffect(() => {
		const storedSessionName = localStorage.getItem('sessionName')
		const storedScrambleType = localStorage.getItem('scrambleType')
		if (storedSessionName && sessionName !== '') {
			setSessionName(storedSessionName)
		} else {
			setSessionName('3x3')
			localStorage.setItem('sessionName', '3x3')
		}
		if (storedScrambleType && scrambleType !== '') {
			setScrambleType(storedScrambleType)
		} else {
			setScrambleType('3x3')
			localStorage.setItem('scrambleType', '3x3')
		}
	}, [])
}
