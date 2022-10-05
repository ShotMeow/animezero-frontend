import styles from '@/app/styles/ui/Filter.module.scss';
import FilterItem from '@/app/components/ui/Filter/FilterItem';
import { rating, years } from '@/app/components/ui/Filter/Filter.data';
import { IFilter } from '@/app/interfaces/IFilter';
import { Event } from '@/pages/_app';
import { IFilterSelected } from '@/app/interfaces/IFilterSelected';
import { useState } from 'react';

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

		Event.emit('film-update', selectedFilters);
	});

	return (
		<section className={styles.filter}>
			<h4>Фильтры</h4>
			<div>
				<FilterItem title='Жанры' elements={props.filters?.genres} type='genres' />
				<FilterItem title='Статусы' elements={props.filters?.statuses} type='statuses' />
				<FilterItem title='Годы выхода' elements={years} type='years' />
				<FilterItem title='Рейтинг' elements={rating} type='rating' />
			</div>
			<button onClick={resetFilters}>
				Сбросить фильтры
			</button>
		</section>
	);
}
