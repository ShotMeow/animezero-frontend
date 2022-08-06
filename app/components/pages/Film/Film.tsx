import { FC } from 'react'
import { IFilm } from '@/services/films.interface'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/ui/Button/Button'
import { BiPlus } from 'react-icons/bi'

import styles from './Film.module.scss'
import { AiFillEye } from 'react-icons/ai'

const Film: FC<{ film: IFilm }> = ({ film }) => {
	return (
		<Layout title={`AnimeZero - ${film.title}`}>
			<div className={styles.page}>
				<div className={styles.poster}>
					<img src={film.poster} alt={film.title} />
					<div>
						<Button important='secondary'>
							<BiPlus size={20} />
							Буду смотреть
						</Button>
						<Button important='secondary'>
							<AiFillEye size={20} />
						</Button>
					</div>
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
							<li>
								<span>Год выпуска</span>
								<span>{film.year} г.</span>
							</li>
							<li>
								<span>Режиссеры</span>
								<span>
									{film.directors.map(director => director.name).join(', ')}
								</span>
							</li>
							<li>
								<span>Страна</span>
								<span>
									{film.countries.map(country => country.name).join(', ')}
								</span>
							</li>
							<li>
								<span>Жанры</span>
								<p>{film.genres.map(genre => genre.name).join(', ')}</p>
							</li>
							<li>
								<span>Длительность</span>
								<span>{film.duration} минут</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Film
