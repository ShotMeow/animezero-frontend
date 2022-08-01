import { axiosClassic } from '../api/axios'
import { BlockTypes } from '@/services/films.interface'

export const FilmsService = {
	async getAll(blocks: BlockTypes[]) {
		return axiosClassic.get(`/homepage?blocks=${blocks.toString()}`)
	},

	async getById(id: number) {
		return axiosClassic.get(`/film/${id}`)
	}
}
