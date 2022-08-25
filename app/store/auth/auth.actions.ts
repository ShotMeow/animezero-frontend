import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	ILoginFields,
	IRegisterFields
} from '@/components/ui/Modal/Modal.interface'
import { AuthService } from '@/services/auth/auth.service'
import { toastr } from 'react-redux-toastr'

export const login = createAsyncThunk<
	{ token: string; login: string },
	ILoginFields
>('user/login', async ({ login, password }, thunkApi) => {
	try {
		const response = await AuthService.logIn(login, password)
		toastr.success('Авторизация', 'Вы успешно авторизовались!')
		return {
			token: response.data.token,
			login
		}
	} catch (error) {
		thunkApi.rejectWithValue(error)
		// @ts-ignore
		return error.response.data.error
	}
})

export const register = createAsyncThunk<
	{ token: string; login: string; email: string },
	IRegisterFields
>(
	'user/register',
	async ({ login, email, password, password_repeat }, thunkApi) => {
		try {
			const response = await AuthService.register(
				login,
				email,
				password,
				password_repeat
			)
			toastr.success(
				'Регистрация',
				`На почту ${email} было отправлено письмо с подтверждением.`
			)

			return {
				token: response.data.token,
				login,
				email
			}
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('user/logout', async () => {
	return {}
})
