import styles from './Filter.module.scss'
import Base from '@/app/components/ui/Filter/FilterItem/Base/Base'
import { useRouter } from 'next/router'
import { rating, years } from '@/app/components/ui/Filter/Filter.data'
import { IFilter } from '@/app/interfaces/IFilter'

interface IFilterProps {
	filters: IFilter;
}

export default function Filter(props: IFilterProps) {
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
				<Base title='Жанры' elements={props.filters?.genres} type='genres' />
				<Base title='Статусы' elements={props.filters?.statuses} type='statuses' />
				<Base title='Годы выхода' elements={years} type='years' />
				<Base title='Рейтинг' elements={rating} type='rating' />
			</div>
			<button onClick={handleClick}>
				{/*<MdOutlineClose size={30} /> Сбросить фильтры*/}
			</button>
		</section>
	)
}
