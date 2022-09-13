import { axiosClassic } from '@/app/api/axios';
import { IResponse } from '@/app/interfaces/IResponse';

export const AuthService = {
	async logIn(login: string, password: string) {
		const response = await axiosClassic.post<IResponse<{ token: string }>>(`/user/login`, {
			login,
			password
		});
		return response.data;
	},
	async register(login: string, email: string, password: string, password_repeat: string) {
		const response = await axiosClassic.post<IResponse<{ token: string }>>(`/user/register`, {
			login,
			email,
			password,
			password_repeat
		});

		return response.data;
	}
};
