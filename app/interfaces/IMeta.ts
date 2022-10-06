import { IMetaLink } from '@/app/interfaces/IMetaLink';


export interface IMeta {
	current_page: number;
	from: number;
	last_page: number;
	links: IMetaLink[];
	path: string;
	per_page: number;
	to: number;
	total: number;
}
