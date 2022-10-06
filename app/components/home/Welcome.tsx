import Button from '@/app/components/ui/Button';
import { FiPlay } from 'react-icons/fi';
import styles from '../../styles/Welcome.module.scss';
import NextLink from '@/app/components/ui/NextLink';
import { IFilm } from '@/app/interfaces/IFilm';

interface IWelcomeProps {
	films: IFilm[];
}

export default function Welcome(props: IWelcomeProps) {

	const filmsArray: IFilm[][] = [
		props.films.slice(0, 4),
		props.films.slice(4, 8),
		props.films.slice(8, 12)
	];

	return (
		<section className={styles.welcome}>
			<div className={styles.info}>
				<div className={styles.bread}>
					<strong>Anime Zero</strong>
					<span>/</span>
					<span>Каталог</span>
				</div>
				<div className={styles.about}>
					<h1>
						Смотрите онлайн <br /> аниме на Anime<span>Zero</span>
					</h1>
					<p>
						Смотрите аниме в хорошем качестве <br /> только у нас!
					</p>
				</div>
				<div className={styles.action}>
					<NextLink href={`/serials`}>
						<Button important='primary'>
							<FiPlay color='white' size={20} />
							Перейти к просмотру
						</Button>
					</NextLink>
				</div>
			</div>
			<div className={styles.films}>
				{filmsArray.map((films, index) => (
					<div className={styles.column} key={index}>
						{films.map(film =>
							(<NextLink href={`movies/${film.id}`} key={film.id}>
								<img src={film.poster} alt={film.title} />
							</NextLink>))
						}
					</div>)
				)}
			</div>
		</section>
	);
}
