import { FC } from 'react'
import { IFilm } from '@/app/services/films.interface'
import styles from './ProfileBody.module.scss'
import Pagination from '@/app/components/ui/Pagination/Pagination'
import ProfileCard from '@/app/components/ui/ProfileCard/ProfileCard'
import { IMeta } from '@/app/types/user.interface'

const ProfileBody: FC<{
	title: string
	films: IFilm[] | undefined
	isSuccess: boolean
	meta?: IMeta
}> = ({ title, films, isSuccess, meta }) => {
	console.log(meta)
	return (
		<div className={styles.body}>
			<h2>{title}</h2>
			<div>
				{isSuccess ? (
					films ? (
						films.map(film => <ProfileCard key={film.id} film={film} />)
					) : (
						<p>Тут пока пусто</p>
					)
				) : (
					<p>Загрузка...</p>
				)}
			</div>
			{meta && meta?.last_page !== 1 && <Pagination links={meta.links} />}
		</div>
	)
}

export default ProfileBody
