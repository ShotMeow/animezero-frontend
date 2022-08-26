import { FC } from 'react'
import { IFilm } from '@/services/films.interface'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/ui/Button/Button'
import { BiPlus } from 'react-icons/bi'

import styles from './Film.module.scss'
import { AiFillBell, AiFillEye } from 'react-icons/ai'
import { api } from '@/store/api/api'
import { useAuth } from '@/hooks/useAuth'
import { Menu } from '@headlessui/react'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'
import { toastr } from 'react-redux-toastr'

const Film: FC<{ film: IFilm }> = ({ film }) => {
	const [addWatchedFilm] = api.useAddWatchedFilmsMutation()
	const [addTrackedFilm] = api.useAddTrackedFilmsMutation()
	const [addWantToWatchFilm] = api.useAddWantToWatchFilmsMutation()

	const { token } = useAuth()

	const handleTracking = () => {
		addTrackedFilm(film.id).then(data => {
			// @ts-ignore
			if (!data.error) {
				toastr.success('Успешно', 'Фильм добавлен')
			} else {
				toastr.error('Ошибка', 'Фильм уже добавлен')
			}
		})
	}

	const handleWantToWatch = () => {
		addWantToWatchFilm(film.id).then(data => {
			// @ts-ignore
			if (!data.error) {
				toastr.success('Успешно', 'Фильм добавлен')
			} else {
				toastr.error('Ошибка', 'Фильм уже добавлен')
			}
		})
	}

	const handleWatched = () => {
		addWatchedFilm(film.id).then(data => {
			// @ts-ignore
			if (!data.error) {
				toastr.success('Успешно', 'Фильм добавлен')
			} else {
				toastr.error('Ошибка', 'Фильм уже добавлен')
			}
		})
	}

	return (
		<Layout title={`AnimeZero - ${film.title}`}>
			<div className={styles.page}>
				<div className={styles.poster}>
					<img src={film.poster} alt={film.title} />
					{token && (
						<div>
							<Button onClick={handleWantToWatch} important='secondary'>
								<BiPlus size={20} />
								Буду смотреть
							</Button>
							{film.status.value === 'released' ? (
								<Button onClick={handleTracking} important='secondary'>
									<AiFillEye size={20} />
								</Button>
							) : (
								<div className={styles.menu}>
									<Menu>
										<Menu.Button>
											<IoEllipsisHorizontalSharp size={20} />
										</Menu.Button>
										<Menu.Items>
											<Menu.Item>
												{() => (
													<button onClick={handleTracking}>
														<AiFillBell size={20} />
														Отслеживать
													</button>
												)}
											</Menu.Item>
											<Menu.Item>
												{() => (
													<button onClick={handleWatched}>
														<AiFillEye size={20} />
														Просмотрено
													</button>
												)}
											</Menu.Item>
										</Menu.Items>
									</Menu>
								</div>
							)}
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
