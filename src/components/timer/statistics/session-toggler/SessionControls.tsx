'use client'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'

import Popup from '@/components/ui/Popup'

import { SessionPopup } from './controls/SessionPopup'
import { sessionService } from '@/services/session.service'
import RenameSessionPopup from './controls/RenameSessionPopup'
import { useSessionStore } from '@/hooks/storages'

export function SessionControls() {
  const {sessionName} = useSessionStore()

  

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
