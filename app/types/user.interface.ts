import { ILink } from '@/components/ui/Pagination/Pagination.interface'

export interface IUser {
	id: number
	login: string
	email: string
	avatar: string
}

export interface IPaginateResponse<T> {
	data: T[]
	links: {
		first: string;
		last: string;
		prev?: string;
		next: string;
	}
	meta: {
		current_page: number;
		from: number;
		last_page: number;
		links: ILink[];
		path: string;
		per_page: number;
		to: number;
		total: number;
	}
}