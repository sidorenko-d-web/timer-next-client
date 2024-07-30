import { useQuery } from '@tanstack/react-query'

import { useSessionStore } from '@/hooks/storages'

import { SessionItem } from './SessionItem'

import { sessionService } from '@/services/session.service'
import { CreateSessionItem } from './CreateSessionItem'
import Popup from '@/components/ui/Popup'
import SessionForm from './SessionForm'

export function SessionPopup({
	setIsShowed
}: {
	setIsShowed: React.Dispatch<React.SetStateAction<boolean>>
}) {
	const { data: res } = useQuery({
		queryKey: ['sessions'],
		queryFn: () => sessionService.getAllSessionsOfUser()
	})

	return (
		<ul className=' absolute z-[110] bg-gray-bg right-0 grid grid-cols-3 gap-4 p-6 h-[100svh] overflow-y-scroll'>
			{res?.data.map(session => (
				<SessionItem
					key={session.name}
					sessionName={session.name}
					scrambleType={session.scrambleType}
					setIsShowed={setIsShowed}
				/>
			))}
			<Popup 
				ButtonItem={<CreateSessionItem />}
				PopupItem={SessionForm}
			/>
		</ul>
	)
}
