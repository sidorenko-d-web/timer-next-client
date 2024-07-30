import { useEffect } from 'react'

export function useLocalStorage() {
	useEffect(() => {
		const name = localStorage.getItem('sessionName')
		if (!name) localStorage.setItem('sessionName', '3x3')
		const type = localStorage.getItem('scrambleType')
		if (!type) localStorage.setItem('scrambleType', '3x3')
	}, [])
}
