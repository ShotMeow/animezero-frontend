import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'

const Watched: FC = () => {
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<div>
					<h2>Недавно просмотренные</h2>
				</div>
			</section>
		</Layout>
	)
}

export default Watched
