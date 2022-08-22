import { axiosClassic } from '../api/axios'
import { BlockTypes, IGetAllByParams } from '@/services/films.interface'

export const FilmsService = {
	async getAll(blocks: BlockTypes[]) {
		return axiosClassic.get(`/homepage?blocks=${blocks.toString()}`)
	},

	async getById(id: number) {
		return axiosClassic.get(`/film/${id}`)
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
