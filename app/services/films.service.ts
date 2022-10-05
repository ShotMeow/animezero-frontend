import { axiosClassic } from '../api/axios';
import { IResponse } from '../interfaces/IResponse';
import { IPaginateResponse } from '@/app/interfaces/IPaginateResponse';
import { IHomePage } from '@/app/interfaces/IHomePage';
import { IQueryFilter } from '@/app/interfaces/IQueryFilter';
import { BlockTypes } from '@/app/types/BlockTypes';
import { IFilm } from '@/app/interfaces/IFilm';
import { IGenre } from '@/app/interfaces/IGenre';
import { IStatus } from '@/app/interfaces/IStatus';
import { removeEmptyHelper } from '@/app/helpers/removeEmptyHelper';

export const FilmsService = {
	async getAll(blocks: BlockTypes[]) {
		const res = await axiosClassic.get<IResponse<IHomePage>>(`/homepage?blocks=${blocks.toString()}`);
		return res.data.data;
	},

	async getById(id: number) {
		const res = await axiosClassic.get<IResponse<IFilm>>(`/film/${id}`);
		return res.data.data;
	},

	async getAllByFilter(params: IQueryFilter, filledOnly = false) {
		const newParams: IQueryFilter = filledOnly ? removeEmptyHelper(params) : params;
		const res = await axiosClassic.get<IPaginateResponse<IFilm>>(`/film`, {
			params: newParams
		});
		return res.data;
	},

	async getGenres() {
		const res = await axiosClassic.get<IResponse<IGenre[]>>(`/film/genre`);
		return [
			...[{ id: -1, name: 'Все', value: null }],
			...res.data.data
		];
	},

	async getStatuses() {
		const res = await axiosClassic.get<IResponse<IStatus[]>>(`/film/status`);
		return [
			...[{ id: -1, name: 'Все', value: null }],
			...res.data.data
		];
	}
};
