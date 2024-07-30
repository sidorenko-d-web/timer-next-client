import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { TypeSessionRequest } from '@/types/session.types'

import { useSessionStore } from '@/hooks/storages'

import useMutateSession from '../hooks/useMutateSession'

import { sessionService } from '@/services/session.service'

export default function SessionForm({
	prevName,
	setIsShowed
}: {
	prevName?: string
	setIsShowed: Dispatch<SetStateAction<boolean>>
}) {
	const { register, handleSubmit } = useForm<TypeSessionRequest>({
		defaultValues: {
			name: prevName
		}
	})

	const isUpdate = Boolean(prevName)

	const { sessionName, scrambleType, setSessionName, setScrambleType } =
		useSessionStore()

	const {
		createSession,
		createError,
		updateSession,
		updateError,
    isSuccess
	} = useMutateSession(sessionName, setSessionName, setScrambleType)

	const onSubmit = (data: TypeSessionRequest) => {
		if (isUpdate && prevName) {
			updateSession({ prevName, data, setIsShowed })
		} else {
			createSession({data, setIsShowed})
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`flex flex-col px-8 py-4 text-2xl ${!isUpdate && 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-bg w-4/12 m-auto z-[100] rounded-xl'}`}
		>
			{updateError && <label htmlFor='name'>Name should be unique</label>}
			<label htmlFor='name'>
				{isUpdate ? 'New name for session' : 'Name for session'}
			</label>
			<input
				{...register('name', {
					required: true
				})}
				id='name'
				type='text'
				className='bg-dark-gray-bg mb-5'
			/>
			{!isUpdate && (
				<>
					<label htmlFor='name'>{'Type for session'}</label>
					<select
						{...register('scrambleType', {
							required: true
						})}
						className='bg-dark-gray-bg'
					>
						<option value='2x2'>2x2</option>
						<option value='3x3'>3x3</option>
						<option value='4x4'>4x4</option>
						<option value='5x5'>5x5</option>
						<option value='6x6'>6x6</option>
						<option value='7x7'>7x7</option>
						<option value='sq1'>Square-1</option>
						<option value='skewb'>Skewb</option>
						<option value='megaminx'>Megaminx</option>
						<option value='clock'>Clock</option>
						<option value='pyraminx'>Pyraminx</option>
					</select>
				</>
			)}

			<button className='bg-best-time-color px-5 py-2 rounded-xl mt-5'>
				Submit
			</button>
		</form>
	)
}
