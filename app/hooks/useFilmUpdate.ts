import { Event } from '@/pages/_app';
import { FilmsService } from '@/app/services/films.service';
import { removeEmptyHelper } from '@/app/helpers/removeEmptyHelper';
import { NextRouter } from 'next/router';
import { IPaginateResponse } from '@/app/interfaces/IPaginateResponse';
import { IFilm } from '@/app/interfaces/IFilm';

export function useFilmUpdate(router: NextRouter, type: 'film' | 'serial', callback: (films: IPaginateResponse<IFilm>) => void) {
	Event.on('film-update', async (data) => {
		const films = await FilmsService.getAllByFilter({
			type: type,
			page: 1,
			years: data?.years,
			rating: data?.rating,
			genres: data?.genres
		}, true);

		await router.push({
			pathname: type === 'serial' ? '/serials' : '/films',
			query: removeEmptyHelper({
				type: type,
				page: 1,
				years: data?.years,
				rating: data?.rating,
				genres: data?.genres
			})
		}, undefined, { shallow: true });

		callback(films);
	});
}
