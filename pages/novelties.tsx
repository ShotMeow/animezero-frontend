import { FilmsService } from '@/app/services/films.service';
import { IFilm } from '@/app/interfaces/IFilm';
import Layout from '@/app/layouts/Layout';
import Heading from '@/app/components/ui/Heading';
import styles from '@/app/styles/Novelties.module.scss';
import FilmItem from '@/app/components/ui/FilmItem';

interface INoveltiesPageProps {
	films: IFilm[];
}

export default function NoveltiesPage(props: INoveltiesPageProps) {
	return (
		<Layout title='AnimeZero - Новинки'>
			<Heading
				catalog='Новинки'
				title='Новинки'
				description='На данной странице вы можете увидеть аниме, недавно появившиеся в нашем кинотеатре.'
			/>
			<section className={styles.films}>
				{props.films?.map(film => <FilmItem film={film} key={film.id} />)}
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	try {
		const films = await FilmsService.getAll(['newest']);
		return {
			props: {
				films: films.newest
			}
		};
	} catch (e) {
		return {
			notFound: true
		};
	}
}
