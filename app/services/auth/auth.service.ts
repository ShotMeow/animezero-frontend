import { axiosClassic } from '../../api/axios'
import { IAuthData, IVerify } from '@/services/auth/auth.helper'

export const AuthService = {
	async logIn(login: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(`/user/login`, {
			login,
			password
		})
		return response.data
	},
	async register(
		login: string,
		email: string,
		password: string,
		password_repeat: string
	) {
		const response = await axiosClassic.post<IAuthData>(`/user/register`, {
			login,
			email,
			password,
			password_repeat
		})

		return response.data
	},
	async verify(query: IVerify) {
		await axiosClassic.get(`/email/verify/${query.id}/${query.hash}`, {
			params: {
				expires: query.expires,
				signature: query.signature
			}
		})
	}
}
