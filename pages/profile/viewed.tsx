import { NextPageAuth } from '@/app/providers/private-route.interface';
import { useRouter } from 'next/router';
import { filmsApi } from '@/app/store/api/films.api';
import Layout from '@/app/layouts/Layout';
import styles from '@/app/styles/Profile.module.scss';
import Aside from '@/app/components/profile/Aside';
import ProfileBody from '@/app/components/ui/ProfileBody';

const ViewedPage: NextPageAuth = () => {
	const { query } = useRouter();
	const { data, isSuccess } = filmsApi.useShowViewedFilmsQuery(
		query.page !== undefined ? `?page=${query.page}` : '',
		{ refetchOnMountOrArgChange: true }
	);
	return (
		<Layout title='AnimeZero - Профиль'>
			<section className={styles.profile}>
				<Aside />
				<ProfileBody
					title='Просмотрено'
					films={data?.data}
					isSuccess={isSuccess}
					meta={data?.meta}
				/>
			</section>
		</Layout>
	);
};

ViewedPage.isOnlyUser = true;

export default ViewedPage;
