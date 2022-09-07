import { Dispatch, SetStateAction } from 'react'
import Button from '@/app/components/ui/Button/Button'
import styles from './SearchTermItem.module.scss'
import { ratingReduceHelper } from '@/app/helpers/rating-reduce.helper'
import { ratingColorHelper } from '@/app/helpers/rating-color.helper'
import cn from 'classnames'
import NextLink from '@/app/components/ui/NextLink'
import { IFilm } from '@/app/interfaces/IFilm'

interface ISearchTermItemProps {
	film: IFilm
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export default function SearchTermItem(props: ISearchTermItemProps) {
	const rating = ratingColorHelper(props.film.rating)
	return (
		<NextLink href={`/movies/${props.film.id}`}>
			<article onClick={() => props.setIsShow(false)} className={styles.film}>
				<div>
					<img src={props.film.poster} alt={props.film.title}/>
					<div>
						<h3>{props.film.title}</h3>
						<div>
								<span
									className={cn({
										[styles.bad]: rating === 'bad',
										[styles.normal]: rating === 'normal',
										[styles.good]: rating === 'good'
									})}
								>
									{ratingReduceHelper(props.film.rating)}
								</span>
							<span>{props.film.type.name}</span>
							<span>{props.film.year}</span>
						</div>
					</div>
				</div>
				<Button important='primary'>Смотреть</Button>
			</article>
		</NextLink>
	)
}
