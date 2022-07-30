import { FC } from 'react'
import { IOngoingFilm } from '@/components/ui/OngoingFilm/Ongoing.interface'
import styles from './OngoingFilm.module.scss'
import Button from '@/components/ui/Button/Button'
import { ageCompileHelper } from '../../../helpers/age-compile.helper'
const OngoingFilm: FC<IOngoingFilm> = ({
	title,
	imageUrl,
	minimalAge,
	year,
	ganres
}) => {
	return (
		<article className={styles.ongoing_film}>
			<img src={imageUrl} alt={title} />
			<div>
				<h3>
					{title} ({year})
				</h3>
				<p className={styles.ganres}>
					<span>Жанры: </span>
					{ganres.map(ganre => (
						<a key={ganre} href='#'>
							{' '}
							{ganre}
						</a>
					))}
				</p>
				<p className={styles.ages}>
					Возрастной рейтинг: <span>{ageCompileHelper(minimalAge)}</span>
				</p>
				<Button>Отслеживать</Button>
			</div>
		</article>
	)
}

export default OngoingFilm
