import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import { api } from '@/store/api/api'
import ProfileBody from '@/components/ui/ProfileBody/ProfileBody'

const WillWatched: FC = () => {
	const { data, isSuccess } = api.useShowWantToWatchFilmsQuery()
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<ProfileBody
					title='Буду смотреть'
					films={data?.data}
					isSuccess={isSuccess}
				/>
			</section>
		</Layout>
	)
}

export default WillWatched
