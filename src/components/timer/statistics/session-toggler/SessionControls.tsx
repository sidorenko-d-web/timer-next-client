'use client'

import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Popup from '@/components/ui/Popup'

import { useSessionStore } from '@/hooks/storages'

import RenameSessionPopup from './controls/RenameSessionPopup'
import { SessionPopup } from './controls/SessionPopup'

export function SessionControls() {
	const { sessionName } = useSessionStore()

	return (
		<div className='absolute right-6 top-4 flex gap-4'>
			<Popup
				ButtonItem={sessionName}
				PopupItem={SessionPopup}
				buttonStyle='bg-gray-bg px-8 py-2 text-3xl font-medium rounded-lg text-center'
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
		</div>
	)
}
