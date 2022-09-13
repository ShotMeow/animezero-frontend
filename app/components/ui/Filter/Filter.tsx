import styles from './Filter.module.scss';
import Base from '@/app/components/ui/Filter/FilterItem/Base/Base';
import { rating, years } from '@/app/components/ui/Filter/Filter.data';
import { IFilter } from '@/app/interfaces/IFilter';
import { Event } from '@/pages/_app';
import { IFilterSelected } from '@/app/interfaces/IFilterSelected';
import { useEffect, useState } from 'react';

interface IFilterProps {
	filters: IFilter;
}

export default function Filter(props: IFilterProps) {
	const [selectedFilters, setSelectedFilters] = useState<IFilterSelected>({});

	function resetFilters() {
		setSelectedFilters({});
	}

	Event.on('filter-changed', (data) => {
		setSelectedFilters({
			...selectedFilters,
			[data.type]: data.value
		});
	});

	useEffect(() => {
		Event.emit('film-update', selectedFilters);
	}, [selectedFilters]);

	return (
		<section className={styles.filter}>
			<h4>Фильтры</h4>
			<div>
				<Base title='Жанры' elements={props.filters?.genres} type='genres' />
				<Base title='Статусы' elements={props.filters?.statuses} type='statuses' />
				<Base title='Годы выхода' elements={years} type='years' />
				<Base title='Рейтинг' elements={rating} type='rating' />
			</div>
			<button onClick={resetFilters}>
				Сбросить фильтры
			</button>
		</section>
	);
}
