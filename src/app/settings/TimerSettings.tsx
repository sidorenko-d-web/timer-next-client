'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { TypeSettingsRequest } from '@/types/settings.types'

import { useSettingsStorage } from '@/hooks/storages'

import { settingsService } from '@/services/settings.service'

export const TimerSettings = () => {
	const { isTimeShowed, settingsId } = useSettingsStorage()

	const queryClient = useQueryClient()

	const {mutate: updateSettings} = useMutation({
		mutationKey: ['update-settings'],
		mutationFn: (data: TypeSettingsRequest) => settingsService.updateSession(settingsId, data),
    onSuccess(){
      queryClient.invalidateQueries({queryKey: ['settings']})
    }
	})

	const { register, handleSubmit } = useForm<TypeSettingsRequest>({
		defaultValues: {
			isTimeShowed: isTimeShowed
		}
	})

	const onSubmit = (data: TypeSettingsRequest) => {
    updateSettings(data)
  }

	return (
		<>
			<form
				onChange={handleSubmit(onSubmit)}
				className=' bg-gray-bg h-full rounded-b-3xl flex pt-6 px-8 gap-12'
			>
				<div className='flex flex-col w-1/2 gap-6'>
					<div className='flex justify-between items-start'>
						<label
							className='text-2xl w-7/12'
							htmlFor='isTimeShowed'
						>
							Hide time while solving
						</label>
						<input
							type='checkbox'
							id='isTimeShowed'
							{...register('isTimeShowed')}
						/>
					</div>
					<div className='flex justify-between items-start'>
						<h3 className='text-2xl w-7/12'>Hide interface while solving</h3>
						<input
							type='checkbox'
							disabled={true}
						/>
					</div>
				</div>
			</form>
		</>
	)
}
