import { Event } from '@/pages/_app';
import { FilmsService } from '@/app/services/films.service';
import { SortType } from '@/app/types/SortTypes';
import { removeEmptyHelper } from '@/app/helpers/removeEmptyHelper';
import { NextRouter } from 'next/router';
import { IPaginateResponse } from '@/app/interfaces/IPaginateResponse';
import { IFilm } from '@/app/interfaces/IFilm';

export default function usePaginationRoute(router: NextRouter, type: 'film' | 'serial', callback: (films: IPaginateResponse<IFilm>) => void) {
	Event.on('pagination-page', async (page: number) => {
		const films = await FilmsService.getAllByFilter({
			type: type,
			page: page,
			years: router.query?.years?.toString(),
			rating: router.query?.rating as SortType,
			genres: router.query?.genres?.toString()
		}, true);

		await router.push({
			pathname: type === 'serial' ? '/serials' : '/films',
			query: removeEmptyHelper({
				type: type,
				page: page,
				years: router.query?.years?.toString(),
				rating: router.query?.rating as SortType,
				genres: router.query?.genres?.toString()
			})
		}, undefined, { shallow: true });


		callback(films);
	});
}
