import { IFilm } from '@/app/interfaces/IFilm'
import styles from './ProfileBody.module.scss'
import Pagination from '@/app/components/ui/Pagination/Pagination'
import ProfileCard from '@/app/components/ui/ProfileCard/ProfileCard'
import { IMeta } from '@/app/interfaces/IMeta'

interface IProfileBodyProps {
	title: string
	films: IFilm[] | undefined
	isSuccess: boolean
	meta?: IMeta
}

export default function ProfileBody(props: IProfileBodyProps) {
	return (
		<div className={styles.body}>
			<h2>{props.title}</h2>
			<div>
				{props.isSuccess ? (
					props.films ? (
						props.films.map(film => <ProfileCard key={film.id} film={film} />)
					) : (
						<p>Тут пока пусто</p>
					)
				) : (
					<p>Загрузка...</p>
				)}
			</div>
			{props.meta && props.meta?.last_page !== 1 && <Pagination links={props.meta.links} />}
		</div>
	)
}
