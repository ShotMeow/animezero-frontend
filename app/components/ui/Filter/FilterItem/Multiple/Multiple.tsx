import { FC, useLayoutEffect, useRef, useState } from 'react';
import styles from '@/app/components/ui/Filter/FilterItem/FilterItem.module.scss';
import { Listbox } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import cn from 'classnames';
import { IFilterItem } from '@/app/components/ui/Filter/FilterItem/FilterItem.interface';
import { useRouter } from 'next/router';

const Multiple: FC<IFilterItem> = ({ type, title, elements }) => {
	const [selected, setSelected] = useState([elements[0], elements[1]]);
	const router = useRouter();

	const firstUpdate = useRef<boolean>(true);
	useLayoutEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
		} else {
			const path = router.pathname;
			const query = router.query;
			query[`${type}`] = selected.map((item: any) => item.value).join(',');
			router.push({
				pathname: path,
				query: query
			});
		}
	}, [selected]);
	return (
		<article className={styles.filter}>
			<Listbox value={selected} onChange={setSelected} multiple>
				<Listbox.Label>{title}:</Listbox.Label>
				<Listbox.Button>
					<span>
						<span>
							{selected.map((element: any) => element.name).join(', ')}
						</span>
					</span>
					<span>
						<IoIosArrowDown />
					</span>
				</Listbox.Button>
				<Listbox.Options>
					{elements.map(element => (
						<Listbox.Option key={element.id} value={element}>
							{({ selected }) => (
								<li
									className={cn(styles.element, { [styles.active]: selected })}
								>
									{element.name}
								</li>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</article>
	);
};

export default Multiple;
