'use client'
import React, { MouseEventHandler } from 'react'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NextButton = ({
    handleFunction,
    disabled,
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
            className=" hover:brightness-75 active:brightness-50 transition-all"
        >
            <FontAwesomeIcon icon={faCircleChevronRight} className="w-7 h-7" />
        </button>
    )
}
