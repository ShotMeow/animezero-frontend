import styles from './FilmsGrid.module.scss'
import Pagination from '@/app/components/ui/Pagination/Pagination'
import FilmItem from '@/app/components/ui/FilmItem/FilmItem'
import { IFilm } from '@/app/interfaces/IFilm'
import { IMetaLink } from '@/app/interfaces/IMetaLink'

interface IFilmsGridProps {
	films: IFilm[]
	links: IMetaLink[]
}

export default function FilmsGrid(props: IFilmsGridProps) {
	return (
		<section className={styles.grid}>
			<div className={styles.container}>
				{props.films?.map(film => (
					<FilmItem film={film} key={film.id} />
				))}
			</div>
			{props.links?.length > 0 && <Pagination links={props.links} />}
		</section>
	)
}
