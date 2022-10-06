import { IFilm } from '@/app/interfaces/IFilm';

export interface IHomePage {
	best: IFilm[];
	newest: IFilm[];
	ongoing: IFilm[];
	recommended: IFilm[];
}
