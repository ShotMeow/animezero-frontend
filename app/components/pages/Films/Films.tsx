import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import { IFilm, IFilter } from '@/services/films.interface'
import styles from './Films.module.scss'
import FilmItem from '@/components/ui/FilmItem/FilmItem'
import Pagination from '@/components/ui/Pagination/Pagination'
import { ILink } from '@/components/ui/Pagination/Pagination.interface'
import Filter from '@/components/ui/Filter/Filter'

const Films: FC<{ films: IFilm[]; links: ILink[]; filters: IFilter }> = ({
	films,
	links,
	filters
}) => {
	return (
		<Layout title='AnimeZero - Фильмы'>
			<Heading
				catalog='Фильмы'
				title='Фильмы смотреть онлайн'
				description='В нашем каталоге вы найдете аниме-фильмы любых жанров. Не упустите возможность смотреть фильмы онлайн бесплатно без регистрации.'
			/>
			<Filter filters={filters} />
			<section className={styles.films}>
				<div className={styles.container}>
					{films.map(film => (
						<FilmItem film={film} key={film.id} />
					))}
				</div>
				<Pagination links={links} />
			</section>
		</Layout>
	)
}

export default Films
