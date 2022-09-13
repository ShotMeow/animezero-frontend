import { ILink } from '@/app/interfaces/ILink';
import { IMeta } from '@/app/interfaces/IMeta';

export interface IPaginateResponse<T> {
	data: T[];
	links: ILink;
	meta: IMeta;
}
