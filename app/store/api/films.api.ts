import { api } from './api'
import { IFilm } from '@/services/films.interface'

export const filmsApi = api.injectEndpoints({
	endpoints: builder => ({
		getFilmsBySearchTerm: builder.query<{ data: IFilm[] }, string>({
			query: searchTerm => ({
				url: '/film/search',
				params: { query: searchTerm }
			})
		})
	})
})
