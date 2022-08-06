import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import styles from './Ongoing.module.scss'
import OngoingFilm from '@/components/ui/OngoingFilm/OngoingFilm'
import { IFilm } from '@/services/films.interface'

const Ongoing: FC<{ films: IFilm[] }> = ({ films }) => {
	return (
		<Layout title='AnimeZero - Онгоинги'>
			<Heading
				catalog='Онгоинги'
				title='Онгоинги'
				description='На данной странице вы можете увидеть список самых актуальных выходящих аниме.'
			/>
			<section className={styles.films}>
				{films.map(film => (
					<OngoingFilm film={film} key={film.id} />
				))}
			</section>
		</Layout>
	)
}

export default Ongoing
