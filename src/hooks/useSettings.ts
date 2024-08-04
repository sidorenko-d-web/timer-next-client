import { useQuery } from '@tanstack/react-query'

import { useSettingsStorage } from './storages'
import { userService } from '@/services/user.service'
import { useEffect } from 'react'

export function useSettings() {
	const { setIsTimeShowed, setSettingsId } = useSettingsStorage()

	const { data } = useQuery({
		queryKey: ['settings'],
		queryFn: async () => await userService.getUser()
	})
  
  useEffect(() => {
    if(data) {
      setIsTimeShowed(data.settings[0].isTimeShowed) //here is potential to many profiles of settings
      setSettingsId(data.settings[0].id)
    }
  }, [data])
}
