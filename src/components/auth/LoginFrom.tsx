'use client'
import type { Dispatch, SetStateAction } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import type { ILoginform } from '@/types/auth.types'
import useAuth from './hooks/useAuth'


export const LoginFrom = ({
	setIsRegistered
}: {
	setIsRegistered: Dispatch<SetStateAction<boolean>>
}) => {
	const { register, handleSubmit, reset } = useForm<ILoginform>({
		mode: 'onChange'
	})

    const {auth, authError, isAuthError} = useAuth('login')
	

	const onSubmit: SubmitHandler<ILoginform> = data => {
		auth({data, reset})
	}

	return (
		<form
			className='bg-gray-bg flex z-40 flex-col p-8 w-3/12 rounded-3xl'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className=' text-4xl text-center font-semibold mb-6'>Log In</h1>
			{isAuthError && (
				<label className=' text-xl mb-2 ml-1 text-red-500 capitalize'>
					{
						// @ts-ignore
						authError.response.data.message
					}
				</label>
			)}
			<label
				className=' text-xl mb-2 ml-1'
				htmlFor='email'
			>
				Email
			</label>
			<input
				{...register('email', {
					required: 'Email is required'
				})}
				className=' bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none'
				type='text'
				id='email'
			/>
			<label
				className=' text-xl mb-2 ml-1'
				htmlFor='pass'
			>
				Password
			</label>
			<input
				{...register('password', {
					required: 'Password is required'
				})}
				className=' bg-dark-gray-bg rounded-xl px-4 py-2 mb-6 outline-none'
				type='password'
				id='pass'
			/>
			<button className=' bg-best-time-color rounded-full py-2'>Log In</button>
			<button
				onClick={() => setIsRegistered(false)}
				type='button'
				className=' underline text-sm text-trueGray-400 mt-4'
			>
				Havent registered yet? Click here
			</button>
		</form>
	)
}
