import axios from 'axios'
import { getContentType } from '@/app/utils/api.utils'

export const axiosClassic = axios.create({
	baseURL: 'https://animezero.ru/api',
	headers: getContentType()
})
