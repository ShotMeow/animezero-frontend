import { FC } from 'react'
import Button from '@/components/ui/Button/Button'
import { FiPlay } from 'react-icons/fi'
import styles from './Welcome.module.scss'
import { IFilm } from '@/services/films.interface'
import { sliceArrayHelper } from '../../../../helpers/slice-array.helper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

const Welcome: FC<{ best: IFilm[] }> = ({ best }) => {
	const films = sliceArrayHelper(best, best.length / 3)
	console.log(films)
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
					<Button>
						<FiPlay color='white' size={20} />
						Перейти к просмотру
					</Button>
					<div>
						<div className={styles.circle}>
							<div></div>
							<div></div>
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
							<a href='#' key={film.id}>
								<img src={film.poster} alt={film.title} />
							</a>
						))}
					</div>
					<div>
						{films[1].map(film => (
							<a href='#' key={film.id}>
								<img src={film.poster} alt={film.title} />
							</a>
						))}
					</div>
					<div>
						{films[2].map(film => (
							<a href='#' key={film.id}>
								<img src={film.poster} alt={film.title} />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome
