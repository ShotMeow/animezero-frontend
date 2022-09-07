import styles from './Heading.module.scss'
import { FC } from 'react'
import { IHeading } from '@/app/components/ui/Heading/Heading.interface'

const Heading: FC<IHeading> = ({ catalog, title, description }) => {
	return (
		<section className={styles.heading}>
			<div className={styles.bread}>
				<strong>Anime Zero</strong>
				<span>/</span>
				<span>{catalog}</span>
			</div>
			<div className={styles.about}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</section>
	)
}

export default Heading
