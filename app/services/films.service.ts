import { axiosClassic } from '../api/axios'
import { BlockTypes, IFilm, IGenre, IGetAllByParams, IStatus } from '@/app/services/films.interface'
import { IResponse } from '../interfaces/IResponse'
import { IPaginateResponse } from '@/app/types/user.interface'

export const FilmsService = {
	async getAll(blocks: BlockTypes[]) {
		return axiosClassic.get(`/homepage?blocks=${blocks.toString()}`)
	},

	async getById(id: number) {
		const res = await axiosClassic.get<IResponse<IFilm>>(`/film/${id}`)
		return res.data.data
	},

	async getAllByFilter(params: IGetAllByParams, filledOnly = false) {
		const newParams: IGetAllByParams = filledOnly ? Object
			.fromEntries(
				Object
					.entries(params).filter(([, v]) => v != undefined && v != '' && v !== null)
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
		return res.data.data;
	}
}
