import { FC } from 'react'
import Button from '@/components/ui/Button/Button'
import { FiPlay } from 'react-icons/fi'
import styles from './Welcome.module.scss'
import { IFilm } from '@/services/films.interface'
import { sliceArrayHelper } from '@/helpers/slice-array.helper'
import Link from 'next/link'

const Welcome: FC<{ best: IFilm[] }> = ({ best }) => {
	const films = sliceArrayHelper(best, best.length / 3)
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
					<Button important='primary'>
						<FiPlay color='white' size={20} />
						Перейти к просмотру
					</Button>
					<div>
						<div className={styles.circle}>
							<div />
							<div />
						</div>
						<p>
							<span>1</span> смотрят
						</p>
					</div>
				</div>
			</div>
			<div className={styles.films}>
				<div>
					<div>
						{films[0].map(film => (
							<Link href={`films/${film.id}`} key={film.id}>
								<a>
									<img src={film.poster} alt={film.title} />
								</a>
							</Link>
						))}
					</div>
					<div>
						{films[1].map(film => (
							<Link href={`films/${film.id}`} key={film.id}>
								<a>
									<img src={film.poster} alt={film.title} />
								</a>
							</Link>
						))}
					</div>
					<div>
						{films[2].map(film => (
							<Link href={`films/${film.id}`} key={film.id}>
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
