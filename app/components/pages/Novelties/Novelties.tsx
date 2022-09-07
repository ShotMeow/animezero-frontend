import { FC } from 'react'
import Layout from '@/app/components/Layout/Layout'
import styles from './Novelties.module.scss'
import Heading from '@/app/components/ui/Heading/Heading'
import { IFilm } from '@/app/services/films.interface'
import FilmItem from '@/app/components/ui/FilmItem/FilmItem'

const Novelties: FC<{ films: IFilm[] }> = ({ films }) => {
	return (
		<Layout title='AnimeZero - Новинки'>
			<Heading
				catalog='Новинки'
				title='Новинки'
				description='На данной странице вы можете увидеть аниме, недавно появившиеся в нашем кинотеатре.'
			/>
			<section className={styles.films}>
				{films.length &&
					films.map(film => <FilmItem film={film} key={film.id} />)}
			</section>
		</Layout>
	)
}

export default Novelties
