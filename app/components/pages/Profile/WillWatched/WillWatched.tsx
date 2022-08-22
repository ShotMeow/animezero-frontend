import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import { api } from '@/store/api/api'
import FilmItem from '@/components/ui/FilmItem/FilmItem'

const WillWatched: FC = () => {
	const { data } = api.useShowWantToWatchFilmsQuery()
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<div>
					<h2>Буду смотреть</h2>
					<div>
						{data &&
							data.data.map(film => <FilmItem key={film.id} film={film} />)}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default WillWatched
