import { FC } from 'react'
import { BiAtom } from 'react-icons/bi'
import Button from '@/components/ui/Button/Button'
import Subtitle from '@/components/ui/Subtitle/Subtitle'
import { IFilm } from '@/services/films.interface'
import OngoingFilm from '@/components/ui/OngoingFilm/OngoingFilm'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './ComingSoon.module.scss'
import { Autoplay } from 'swiper'

const ComingSoon: FC<{ ongoing: IFilm[] }> = ({ ongoing }) => {
	return (
		<section className={styles.coming_soon}>
			<header>
				<Subtitle title='Скоро выйдет'>
					<BiAtom size={24} />
				</Subtitle>
				<Button important='primary'>Показать все</Button>
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
					{ongoing.map(film => (
						<SwiperSlide key={film.id}>
							<OngoingFilm
								title={film.title}
								imageUrl={film.poster}
								year={film.year}
								ganres={film.genres}
								minimalAge={film.minimalAge}
								key={film.id}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</footer>
		</section>
	)
}

export default ComingSoon
