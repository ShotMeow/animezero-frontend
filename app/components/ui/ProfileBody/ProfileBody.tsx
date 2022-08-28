import { FC } from 'react'
import { IFilm } from '@/services/films.interface'
import styles from './ProfileBody.module.scss'
import { ILink } from '@/components/ui/Pagination/Pagination.interface'
import Pagination from '@/components/ui/Pagination/Pagination'
import ProfileCard from '@/components/ui/ProfileCard/ProfileCard'

const ProfileBody: FC<{
	title: string
	films: IFilm[] | undefined
	isSuccess: boolean
	pagination?: ILink[]
}> = ({ title, films, isSuccess, pagination }) => {
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
			{pagination?.length && <Pagination links={pagination} />}
		</div>
	)
}

export default ProfileBody
