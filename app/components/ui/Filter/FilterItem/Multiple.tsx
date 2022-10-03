import { useLayoutEffect, useRef, useState } from 'react';
import styles from '@/app/styles/ui/FilterItem.module.scss';
import { Listbox } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { IElement } from '@/app/interfaces/IElement';

interface IMultipleProps {
	title: string;
	elements?: IElement[];
	type: string;
}

export default function Multiple(props: IMultipleProps) {
	const [selected, setSelected] = useState([]);
	const router = useRouter();

	const firstUpdate = useRef<boolean>(true);
	useLayoutEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
		} else {
			const path = router.pathname;
			const query = router.query;
			query[props.type] = selected.map((item: any) => item.value).join(',');
			router.push({
				pathname: path,
				query: query
			});
		}
	}, [selected]);
	return (
		<article className={styles.filter}>
			<Listbox value={selected} onChange={setSelected} multiple>
				<Listbox.Label>{props.title}:</Listbox.Label>
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
					{props.elements?.map(element => (
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
