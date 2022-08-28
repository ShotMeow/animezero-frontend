import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import { api } from '@/store/api/api'
import ProfileBody from '@/components/ui/ProfileBody/ProfileBody'
import { useRouter } from 'next/router'

const WillWatched: FC = () => {
	const { query } = useRouter()
	const { data, isSuccess } = api.useShowWantToWatchFilmsQuery(
		query.page !== undefined ? `?page=${query.page}` : ''
	)
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<ProfileBody
					title='Буду смотреть'
					films={data?.data}
					isSuccess={isSuccess}
					pagination={data?.meta.links}
				/>
			</section>
		</Layout>
	)
}

export default WillWatched
