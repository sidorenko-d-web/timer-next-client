'use client'
import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CreateSessionItem = () => {
	const onClick = () => {}

	return (
		<li
			onClick={onClick}
			className='text-center text-xl bg-dark-gray-bg rounded-2xl py-3 px-4 aspect-square h-fit cursor-pointer'
		>
			<div className='mb-2 mx-auto'>
				<FontAwesomeIcon
					icon={faPlusSquare}
					size={'5x'}
          className=' text-gray-400'
				/>
			</div>
			<span>Create session</span>
		</li>
	)
}
