import { create } from 'zustand'

interface ISessionStorage {
	sessionName: string
	setSessionName: (name: string) => void
	scrambleType: string
	setScrambleType: (name: string) => void
}


export const useSessionStore = create<ISessionStorage>()(set => ({
	sessionName: '',
	setSessionName: (name: string) => { 
    set({sessionName: name}) 
    window.localStorage.setItem('sessionName', name)
  },
	scrambleType: '',
	setScrambleType: (type: string) => { 
    set({scrambleType: type}) 
    window.localStorage.setItem('scrambleType', type)
  }
}))


interface IPopupStatus {
	popupStatus: boolean
	setPopupStatus: (status: boolean) => void
}

export const usePopupStatus = create<IPopupStatus>()(set => ({
  popupStatus: false,
  setPopupStatus: (status: boolean) => set({popupStatus: status})
}))

