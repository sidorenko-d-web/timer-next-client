'use client'

import {
	faGear,
	faHandFist,
	faHome,
	faTrophy,
	faUserGroup
} from '@fortawesome/free-solid-svg-icons'

import Popup from '../ui/Popup'

import { NavigateItem } from './NavigateItem'
import { SettingsPopUp } from './SettingsPopUp'

export const Navigate = () => {
	return (
		<>
			<nav className=' hidden md:block absolute z-50 w-16 py-12 px-4 h-[100svh] bg-dark-gray-bg hover:w-[230px] transition-all overflow-hidden'>
				<ul className='flex flex-col justify-between h-full items-start'>
					<div className='flex flex-col gap-6 items-start'>
						<li className='hover:border-l-8 border-green-600 hover:pl-4 transition-all'>
							<NavigateItem
								icon={faHome}
								value='Home'
								link='/'
							/>
						</li>
						<li className='hover:border-l-8  mt-12 border-green-600 hover:pl-4 transition-all'>
							<NavigateItem
								icon={faTrophy}
								value='Contest'
								link='/'
							/>
						</li>
						<li className='hover:border-l-8 border-green-600 hover:pl-4 transition-all'>
							<NavigateItem
								icon={faHandFist}
								value='Battle'
								link='/'
							/>
						</li>
						<li className='hover:border-l-8 border-green-600 hover:pl-4 transition-all'>
							<NavigateItem
								icon={faUserGroup}
								value='Friends'
								link='/'
							/>
						</li>
					</div>
					<li className='hover:border-l-8 hover:pl-4 border-green-600 transition-all'>
						<Popup
							ButtonItem={
								<NavigateItem
									icon={faGear}
									value='Settings'
								/>
							}
							PopupItem={SettingsPopUp}
						/>
					</li>
				</ul>
			</nav>
		</>
	)
}
