'use client'

import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Popup from '@/components/ui/Popup'

import { useSessionStore } from '@/hooks/storages'
import useRefetchSession from '@/hooks/useRefetchSession'

import { Avg } from '../statistic-items/Avg'
import { Mo3 } from '../statistic-items/Mo3'
import { SingleSolve } from '../statistic-items/SingleSolve'

import RenameSessionPopup from './controls/RenameSessionPopup'
import { SessionPopup } from './controls/SessionPopup'

export function SessionControls() {
	const { sessionName } = useSessionStore()
	const { session } = useRefetchSession()

	return (
		<div className=' w-full md:w-auto md:absolute right-6 top-4 flex gap-4 flex-col md:flex-row items-end'>
			<Popup
				ButtonItem={sessionName}
				PopupItem={SessionPopup}
				buttonStyle='bg-gray-bg px-4 md:px-8 py-2 text-3xl font-medium rounded-lg text-center'
			/>
			<Popup
				ButtonItem={
					<FontAwesomeIcon
						icon={faEdit}
						className='fas fa-check w-8 h-8'
					/>
				}
				PopupItem={RenameSessionPopup}
				buttonStyle='bg-gray-bg px-3 py-2 text-3xl font-medium rounded-lg text-center'
			/>
			<div className='md:hidden pl-10 flex flex-col items-stretch gap-2 w-full'>
				<SingleSolve solves={session?.data.solves!} />
				<Mo3 solves={session?.data.solves!} />
				<Avg
					solves={session?.data.solves!}
					type={5}
				/>
				<Avg
					solves={session?.data.solves!}
					type={12}
				/>
				<Avg
					solves={session?.data.solves!}
					type={50}
				/>
				<Avg
					solves={session?.data.solves!}
					type={100}
				/>
			</div>
		</div>
	)
}
