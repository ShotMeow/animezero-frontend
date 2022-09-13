import Layout from '@/app/layouts/Layout';
import styles from '@/app/styles/pages/Film.module.scss';
import Button from '@/app/components/ui/Button/Button';
import { useMounted } from '@/app/hooks/useMounted';
import { GetServerSidePropsContext } from 'next';
import { FilmsService } from '@/app/services/films.service';
import { filmsApi } from '@/app/store/api/films.api';
import { useAuth } from '@/app/hooks/useAuth';
import { toastr } from 'react-redux-toastr';
import { BiPlus } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';
import { IFilm } from '@/app/interfaces/IFilm';

interface IFilmPageProps {
	film: IFilm;
}

export default function FilmPage(props: IFilmPageProps) {
	const [addWatchedFilm] = filmsApi.useAddWatchedFilmsMutation();
	const [addTrackedFilm] = filmsApi.useAddTrackedFilmsMutation();
	const [addWantToWatchFilm] = filmsApi.useAddViewedFilmsMutation();


	const { token } = useAuth();

	function handleTracking() {
		addTrackedFilm(props.film.id).then(data => {
			// @ts-ignore
			if (!data.error) {
				toastr.success('Успешно', 'Фильм добавлен в "Отслеживаемое"');
			} else {
				toastr.error('Ошибка', 'Фильм уже добавлен в "Отслеживаемое"');
			}
		});
	}

	function handleWantToWatch() {
		addWantToWatchFilm(props.film.id).then(data => {
			// @ts-ignore
			if (!data.error) {
				toastr.success('Успешно', 'Фильм добавлен в "Просмотрено"');
			} else {
				toastr.error('Ошибка', 'Фильм уже добавлен в "Просмотрено"');
			}
		});
	}

	useMounted(() => {
		token && addWatchedFilm(props.film.id);
	});

	function metaSlot() {
		return (
			<>
				<meta property='og:type' content={props.film.type.name} />
				<meta property='og:image' content={props.film.poster} />
				<meta property='og:image:width' content='180' />
				<meta property='og:image:height' content='240' />
				<meta property='og:image:alt' content={props.film.title} />
				<meta property='og:description' content={props.film.description} />
				<meta property='description' content={props.film.description} />
				<meta
					property='keywords'
					content={`${props.film.title} ${props.film.titleOrig} ${props.film.type.name}`} />
			</>);
	}

	return (
		<Layout title={`AnimeZero - ${props.film.title}`} metaSlot={metaSlot}>
			<div className={styles.page}>
				<div className={styles.poster}>
					<img src={props.film.poster} alt={props.film.title} />
					{token && (
						<div>
							<Button onClick={handleTracking} important='secondary'>
								<BiPlus size={20} />
								Буду смотреть
							</Button>
							<Button onClick={handleWantToWatch} important='secondary'>
								<AiFillEye size={20} />
							</Button>
						</div>
					)}
				</div>
				<div className={styles.content}>
					<div>
						<h2>
							{props.film.title} ({props.film.year})
						</h2>
						<p>{props.film.titleOrig}</p>
					</div>
					<iframe src={props.film.playerLink} />
					<div className={styles.desc}>
						<h3>Описание</h3>
						<p>{props.film.description}</p>
					</div>
					<div className={styles.about}>
						<h3>О фильме</h3>
						<ul>
							{props.film.year && (
								<li>
									<span>Год выпуска</span>
									<span>{props.film.year} г.</span>
								</li>
							)}
							{props.film.directors[0] && (
								<li>
									<span>Режиссеры</span>
									<span>
										{props.film.directors.map(director => director.name).join(', ')}
									</span>
								</li>
							)}
							{props.film.countries[0] && (
								<li>
									<span>Страна</span>
									<span>
										{props.film.countries.map(country => country.name).join(', ')}
									</span>
								</li>
							)}
							{props.film.genres[0] && (
								<li>
									<span>Жанры</span>
									<p>{props.film.genres.map(genre => genre.name).join(', ')}</p>
								</li>
							)}
							{props.film.duration && (
								<li>
									<span>Длительность</span>
									<span>{props.film.duration} минут</span>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const film = await FilmsService.getById(Number(context.query.id));
		return {
			props: {
				film
			}
		};
	} catch (e) {
		return {
			notFound: true
		};
	}
}
