import { FC } from 'react'
import { IOngoingFilm } from '@/components/ui/OngoingFilm/Ongoing.interface'
import styles from './OngoingFilm.module.scss'
import Button from '@/components/ui/Button/Button'
import { ageCompileHelper } from '@/helpers/age-compile.helper'
const OngoingFilm: FC<IOngoingFilm> = ({
	title,
	imageUrl,
	minimalAge,
	year,
	ganres
}) => {
	const currentGanres = [ganres[0], ganres[1], ganres[2]]
	return (
		<article className={styles.ongoing_film}>
			<img src={imageUrl} alt={title} />
			<div>
				<h3>
					{title} ({year})
				</h3>
				<p className={styles.ganres}>
					<span>Жанры: </span>
					{currentGanres.map(ganre =>
						ganre === currentGanres[currentGanres.length - 1] ? (
							<a key={ganre} href='#'>
								{' '}
								{ganre}
							</a>
						) : (
							<a key={ganre} href='#'>
								{' '}
								{ganre},
							</a>
						)
					)}
				</p>
				<p className={styles.ages}>
					Возрастной рейтинг: <span>{ageCompileHelper(minimalAge)}</span>
				</p>
				<Button important='primary'>Отслеживать</Button>
			</div>
		</article>
	)
}

export default OngoingFilm
