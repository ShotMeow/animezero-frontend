import { BiAtom } from 'react-icons/bi';
import Button from '@/app/components/ui/Button';
import Subtitle from '@/app/components/ui/Subtitle';
import OngoingFilm from '@/app/components/ui/OngoingFilm';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/ComingSoon.module.scss';
import { IFilm } from '@/app/interfaces/IFilm';
import NextLink from '@/app/components/ui/NextLink';

interface IComingSoonProps {
	films: IFilm[];
}

export default function ComingSoon(props: IComingSoonProps) {
	const breakPoints = {
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
	};

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
					breakpoints={breakPoints}
					spaceBetween={20}
					loop
				>
					{props.films?.map(film => (
						<SwiperSlide key={film.id}>
							<OngoingFilm film={film} />
						</SwiperSlide>
					))}
				</Swiper>
			</footer>
		</section>
	);
}
