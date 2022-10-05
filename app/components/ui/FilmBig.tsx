import styles from '@/app/styles/ui/FilmBig.module.scss';
import Button from '@/app/components/ui/Button';
import Tag from '@/app/components/ui/Tag';
import NextLink from '@/app/components/ui/NextLink';
import { IFilm } from '@/app/interfaces/IFilm';

interface IFilmBigProps {
	film: IFilm;
}

export default function FilmBig(props: IFilmBigProps) {
	return (
		<NextLink href={`/movies/${props.film.id}`}>
			<article
				className={styles.film_big}
				style={{ backgroundImage: `url(${props.film.poster})` }}
			>
				<div className={styles.tags}>
					<div>
						<Tag title='Топ-100' />
						<Tag title='Детям' />
					</div>
					<Tag title={props.film.rating} black={true} bold={true} />
				</div>
				<div className={styles.about}>
					<div>
						<h3>{props.film.title}</h3>
						<p>{props.film.description}</p>
					</div>
					<Button important='primary'>Смотреть</Button>
				</div>
			</article>
		</NextLink>
	);
}
