import { useEffect, useState } from 'react'

import { ISolveResponse } from '@/types/solves.types'

import { convertTime } from '@/hooks/statisticFunctions'

const findAvg = (solves: ISolveResponse[], type: number): number => {
	if (solves.length >= type) {
		let solvesHere: ISolveResponse[] = solves.slice(0, type)

		let best: number = Infinity
		let bestIndex: number = 0

		let worst: number = -Infinity
		let worstIndex: number = 0

		for (let i = 0; i < type; i++) {
			const dateTime: Date = new Date(solvesHere[i].time)

			switch (solves[i].penalty) {
				case 'dnf':
					continue
				case 'plu2':
					dateTime.setSeconds(dateTime.getSeconds() + 2)
					break
				default:
					break
			}

			if (dateTime.getTime() < best) {
				best = dateTime.getTime()
				bestIndex = i
			}
		}
		solvesHere.splice(bestIndex, 1)

		for (let i = 0; i < type - 1; i++) {
			const dateTime: Date = new Date(solvesHere[i].time)

			switch (solves[i].penalty) {
				case 'plus2':
					dateTime.setSeconds(dateTime.getSeconds() + 2)
					break
				default:
					break
			}

			if (dateTime.getTime() > worst) {
				if (solvesHere[i].penalty === 'dnf') {
					worst = Infinity
				} else {
					worst = dateTime.getTime()
				}
				worstIndex = i
			}
		}
		solvesHere.splice(worstIndex, 1)

		let time = 0

		for (let i = 0; i < type - 2; i++) {
			if (solvesHere[i].penalty == 'dnf') {
				console.log('object')
				return Infinity
			}
			time += new Date(solvesHere[i].time).getTime()
		}

		return time / (type - 2)
	} else {
		return 0
	}
}

export const useAvg = (solves: ISolveResponse[], type: number) => {
	const [avg, setAvg] = useState<string>('0.000')
	const [bestAvg, setBestAvg] = useState<string>('0.000')

	useEffect(() => {
		if (solves.length >= type) {
			let currAvg = Infinity
			let bestAvg = Infinity

			for (let i = 0; i < solves.length - type + 1; i++) {
				const solvesHere = solves.slice(i, i + type)

				currAvg = findAvg(solvesHere, type)

				if (i == 0) setAvg(convertTime(new Date(currAvg)))

				if (currAvg < bestAvg) {
					bestAvg = currAvg
				}
			}

			setBestAvg(convertTime(new Date(bestAvg)))
		} else {
			setAvg('0.000')
			setBestAvg('0.000')
		}
	}, [solves])

	return { avg, bestAvg }
}
