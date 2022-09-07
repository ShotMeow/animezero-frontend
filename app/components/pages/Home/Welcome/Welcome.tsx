import { FC } from 'react'
import Button from '@/app/components/ui/Button/Button'
import { FiPlay } from 'react-icons/fi'
import styles from './Welcome.module.scss'
import { IFilm } from '@/app/services/films.interface'
import { sliceArrayHelper } from '@/app/helpers/slice-array.helper'
import Link from 'next/link'
import { randomFilmHelper } from '@/app/helpers/random-film.helper'

const Welcome: FC<{ films: IFilm[] }> = ({ films }) => {
	const filmsArray: IFilm[][] = sliceArrayHelper(films, films.length / 3)
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
					<Link href={`/movies/${randomFilmHelper(films)}`}>
						<a>
							<Button important='primary'>
								<FiPlay color='white' size={20} />
								Перейти к просмотру
							</Button>
						</a>
					</Link>
				</div>
			</div>
			<div className={styles.films}>
				<div>
					<div>
						{filmsArray[0].map(film => (
							<Link href={`movies/${film.id}`} key={film.id}>
								<a>
									<img src={film.poster} alt={film.title} />
								</a>
							</Link>
						))}
					</div>
					<div>
						{filmsArray[1].map(film => (
							<Link href={`movies/${film.id}`} key={film.id}>
								<a>
									<img src={film.poster} alt={film.title} />
								</a>
							</Link>
						))}
					</div>
					<div>
						{filmsArray[2].map(film => (
							<Link href={`movies/${film.id}`} key={film.id}>
								<a>
									<img src={film.poster} alt={film.title} />
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome
