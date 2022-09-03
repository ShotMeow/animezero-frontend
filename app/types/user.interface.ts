export interface IUser {
	id: number
	login: string
	email: string
	avatar: string
}

export interface IMeta {
	current_page: number
	from: number
	last_page: number
	links: IMetaLink[]
	path: string
	per_page: number
	to: number
	total: number
}

export interface IMetaLink {
	url?: string
	label: string
	active: boolean
}

export interface ILink {
	first: string
	last: string
	prev?: string
	next: string
}

export interface IPaginateResponse<T> {
	data: T[]
	links: ILink
	meta: IMeta
}

export interface IUserUpdate {
	login?: string
	email?: string
	password?: string
	password_repeat?: string
	code?: string
}
