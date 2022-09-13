import { NextPageAuth } from '@/app/providers/private-route.interface';
import { useRouter } from 'next/router';
import { filmsApi } from '@/app/store/api/films.api';
import Layout from '@/app/layouts/Layout';
import styles from '@/app/styles/Profile.module.scss';
import Aside from '@/app/components/profile/Aside';
import ProfileBody from '@/app/components/ui/ProfileBody';

const TrackedPage: NextPageAuth = () => {
	const { query } = useRouter();
	const { data, isSuccess } = filmsApi.useShowTrackedFilmsQuery(
		query.page !== undefined ? `?page=${query.page}` : '',
		{ refetchOnMountOrArgChange: true }
	);
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
	);
};

TrackedPage.isOnlyUser = true;

export default TrackedPage;
