import { FC, useState } from 'react'
import styles from '@/components/ui/Filter/FilterItem/FilterItem.module.scss'
import { Listbox } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'
import cn from 'classnames'
import {
	IElement,
	IFilterItem
} from '@/components/ui/Filter/FilterItem/FilterItem.interface'
import { useRouter } from 'next/router'

const Base: FC<IFilterItem> = ({ type, title, elements }) => {
	const [selected, setSelected] = useState(elements[0])
	const router = useRouter()

	const handleChange = (element: IElement) => {
		setSelected(element)
		const path = router.pathname
		const query = router.query
		query[`${type}`] = element.value
		router.push({
			pathname: path,
			query: query
		})
	}

	return (
		<article className={styles.filter}>
			<Listbox
				value={selected}
				onChange={(value: IElement) => handleChange(value)}
			>
				<Listbox.Label>{title}:</Listbox.Label>
				<Listbox.Button>
					<span>{selected.name}</span>
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
	)
}

export default Base
