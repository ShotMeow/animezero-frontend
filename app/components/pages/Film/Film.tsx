import { FC } from 'react'
import { ICurrentFilm } from '@/services/films.interface'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/ui/Button/Button'
import { BiPlus } from 'react-icons/bi'

import styles from './Film.module.scss'
import { AiFillEye } from 'react-icons/ai'

const Film: FC<ICurrentFilm> = ({ film }) => {
	return (
		<Layout title={`AnimeZero - ${film.title}`}>
			<div className={styles.page}>
				<div className={styles.poster}>
					<img src={film.poster} alt={film.title} />
					<div>
						<Button important='secondary'>
							<BiPlus size={20} />
							Буду смотреть
						</Button>
						<Button important='secondary'>
							<AiFillEye size={20} />
						</Button>
					</div>
				</div>
				<div className={styles.content}>
					<div>
						<h2>
							{film.title} ({film.year})
						</h2>
						<p>{film.titleOrig}</p>
					</div>
					<iframe src={film.playerLink} />
					<div className={styles.desc}>
						<h3>Описание</h3>
						<p>{film.description}</p>
					</div>
					<div className={styles.about}>
						<h3>О фильме</h3>
						<ul>
							<li>
								<span>Год выпуска</span>
								<span>{film.year} г.</span>
							</li>
							<li>
								<span>Страна</span>
								<span>Япония</span>
							</li>
							<li>
								<span>Жанры</span>
								<span>
									{film.genres.map((ganre, id) =>
										ganre === film.genres[film.genres.length - 1] ? (
											<span key={id}>{ganre}</span>
										) : (
											<span key={id}>{ganre},</span>
										)
									)}
								</span>
							</li>
							<li>
								<span>Режиссер</span>
								<span>Ясухито Кикути</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Film
