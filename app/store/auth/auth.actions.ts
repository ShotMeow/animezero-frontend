import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@/app/services/auth/auth.service';
import { ILoginFields } from '@/app/interfaces/ILoginFields';
import { IRegisterFields } from '@/app/interfaces/IRegisterFields';

export const login = createAsyncThunk<{ token: string; login: string },
	ILoginFields>('user/login',
	async ({ login, password }, thunkApi) => {
		try {
			const response = await AuthService.logIn(login, password);
			return {
				token: response.data.token,
				login
			};
		} catch (error: any) {
			thunkApi.rejectWithValue(error);

			return error.response.data.error;
		}
	});

export const register = createAsyncThunk<{ token: string; login: string; email: string },
	IRegisterFields>(
	'user/register',
	async ({ login, email, password, password_repeat }, thunkApi) => {
		try {
			const response = await AuthService.register(
				login,
				email,
				password,
				password_repeat
			);
			return {
				token: response.data.token,
				login,
				email
			};
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('user/logout', async () => {
	return {};
});
