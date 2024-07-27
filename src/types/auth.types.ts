export interface ILoginform {
	email: string
	password: string
}

export interface IRegform {
  nick: string,
	email: string
	password: string
}

export interface IUser {
	id: number
	nick?: string
	email?: string
  role?: string

}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }