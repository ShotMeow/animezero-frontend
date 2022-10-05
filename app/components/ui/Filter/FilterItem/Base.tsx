import { memo, useState } from 'react';
import styles from '@/app/styles/ui/FilterItem.module.scss';
import { Listbox } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { Event } from '@/pages/_app';
import { IElement } from '@/app/interfaces/IElement';

interface IBaseProps {
	title: string;
	elements?: IElement[];
	type: string;
}

export default memo(function Base(props: IBaseProps) {
	if (!props.elements || !props.elements.length) {
		return <></>;
	}

	const [selected, setSelected] = useState(props.elements[0]);

	function onChange(item: IElement) {
		setSelected(item);
		Event.emit('filter-changed', {
			type: props.type, value: item.value
		});
	}

	return (
		<article className={styles.filter}>
			<Listbox
				value={selected}
				onChange={onChange}
			>
				<Listbox.Label>{props.title}:</Listbox.Label>
				<Listbox.Button>
					<span>{selected.name}</span>
					<span>
						<IoIosArrowDown />
					</span>
				</Listbox.Button>
				<Listbox.Options>
					{props.elements.map(element => (
						<Listbox.Option key={element.id} value={element}>
							<li className={styles.element}>{element.name}</li>
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</article>
	);
});
