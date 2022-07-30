import { FC } from 'react'
import { MdGraphicEq } from 'react-icons/md'
import styles from './Novelties.module.scss'
import Button from '@/components/ui/Button/Button'
import Subtitle from '@/components/ui/Subtitle/Subtitle'
import FilmItem from '@/components/ui/FilmItem/FilmItem'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'
import { IFilm } from '@/services/films.interface'

const Novelties: FC<{ newest: IFilm[] }> = ({ newest }) => {
	return (
		<section className={styles.novelties}>
			<header>
				<Subtitle title='Новинки'>
					<MdGraphicEq size={24} />
				</Subtitle>
				<Button>Показать все</Button>
			</header>
			<footer>
				<Swiper
					slidesPerView={6}
					spaceBetween={30}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
						stopOnLastSlide: true
					}}
					loop
					modules={[Autoplay]}
				>
					{newest.map(film => (
						<SwiperSlide key={film.id}>
							<FilmItem
								title={film.title}
								image_url={film.poster}
								grade={film.rating}
								year={film.year}
								genre={film.genres[0]}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</footer>
		</section>
	)
}

export default Novelties
