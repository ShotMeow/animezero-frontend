import { FC } from 'react'
import styles from './Filter.module.scss'
import { MdOutlineClose } from 'react-icons/md'
import { IFilter } from '@/app/services/films.interface'
import Base from '@/app/components/ui/Filter/FilterItem/Base/Base'
import { useRouter } from 'next/router'
import { rating, years } from '@/app/components/ui/Filter/Filter.data'

const Filter: FC<{ filters: IFilter }> = ({ filters }) => {
	const router = useRouter()
	const handleClick = () => {
		const path = router.pathname
		const query = router.query
		delete query.genres
		delete query.statuses
		router.push({
			pathname: path,
			query: query
		})
	}

	return (
		<section className={styles.filter}>
			<h4>Фильтры</h4>
			<div>
				<Base title='Жанры' elements={filters.genres} type='genres' />
				{filters.statuses && (
					<Base title='Статус' elements={filters.statuses} type='statuses' />
				)}
				<Base title='Годы выхода' elements={years} type='years' />
				<Base title='Рейтинг' elements={rating} type='rating' />
			</div>
			<button onClick={handleClick}>
				<MdOutlineClose size={30} /> Сбросить фильтры
			</button>
		</section>
	)
}

export default Filter
