import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../api/axios'
import { TypeRootState } from '../store'
import { IVerify } from '@/services/auth/auth.helper'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Auth', 'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.token
			headers.set('Authorization', `Bearer ${token}`)
			return headers
		}
	}),
	endpoints: builder => ({
		verify: builder.query<any, IVerify>({
			query: query =>
				`email/verify/${query.id}/${query.hash}?expires=${query.expires}&signature=${query.signature}`,
			providesTags: () => [{ type: 'Auth' }]
		}),
		profile: builder.query({
			query: () => `user/info`,
			providesTags: () => [{ type: 'Profile' }]
		})
	})
})
