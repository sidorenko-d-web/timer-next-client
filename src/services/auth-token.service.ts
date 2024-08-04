'use server'
import {cookies} from 'next/headers'

enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = async () => {
	const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = async (accessToken: string) => {
	
	cookies().set(EnumTokens.ACCESS_TOKEN, accessToken)
}

export const removefromStorage = async () => {
	cookies().delete(EnumTokens.ACCESS_TOKEN)
}
 