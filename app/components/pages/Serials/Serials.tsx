import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import { IFilm, IFilter } from '@/services/films.interface'
import styles from './Serials.module.scss'
import FilmItem from '@/components/ui/FilmItem/FilmItem'
import { ILink } from '@/components/ui/Pagination/Pagination.interface'
import Pagination from '@/components/ui/Pagination/Pagination'
import Filter from '@/components/ui/Filter/Filter'

const Serials: FC<{ serials: IFilm[]; links: ILink[]; filters: IFilter }> = ({
	serials,
	links,
	filters
}) => {
	return (
		<Layout title='AnimeZero - Сериалы'>
			<Heading
				catalog='Сериалы'
				title='Сериалы смотреть онлайн'
				description='В нашем каталоге вы найдете сериалы любых жанров. Не упустите возможность смотреть сериалы онлайн бесплатно без регистрации.'
			/>
			<Filter filters={filters} />
			<section className={styles.serials}>
				<div className={styles.container}>
					{serials.map(serial => (
						<FilmItem film={serial} key={serial.id} />
					))}
				</div>
				<Pagination links={links} />
			</section>
		</Layout>
	)
}

export default Serials
