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
				<Link href={'ongoing'}>
					<a>
						<Button important='primary'>Показать все</Button>
					</a>
				</Link>
			</header>
			<footer>
				<Swiper
					slidesPerView={'auto'}
					breakpoints={{
						1280: {
							slidesPerView: 2
						}
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
						stopOnLastSlide: true
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
