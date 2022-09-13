import styles from './ProfileCard.module.scss';
import NextLink from '@/app/components/ui/NextLink';
import { IFilm } from '@/app/interfaces/IFilm';

interface IProfileCardProps {
	film: IFilm;
}

export default function ProfileCard(props: IProfileCardProps) {
	return (
		<NextLink href={`/films/${props.film.id}`}>
			<article
				style={{ backgroundImage: `url(${props.film.poster})` }}
				className={styles.film}
			>
				<h3>
					{props.film.title} <br /> ({props.film.year})
				</h3>
			</article>
		</NextLink>
	);
}
