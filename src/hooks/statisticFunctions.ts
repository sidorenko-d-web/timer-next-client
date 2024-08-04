import { useEffect, useState } from 'react'

import { ISolveResponse } from '@/types/solves.types'

import { Solve } from '@/classes/Solve'


export const convertTime = (date: Date) => {
	let ms = date.getMilliseconds().toString()
	if (ms.length == 1) ms = '00' + ms.toString()
	else if (ms.length == 2) ms = '0' + ms.toString()

	if (date.getMinutes()) {
		if (date.getSeconds() < 10) {
			return `${date.getMinutes()}:0${date.getSeconds()}.${ms}`
		}
		return `${date.getMinutes()}:${date.getSeconds()}.${ms}`
	} else if (date.getSeconds()) {
		return `${date.getSeconds()}.${ms}`
	} else {
		return `0.${ms}`
	}
}


