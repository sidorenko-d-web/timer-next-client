'use client'
import { useCurrentSession } from '@/hooks/storages'
import { Reddit_Mono } from 'next/font/google'

const reddit_Mono = Reddit_Mono({
    weight: '500',
    subsets: ['latin'],
})


export const ScrambleButton = ({ scramble }: { scramble: string }) => {
    const { type } = useCurrentSession()

    let fontSize: string = 'xl'

    switch (type) {
        case '7x7':
            fontSize = 'sm'
            break;
        case '6x6':
            fontSize = 'base'
            break;
        case '5x5':
            fontSize = 'xl'
            break;
        case 'megaminx':
            fontSize = 'sm text-justify '
            let scrambleArr = scramble.split(' ')
            let output: string[] = []
            let count = false
            scrambleArr.forEach(move => {
                output.push(move)
                if(move == "U" || move == "U'" ){
                    count? output.push('\n') : output.push('\xa0')
                    count = !count
                }
            });
            scramble = output.join(' ')
            break;

        default:
            fontSize = 'xl'
            break;
    }
    return (

        <button>
            <p className={`whitespace-pre-line text-${fontSize} ${reddit_Mono.className}`}>{scramble.toString()}</p>
        </button>
    )
}
