import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../api/axios'
import { TypeRootState } from '../store'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.token
			token && headers.set('Authorization', `Bearer ${token}`)
			headers.set('Accept', 'application/json')
			return headers
		}
	}),
	endpoints: builder => ({
		verify: builder.mutation<void, string>({
			query: code => ({
				url: `email/verify`,
				method: 'POST',
				body: { code }
			})
		}),
		resend: builder.mutation<void, void>({
			query: () => ({
				url: `email/resend`,
				method: 'POST'
			})
		}),
		logout: builder.mutation<void, void>({
			query: () => 'user/logout'
		})
	})
})
