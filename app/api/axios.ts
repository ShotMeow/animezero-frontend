import axios from 'axios'
import { getContentType } from '../utils/api.utils'

export const API_URL = 'https://api-movies.github.io/kodik'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})