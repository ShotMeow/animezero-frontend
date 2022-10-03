import { api } from './api';
import { IPaginateResponse } from '@/app/interfaces/IPaginateResponse';
import { IFilm } from '@/app/interfaces/IFilm';
import { IResponse } from '@/app/interfaces/IResponse';

export const filmsApi = api.injectEndpoints({
	endpoints: builder => ({
		getFilmsBySearchTerm: builder.query<IResponse<IFilm[]>, string>({
			query: searchTerm => ({
				url: '/film/search',
				params: { query: searchTerm }
			})
		}),
		showWatchedFilms: builder.query<IPaginateResponse<IFilm>, string>({
			query: page => `film/watched${page}`
		}),
		addWatchedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/watched',
				method: 'POST',
				body: { film_id }
			})
		}),
		deleteWatchedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/watched/${film_id}`,
				method: 'DELETE'
			})
		}),
		showTrackedFilms: builder.query<IPaginateResponse<IFilm>, string>({
			query: page => `film/tracked${page}`
		}),
		addTrackedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/tracked',
				method: 'POST',
				body: { film_id }
			})
		}),
		deleteTrackedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/tracked/${film_id}`,
				method: 'DELETE'
			})
		}),
		showViewedFilms: builder.query<IPaginateResponse<IFilm>, string>({
			query: page => `film/want-to-watch${page}`
		}),
		addViewedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: 'film/want-to-watch',
				method: 'POST',
				body: { film_id }
			})
		}),
		deleteViewedFilms: builder.mutation<void, number>({
			query: film_id => ({
				url: `film/want-to-watch/${film_id}`,
				method: 'DELETE'
			})
		})
	})
});
