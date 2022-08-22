import { createSlice } from '@reduxjs/toolkit'
import { IAuthInitialState } from './auth.interface'
import { login, logout, register } from './auth.actions'

const initialState: IAuthInitialState = {
	token: '',
	isLoading: false,
	user: {
		login: '',
		email: ''
	}
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.token = payload.token
				state.isLoading = false
				state.user.login = payload.login
				state.user.email = payload.email
			})
			.addCase(register.rejected, state => {
				state.token = ''
				state.isLoading = false
				state.user.login = ''
				state.user.email = ''
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.token = payload.token
				state.user.login = payload.login
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.token = ''
				state.user.login = ''
				state.user.email = ''
			})
			.addCase(logout.rejected, state => {
				state.isLoading = false
				state.token = ''
				state.user.login = ''
				state.user.email = ''
			})
	}
})
