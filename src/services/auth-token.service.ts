import Cookies from 'js-cookie'
import {cookies} from 'next/headers'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	
	cookies().set(EnumTokens.ACCESS_TOKEN, accessToken)
}

export const removefromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
