import { Solve } from "@/classes/Solve"
import { create } from "zustand"

interface timerStorageStates{
    currentScramble: string,
    currentSolve: Solve,

}

interface timerStorageActions{
    setCurrentScramble: (currentScramble: string) => void,
    setCurrentSolve: (solve: Solve) => void
    resetSolve: () => void
}

const solveInitials = new Solve(
    new Date('0000000'),
    0,
    '',
    ''
)

export const useTimerStorage = create<timerStorageStates & timerStorageActions>()((set) => ({
    currentScramble: '',
    setCurrentScramble: (currentScramble: string) => set({currentScramble}),
    currentSolve: solveInitials,
    setCurrentSolve: (currentSolve: Solve) => {set({currentSolve})},
    resetSolve: () => set({currentSolve: solveInitials})

}))

interface interfaceSpaceState {
    isKeyDown: boolean,
    setIsKeyDown: (isKeyDown: boolean) => void
}

export const useSpaceState = create<interfaceSpaceState>()((set) => ({
    isKeyDown: false,
    setIsKeyDown: (isKeyDown: boolean) => set({isKeyDown})
}))

interface interfaceCurrentSession {
    type: string,
    setType: (type: string) => void,
    name: string,
    setName: (name: string) => void
}

export const useCurrentSession = create<interfaceCurrentSession>()((set) => ({
    type: '3x3',
    setType: (type: string) => set({type}),
    name: '3x3',
    setName: (name: string) => set({name})
}))

