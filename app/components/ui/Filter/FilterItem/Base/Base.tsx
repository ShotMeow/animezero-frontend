import { memo, useState } from 'react'
import styles from '@/app/components/ui/Filter/FilterItem/FilterItem.module.scss'
import { Listbox } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'
import { IElement } from '@/app/components/ui/Filter/FilterItem/FilterItem.interface'
import { useRouter } from 'next/router'

interface IBaseProps {
	title: string
	elements?: IElement[]
	type: string
}

export default memo(function Base(props: IBaseProps) {
	if (!props.elements || !props.elements.length)
		return null

	const [selected, setSelected] = useState(props.elements[0])
	const router = useRouter()

	function handleChange(element: IElement) {
		setSelected(element)
		const path = router.pathname
		const query = router.query
		query[props.type] = element.value
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
	)
})
