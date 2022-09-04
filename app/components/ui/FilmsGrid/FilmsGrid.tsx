import { FC } from 'react'
import styles from './FilmsGrid.module.scss'
import Pagination from '@/components/ui/Pagination/Pagination'
import { IFilm } from '@/services/films.interface'
import FilmItem from '@/components/ui/FilmItem/FilmItem'
import { IMetaLink } from '@/types/user.interface'

const FilmsGrid: FC<{ films: IFilm[]; links: IMetaLink[] }> = ({
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
