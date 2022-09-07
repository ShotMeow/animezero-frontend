import { axiosClassic } from '../api/axios'
import { BlockTypes, IFilm, IGetAllByParams } from '@/app/services/films.interface'
import { IResponse } from '../interfaces/IResponse'

export const FilmsService = {
	async getAll(blocks: BlockTypes[]) {
		return axiosClassic.get(`/homepage?blocks=${blocks.toString()}`)
	},

	async getById(id: number) {
		const res = await axiosClassic.get<IResponse<IFilm>>(`/film/${id}`)
		return res.data.data
	},

	async getAllByFilter(params: IGetAllByParams) {
		return axiosClassic.get(`/film`, {
			params
		})
	},

	async getGenres() {
		return axiosClassic.get(`/film/genre`)
	},

	async getStatuses() {
		return axiosClassic.get(`/film/status`)
	}
}
