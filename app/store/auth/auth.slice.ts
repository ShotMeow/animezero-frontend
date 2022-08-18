import { createSlice } from '@reduxjs/toolkit'
import { IAuthInitialState } from './auth.interface'
import { login, logout, register } from './auth.actions'

const initialState: IAuthInitialState = {
	token: '',
	isLoading: false
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
				state.isLoading = false
				state.token = payload
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.token = ''
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.token = payload
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.token = ''
			})
			.addCase(logout.rejected, state => {
				state.isLoading = false
				state.token = ''
			})
	}
})
