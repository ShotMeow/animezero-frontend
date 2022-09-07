import { Dispatch, FC, SetStateAction } from 'react'
import { IFilm } from '@/services/films.interface'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'
import styles from './SearchTermItem.module.scss'
import { ratingReduceHelper } from '@/helpers/rating-reduce.helper'
import { ratingColorHelper } from '@/helpers/rating-color.helper'
import cn from 'classnames'
import Image from 'next/image'

const SearchTermItem: FC<{
	film: IFilm
	setIsShow: Dispatch<SetStateAction<boolean>>
}> = ({ film, setIsShow }) => {
	const rating = ratingColorHelper(film.rating)
	return (
		<Link href={`/movies/${film.id}`}>
			<a>
				<article onClick={() => setIsShow(false)} className={styles.film}>
					<div>
						<div>
							<Image
								width={40}
								height={60}
								src={film.poster}
								alt={film.title}
							/>
						</div>
						<div>
							<h3>{film.title}</h3>
							<div>
								<span
									className={cn({
										[styles.bad]: rating === 'bad',
										[styles.normal]: rating === 'normal',
										[styles.good]: rating === 'good'
									})}
								>
									{ratingReduceHelper(film.rating)}
								</span>
								<span>{film.type.name}</span>
								<span>{film.year}</span>
							</div>
						</div>
					</div>
					<Button important='primary'>Смотреть</Button>
				</article>
			</a>
		</Link>
	)
}

export default SearchTermItem
