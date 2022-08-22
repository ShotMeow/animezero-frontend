import { FC } from 'react'
import { IFilm } from '@/services/films.interface'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'
import styles from './SearchTermItem.module.scss'
import { ratingReduceHelper } from '@/helpers/rating-reduce.helper'
import { ratingColorHelper } from '@/helpers/rating-color.helper'
import cn from 'classnames'

const SearchTermItem: FC<{ film: IFilm }> = ({ film }) => {
	const rating = ratingColorHelper(film.rating)
	return (
		<Link href={`/films/${film.id}`}>
			<a>
				<article className={styles.film}>
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
