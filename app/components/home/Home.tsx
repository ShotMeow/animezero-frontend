import { FC } from 'react'
import Layout from '@/app/layouts/Layout'
import Welcome from '@/app/components/home/Welcome'
import Novelties from '@/app/components/home/Novelties'
import Recommendations from '@/app/components/home/Recommendations'
import ComingSoon from '@/app/components/home/ComingSoon'
import { IFilm } from '@/app/services/films.interface'

const Home: FC<{
	best: IFilm[]
	newest: IFilm[]
	ongoing: IFilm[]
	recommended: IFilm[]
}> = ({ best, newest, recommended, ongoing }) => {
	return (
		<Layout title='AnimeZero'>
			<Welcome films={best} />
			<Novelties films={newest} />
			{recommended[0] && <Recommendations films={recommended} />}
			<ComingSoon films={ongoing} />
		</Layout>
	)
}

export default Home
