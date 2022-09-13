import { SortType } from '@/app/types/SortTypes';

export interface IQueryFilter {
	statuses?: string;
	genres?: string;
	type?: 'film' | 'serial';
	years?: string;
	rating?: SortType;
	title?: SortType;
	page?: number;
}
