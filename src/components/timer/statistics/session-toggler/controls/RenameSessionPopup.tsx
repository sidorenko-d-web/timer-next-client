import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, SetStateAction } from 'react'

import { useSessionStore } from '@/hooks/storages'

import useMutateSession from '../hooks/useMutateSession'

import SessionForm from './SessionForm'
import { sessionService } from '@/services/session.service'

export default function RenameSessionPopup({
	setIsShowed
}: {
	setIsShowed: Dispatch<SetStateAction<boolean>>
}) {
	const { sessionName, scrambleType, setSessionName, setScrambleType } =
		useSessionStore()

	const { deleteSession, deleteError } = useMutateSession(
		sessionName,
		setSessionName,
		setScrambleType
	)

	return (
		<div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-bg w-7/12 m-auto z-[100]'>
			{/* @ts-ignore */}
			{deleteError && (<p className=' text-red-500'>{deleteError.response.data.message}</p>)}
			<button
				onClick={() => deleteSession({ setIsShowed })}
				className='bg-gray-bg px-3 py-2 text-3xl font-medium rounded-lg text-center'
			>
				<FontAwesomeIcon
					icon={faTrash}
					className='fas fa-check w-8 h-8'
				/>
			</button>
			<SessionForm
				setIsShowed={setIsShowed}
				prevName={sessionName}
			/>
		</div>
	)
}
