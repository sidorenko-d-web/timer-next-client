import type { IUser, TypeUserForm } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'
import { ISettingsResponse } from '@/types/settings.types'

export interface IUserResponse {
	user: IUser
	settings: ISettingsResponse[]
}

class UserService {
	private BASE_URL = '/user'

	async getUser() {
		const res = await axiosWithAuth.get<IUserResponse>(this.BASE_URL)
		return res.data
	}

	async update(data: TypeUserForm) {
		const res = await axiosWithAuth.put(this.BASE_URL, data)
		return res.data
	}
}

export const userService = new UserService()