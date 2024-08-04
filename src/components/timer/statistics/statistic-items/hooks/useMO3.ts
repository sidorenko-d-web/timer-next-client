import { convertTime } from "@/hooks/statisticFunctions"
import { ISolveResponse } from "@/types/solves.types"
import { useState, useEffect } from "react"

export const useFindMo3 = (solves: ISolveResponse[]) => {
	let [bestMo3, setBestMo3] = useState('')
	let [currtMo3, setCurrMo3] = useState('')

	useEffect(() => {
		if (solves && solves.length >= 3) {
			let best: number = Infinity
			for (let j = 0; j < solves.length - 2; j++) {
				let time: number = 0
				for (let i = 0; i < 3; i++) {
					const dateTime = new Date(solves[j + i].time)
					switch (solves[j + i].penalty) {
						case 'dnf':
							time += Infinity
							break
						case 'plus2':
							time += dateTime.getTime() + 2000
							break
						default:
							time += dateTime.getTime()
							break
					}
				}
				if (time / 3 < best) {
					best = time / 3
				}
				if (j == 0) {
					if (time === Infinity) {
						setCurrMo3('DNF')
					} else {
						setCurrMo3(convertTime(new Date(time / 3))) //setting middle of 3 last solves in array
					}
				}
			}
			if (best === Infinity) {
				setBestMo3('DNF')
			} else {
				setBestMo3(convertTime(new Date(best)))
			}
		} else {
			setBestMo3('0.000')
			setCurrMo3('0.000')
		}
	}, [solves])
	return { bestMo3, currtMo3 }
}