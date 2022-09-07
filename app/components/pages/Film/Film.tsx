import { FC, useEffect } from 'react'
import { IFilm } from '@/services/films.interface'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/ui/Button/Button'
import { BiPlus } from 'react-icons/bi'

import styles from './Film.module.scss'
import { AiFillEye } from 'react-icons/ai'
import { useAuth } from '@/hooks/useAuth'
import { toastr } from 'react-redux-toastr'
import { filmsApi } from '@/store/api/films.api'
import Head from 'next/head'
import Image from 'next/image'

const Film: FC<{ film: IFilm }> = ({ film }) => {
	const [addWatchedFilm] = filmsApi.useAddWatchedFilmsMutation()
	const [addTrackedFilm] = filmsApi.useAddTrackedFilmsMutation()
	const [addWantToWatchFilm] = filmsApi.useAddViewedFilmsMutation()

	const { token } = useAuth()

	const handleTracking = () => {
		addTrackedFilm(film.id).then(data => {
			// @ts-ignore
			if (!data.error) {
				toastr.success('Успешно', 'Фильм добавлен в "Отслеживаемое"')
			} else {
				toastr.error('Ошибка', 'Фильм уже добавлен в "Отслеживаемое"')
			}
		})
	}

	const handleWantToWatch = () => {
		addWantToWatchFilm(film.id).then(data => {
			// @ts-ignore
			if (!data.error) {
				toastr.success('Успешно', 'Фильм добавлен в "Просмотрено"')
			} else {
				toastr.error('Ошибка', 'Фильм уже добавлен в "Просмотрено"')
			}
		})
	}

	useEffect(() => {
		token && addWatchedFilm(film.id)
	}, [])

	return (
		<Layout title={`AnimeZero - ${film.title}`}>
			<Head>
				<meta property='og:type' content={film.type.name} />
				<meta property='og:image' content={film.poster} />
				<meta property='og:image:width' content='180' />
				<meta property='og:image:height' content='240' />
				<meta property='og:image:alt' content={film.title} />
				{film.genres.map(genre => (
					<meta key={genre.id} property='og:video:tag' content={genre.name} />
				))}
				<meta property='og:description' content={film.description} />
				<meta property='description' content={film.description} />
				<meta
					property='keywords'
					content={`${film.title} ${film.titleOrig} ${film.type.name}`}
				/>
			</Head>
			<div className={styles.page}>
				<div className={styles.poster}>
					<Image width={300} height={440} src={film.poster} alt={film.title} />
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
							{film.title} ({film.year})
						</h2>
						<p>{film.titleOrig}</p>
					</div>
					<iframe src={film.playerLink} />
					<div className={styles.desc}>
						<h3>Описание</h3>
						<p>{film.description}</p>
					</div>
					<div className={styles.about}>
						<h3>О фильме</h3>
						<ul>
							{film.year && (
								<li>
									<span>Год выпуска</span>
									<span>{film.year} г.</span>
								</li>
							)}
							{film.directors[0] && (
								<li>
									<span>Режиссеры</span>
									<span>
										{film.directors.map(director => director.name).join(', ')}
									</span>
								</li>
							)}
							{film.countries[0] && (
								<li>
									<span>Страна</span>
									<span>
										{film.countries.map(country => country.name).join(', ')}
									</span>
								</li>
							)}
							{film.genres[0] && (
								<li>
									<span>Жанры</span>
									<p>{film.genres.map(genre => genre.name).join(', ')}</p>
								</li>
							)}
							{film.duration && (
								<li>
									<span>Длительность</span>
									<span>{film.duration} минут</span>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Film
