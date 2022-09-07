import { IGenre } from '@/app/interfaces/IGenre'
import { IStatus } from '@/app/interfaces/IStatus'

export interface IFilter {
	genres: IGenre[]
	statuses?: IStatus[]
}
