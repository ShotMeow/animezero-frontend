import { BiAtom } from 'react-icons/bi'
import Button from '@/app/components/ui/Button/Button'
import Subtitle from '@/app/components/ui/Subtitle/Subtitle'
import OngoingFilm from '@/app/components/ui/OngoingFilm/OngoingFilm'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../../styles/ComingSoon.module.scss'
import { Autoplay } from 'swiper'
import { IFilm } from '@/app/interfaces/IFilm'
import NextLink from '@/app/components/ui/NextLink'

interface IComingSoonProps {
	films: IFilm[]
}

export default function ComingSoon(props: IComingSoonProps) {
	return (
		<section className={styles.comingSoon}>
			<header>
				<Subtitle title='Онгоинги'>
					<BiAtom size={24} />
				</Subtitle>
				<NextLink href={'/ongoing'}>
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
							slidesPerView: 2
						},
						460: {
							slidesPerView: 1.2
						},
						768: {
							slidesPerView: 2
						}
					}}
					spaceBetween={20}
					autoplay={{
						delay: 6000,
						disableOnInteraction: false
					}}
					loop
					modules={[Autoplay]}
				>
					{props.films?.map(film => (
						<SwiperSlide key={film.id}>
							<OngoingFilm film={film} />
						</SwiperSlide>
					))}
				</Swiper>
			</footer>
		</section>
	)
}
