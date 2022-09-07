import { FC } from 'react'
import styles from '@/app/components/pages/Profile/Profile.module.scss'
import Aside from '@/app/components/pages/Profile/Aside/Aside'
import Layout from '@/app/components/Layout/Layout'
import ProfileBody from '@/app/components/ui/ProfileBody/ProfileBody'
import { useRouter } from 'next/router'
import { filmsApi } from '@/app/store/api/films.api'

const Tracked: FC = () => {
	const { query } = useRouter()
	const { data, isSuccess } = filmsApi.useShowTrackedFilmsQuery(
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
