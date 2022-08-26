import { FC } from 'react'
import styles from './FilmsGrid.module.scss'
import Pagination from '@/components/ui/Pagination/Pagination'
import { IFilm } from '@/services/films.interface'
import { ILink } from '@/components/ui/Pagination/Pagination.interface'
import FilmItem from '@/components/ui/FilmItem/FilmItem'

const FilmsGrid: FC<{ films: IFilm[]; links: ILink[] }> = ({
															   films,
															   links
														   }) => {
	return (
		<section className={styles.grid}>
			<div className={styles.container}>
				{films.map(film => (
					<FilmItem film={film} key={film.id} />
				))}
			</div>
			<Pagination links={links} />
		</section>
	)
}

export default FilmsGrid
