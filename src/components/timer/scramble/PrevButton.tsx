'use client'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler } from 'react'

export const PrevButton = ({
    handleFunction,
    disabled
}: {
    handleFunction: MouseEventHandler,
    disabled?: boolean
}) => {

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.currentTarget.blur()
        handleFunction(e)
    }
    return (
        <button 
            disabled={disabled} 
            onClick={onClick} 
            className={`disabled:brightness-50 disabled:hover:brightness-50 hover:brightness-75 ml-auto active:brightness-50 transition-all`}
        >
            <FontAwesomeIcon icon={faCircleChevronLeft} className="w-7 h-7" />
        </button>
    )
}
