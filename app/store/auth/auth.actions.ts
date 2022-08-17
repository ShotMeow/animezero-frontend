import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData } from '@/services/auth/auth.helper'
import {
	ILoginFields,
	IRegisterFields
} from '@/components/ui/Modal/Modal.interface'
import { AuthService } from '@/services/auth/auth.service'
import { toastError } from '@/utils/api.utils'
import { toastr } from 'react-redux-toastr'

export const login = createAsyncThunk<IAuthData, ILoginFields>(
	'user/login',
	async ({ login, password }, thunkApi) => {
		try {
			const response = await AuthService.logIn(login, password)
			toastr.success('Авторизация', 'Вы успешно авторизовались!')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const register = createAsyncThunk<IAuthData, IRegisterFields>(
	'user/register',
	async ({ login, email, password, repeat_password }, thunkApi) => {
		try {
			const response = await AuthService.register(
				login,
				email,
				password,
				repeat_password
			)
			toastr.success(
				'Регистрация',
				`На почту ${email} было отправлено письмо с подтверждением.`
			)
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('user/logout', async () => {
	return {}
})
