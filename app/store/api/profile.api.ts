import { api } from '@/app/store/api/api';
import { IUser } from '@/app/interfaces/IUser';

export const profileApi = api.injectEndpoints({
	endpoints: builder => ({
		getProfileData: builder.query<{ data: IUser }, string>({
			query: () => 'user/info'
		}),
		uploadAvatar: builder.mutation<void, string>({
			query: image => ({
				url: 'user/avatar',
				method: 'POST',
				body: { image }
			})
		})
	})
});
