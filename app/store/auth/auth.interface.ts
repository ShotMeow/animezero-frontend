import { IAuthData } from '@/services/auth/auth.helper'

export interface IAuthInitialState extends IAuthData {
	isLoading: boolean
}
