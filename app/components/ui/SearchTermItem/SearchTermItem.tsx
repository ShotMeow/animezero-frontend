import { Dispatch, FC, SetStateAction } from 'react'
import { IFilm } from '@/app/services/films.interface'
import Link from 'next/link'
import Button from '@/app/components/ui/Button/Button'
import styles from './SearchTermItem.module.scss'
import { ratingReduceHelper } from '@/app/helpers/rating-reduce.helper'
import { ratingColorHelper } from '@/app/helpers/rating-color.helper'
import cn from 'classnames'

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
						<img src={film.poster} alt={film.title} />
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
