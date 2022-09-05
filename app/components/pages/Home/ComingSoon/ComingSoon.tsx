import { FC } from 'react'
import { BiAtom } from 'react-icons/bi'
import Button from '@/components/ui/Button/Button'
import Subtitle from '@/components/ui/Subtitle/Subtitle'
import { IFilm } from '@/services/films.interface'
import OngoingFilm from '@/components/ui/OngoingFilm/OngoingFilm'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './ComingSoon.module.scss'
import { Autoplay } from 'swiper'
import Link from 'next/link'

const ComingSoon: FC<{ films: IFilm[] }> = ({ films }) => {
	return (
		<section className={styles.coming_soon}>
			<header>
				<Subtitle title='Онгоинги'>
					<BiAtom size={24} />
				</Subtitle>
				<Link href={'/ongoing'}>
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
							slidesPerView: 3
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
					{films.map(film => (
						<SwiperSlide key={film.id}>
							<OngoingFilm film={film} />
						</SwiperSlide>
					))}
				</Swiper>
			</footer>
		</section>
	)
}

export default ComingSoon
