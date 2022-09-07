import { axiosClassic } from '../api/axios'
import { IResponse } from '../interfaces/IResponse'
import { IPaginateResponse } from '@/app/interfaces/IPaginateResponse'
import { IHomePage } from '@/app/interfaces/IHomePage'
import { IQueryFilter } from '@/app/interfaces/IQueryFilter'
import { BlockTypes } from '@/app/types/BlockTypes'
import { IFilm } from '@/app/interfaces/IFilm'
import { IGenre } from '@/app/interfaces/IGenre'
import { IStatus } from '@/app/interfaces/IStatus'

export const FilmsService = {
	async getAll(blocks: BlockTypes[]) {
		const res = await axiosClassic.get<IResponse<IHomePage>>(`/homepage?blocks=${blocks.toString()}`)
		return res.data.data
	},

	async getById(id: number) {
		const res = await axiosClassic.get<IResponse<IFilm>>(`/film/${id}`)
		return res.data.data
	},

	async getAllByFilter(params: IQueryFilter, filledOnly = false) {
		const newParams: IQueryFilter = filledOnly ? Object
			.fromEntries(
				Object
					.entries(params).filter(([, v]) => v != undefined && v != '' && v !== null && v !== 'undefined')
			) : params

		const res = await axiosClassic.get<IPaginateResponse<IFilm>>(`/film`, {
			params: newParams
		})
		return res.data
	},

	async getGenres() {
		const res = await axiosClassic.get<IResponse<IGenre>>(`/film/genre`)
		return res.data.data
	},

	async getStatuses() {
		const res = await axiosClassic.get<IResponse<IStatus>>(`/film/status`)
		return res.data.data
	}
}
