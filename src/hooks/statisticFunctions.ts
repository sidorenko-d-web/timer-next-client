import { Solve } from "@/classes/Solve"

export const findAvg = (solves: Solve[], type: number): number => {
    if (solves.length >= type) {
        let solvesHere: Solve[] = solves.slice(0, type)

        let best: number = Infinity
        let bestIndex: number = 0

        let worst: number = -Infinity
        let worstIndex: number = 0

        for (let i = 0; i < type; i++) {
            const dateTime: Date = new Date(solvesHere[i].time)

            switch (solves[i].penalty) {
                case 'DNF':
                    continue
                case '+2':
                    dateTime.setSeconds(dateTime.getSeconds() + 2)
                    break;
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
                case '+2':
                    dateTime.setSeconds(dateTime.getSeconds() + 2)
                    break;
                default:
                    break
            }

            if (dateTime.getTime() > worst) {
                if (solvesHere[i].penalty === 'DNF') {
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
            if(solvesHere[i].penalty == 'DNF') return Infinity
            time += solvesHere[i].time.getTime()
        }

        return time / (type - 2)
    } else {
        return 0
    }
}

export const findBestAvg = (solves: Solve[], type: number): number => {
    if (solves.length >= type) {
        let bestAvg = Infinity
        for (let i = 0; i < solves.length - type + 1; i++) {
            const solvesHere = solves.slice(i, i + type)

            const currAvg = findAvg(solvesHere, type)

            if(currAvg == Infinity){
                return Infinity
            }

            if (currAvg < bestAvg) {
                bestAvg = currAvg
            }
        }
        return bestAvg
    } else {
        return 0
    }
}

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