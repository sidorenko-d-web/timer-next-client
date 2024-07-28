import type { IUser, TypeUserForm } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'
import { ISettingsResponse } from '@/types/settings.types'

export interface IUserResponse {
	user: IUser
	settings: ISettingsResponse
}

class UserService {
	private BASE_URL = '/user/profile'

	async getUser() {
		const response = await axiosWithAuth.get<IUserResponse>(this.BASE_URL)
		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}
}

export const userService = new UserService()