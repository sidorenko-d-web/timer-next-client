import { useEffect, useState } from 'react'

import { ISolveResponse } from '@/types/solves.types'

import { Solve } from '@/classes/Solve'

export function useSinlge(solves: ISolveResponse[]) {
	const [single, setSingle] = useState('0.000')
	const [bestSingle, setBestSingle] = useState('0.000')

	useEffect(() => {
		let best = Infinity

		for (let i = 0; i < solves.length; i++) {
			if (i === 0) {
				setSingle(
					new Solve(
						new Date(solves[0].time),
						solves[0].createdAt,
						solves[0].scramble,
						solves[0].penalty
					).timeToString()
				)
			}

			let curr = new Date(solves[i].time).getTime()
			if (solves[i].penalty === 'dnf') continue
			else if (solves[i].penalty === 'plus2') curr += 2000

			if (curr < best) {
				best = curr
			}
		}
		setBestSingle(new Solve(new Date(best), new Date(), '', '').timeToString())
	}, [solves])

	return { single: single === 'dnf' ? 'DNF' : single, bestSingle }
}
