import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import { api } from '@/store/api/api'
import ProfileBody from '@/components/ui/ProfileBody/ProfileBody'
import { useRouter } from 'next/router'

const Watched: FC = () => {
	const { query } = useRouter()
	const { data, isSuccess } = api.useShowWatchedFilmsQuery(
		query.page !== undefined ? `?page=${query.page}` : ''
	)
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<ProfileBody
					title='Недавно просмотренные'
					films={data?.data}
					isSuccess={isSuccess}
				/>
			</section>
		</Layout>
	)
}

export default Watched
