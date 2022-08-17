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
import Link from 'next/link'

const Novelties: FC<{ films: IFilm[] }> = ({ films }) => {
	return (
		<section className={styles.novelties}>
			<header>
				<Subtitle title='Новинки'>
					<MdGraphicEq size={24} />
				</Subtitle>
				<Link href={'novelties'}>
					<a>
						<Button important='primary'>Показать все</Button>
					</a>
				</Link>
			</header>
			<footer>
				<Swiper
					slidesPerView={'auto'}
					breakpoints={{
						320: {
							slidesPerView: 1
						},
						550: {
							slidesPerView: 2
						},
						768: {
							slidesPerView: 3
						},
						1024: {
							slidesPerView: 4
						},
						1280: {
							slidesPerView: 5
						},
						1536: {
							slidesPerView: 6
						}
					}}
					spaceBetween={30}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false
					}}
					loop
					modules={[Autoplay]}
				>
					{films.map(film => (
						<SwiperSlide key={film.id}>
							<FilmItem film={film} />
						</SwiperSlide>
					))}
				</Swiper>
			</footer>
		</section>
	)
}

export default Novelties
