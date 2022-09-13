import { FC } from 'react';
import styles from '@/app/styles/Profile.module.scss';
import Aside from '@/app/components/profile/Aside';
import Layout from '@/app/layouts/Layout';
import ProfileBody from '@/app/components/ui/ProfileBody/ProfileBody';
import { useRouter } from 'next/router';
import { filmsApi } from '@/app/store/api/films.api';

const Viewed: FC = () => {
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

export default Viewed;
