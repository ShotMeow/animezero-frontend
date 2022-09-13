import { FilmsService } from '@/app/services/films.service';
import Layout from '@/app/layouts/Layout';
import Heading from '@/app/components/ui/Heading/Heading';
import styles from '@/app/styles/pages/Ongoing.module.scss';
import OngoingFilm from '@/app/components/ui/OngoingFilm/OngoingFilm';
import { IFilm } from '@/app/interfaces/IFilm';

interface IOngoingPageProps {
	films: IFilm[];
}

export default function OngoingPage(props: IOngoingPageProps) {
	return (
		<Layout title='AnimeZero - Онгоинги'>
			<Heading
				catalog='Онгоинги'
				title='Онгоинги'
				description='На данной странице вы можете увидеть список самых актуальных выходящих аниме.'
			/>
			<section className={styles.films}>
				{props.films?.map(film => <OngoingFilm film={film} key={film.id} />)}
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	try {
		const films = await FilmsService.getAll(['ongoing']);
		return {
			props: {
				films: films.ongoing
			}
		};
	} catch (e) {
		return {
			notFound: true
		};
	}
}
