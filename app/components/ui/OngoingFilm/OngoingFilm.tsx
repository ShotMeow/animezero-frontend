import styles from './OngoingFilm.module.scss';
import Button from '@/app/components/ui/Button/Button';
import { ageCompileHelper } from '@/app/helpers/age-compile.helper';
import { filmsApi } from '@/app/store/api/films.api';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import { toastr } from 'react-redux-toastr';
import NextLink from '@/app/components/ui/NextLink';
import { IFilm } from '@/app/interfaces/IFilm';
import { memo } from 'react';

interface IOngoingFilmProps {
	film: IFilm;
}

export default memo(function OngoingFilm(props: IOngoingFilmProps) {
	const genres = props.film.genres.map(item => item.name).toString();

	const [addTrackedFilm] = filmsApi.useAddTrackedFilmsMutation();
	const token = useTypedSelector(store => store.auth.token);
	const handleClick = () => {
		if (token) {
			addTrackedFilm(props.film.id).then(data => {
				// @ts-ignore
				if (!data.error) {
					toastr.success('Успех', 'Фильм добавлен в "Отслеживаемое"');
				} else {
					toastr.error('Ошибка', 'Фильм уже добавлен в "Отслеживаемое"');
				}
			});
		} else {
			toastr.error('Ошибка', 'Вы не авторизованы');
		}
	};
	return (
		<article className={styles.ongoing_film}>
			<NextLink href={`movies/${props.film.id}`}>
				<img src={props.film.poster} alt={props.film.title} />
			</NextLink>
			<div>
				<h3>
					{props.film.title} ({props.film.year})
				</h3>
				<p className={styles.genres}>
					<span>Жанры: </span>
					<span>{genres.toString()}</span>
				</p>
				<p className={styles.ages}>
					Возрастной рейтинг: <span>{ageCompileHelper(props.film.minimalAge)}</span>
				</p>
				<Button onClick={handleClick} important='primary'>
					Отслеживать
				</Button>
			</div>
		</article>
	);
});
