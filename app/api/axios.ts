import axios from 'axios'
import { getContentType } from '../utils/api.utils'

export const API_URL = 'http://26.225.178.228:3000/api'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})
