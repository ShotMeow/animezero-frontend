import 'swiper/css'
import { MdGraphicEq } from 'react-icons/md'
import styles from '../../styles/Novelties.module.scss'
import Button from '@/app/components/ui/Button/Button'
import Subtitle from '@/app/components/ui/Subtitle/Subtitle'
import FilmItem from '@/app/components/ui/FilmItem/FilmItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import NextLink from '@/app/components/ui/NextLink'
import { IFilm } from '@/app/interfaces/IFilm'

interface INoveltiesProps {
	films: IFilm[]
}

export default function Novelties(props: INoveltiesProps) {
	return (
		<section className={styles.novelties}>
			<header>
				<Subtitle title='Новинки'>
					<MdGraphicEq size={24} />
				</Subtitle>
				<NextLink href={'/novelties'}>
					<Button important='primary'>Показать все</Button>
				</NextLink>
			</header>
			<footer>
				<Swiper
					slidesPerView={'auto'}
					breakpoints={{
						320: {
							slidesPerView: 3.3
						},
						350: {
							slidesPerView: 3.8
						},
						425: {
							slidesPerView: 1.8
						},
						460: {
							slidesPerView: 2
						},
						568: {
							slidesPerView: 2.2
						},
						630: {
							slidesPerView: 2.4
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
					spaceBetween={20}
				>
					{props.films.map(film => (
						<SwiperSlide key={film.id}>
							<FilmItem film={film} />
						</SwiperSlide>
					))}
				</Swiper>
			</footer>
		</section>
	)
}
