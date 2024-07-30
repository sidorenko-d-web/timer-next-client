'use clietn'

import { useSessionStore } from '@/hooks/storages'
import { useQueryClient } from '@tanstack/react-query'

export const SessionItem = ({
	sessionName,
	scrambleType,
	setIsShowed
}: {
	sessionName: string
	scrambleType: string
	setIsShowed: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const { setSessionName, setScrambleType } = useSessionStore()
	const onClick = () => {
		setIsShowed(false)
		setSessionName(sessionName), setScrambleType(scrambleType)
	}

	return (
		<li
			onClick={onClick}
			className='text-center text-xl bg-dark-gray-bg rounded-2xl py-3 px-4 aspect-square h-fit cursor-pointer'
		>
			<div className=' w-[88px] h-[88px] bg-gray-400 mb-2 mt-2 mx-auto'></div>
			<span>{sessionName}</span>
		</li>
	)
}
