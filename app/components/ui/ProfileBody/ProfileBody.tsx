import { FC } from 'react'
import { IFilm } from '@/services/films.interface'
import FilmItem from '@/components/ui/FilmItem/FilmItem'
import styles from './ProfileBody.module.scss'

const ProfileBody: FC<{
	title: string
	films: IFilm[] | undefined
	isSuccess: boolean
}> = ({ title, films, isSuccess }) => {
	return (
		<div className={styles.body}>
			<h2>{title}</h2>
			{isSuccess ? (
				films ? (
					films.map(film => <FilmItem key={film.id} film={film} />)
				) : (
					<p>Тут пока пусто</p>
				)
			) : (
				<p>Загрузка...</p>
			)}
		</div>
	)
}

export default ProfileBody
