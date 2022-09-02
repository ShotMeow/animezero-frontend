import { FC } from 'react'
import styles from '@/components/pages/Profile/Profile.module.scss'
import Aside from '@/components/pages/Profile/Aside/Aside'
import Layout from '@/components/Layout/Layout'
import ProfileBody from '@/components/ui/ProfileBody/ProfileBody'
import { useRouter } from 'next/router'
import { profileApi } from '@/store/api/profile.api'

const Tracked: FC = () => {
	const { query } = useRouter()
	const { data, isSuccess } = profileApi.useShowTrackedFilmsQuery(
		query.page !== undefined ? `?page=${query.page}` : '',
		{ refetchOnMountOrArgChange: true }
	)
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<ProfileBody
					title='Отслеживаемое'
					films={data?.data}
					isSuccess={isSuccess}
					meta={data?.meta}
				/>
			</section>
		</Layout>
	)
}

export default Tracked
