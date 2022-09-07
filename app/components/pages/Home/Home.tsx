import { FC } from 'react'
import Layout from '@/app/components/Layout/Layout'
import Welcome from '@/app/components/pages/Home/Welcome/Welcome'
import Novelties from '@/app/components/pages/Home/Novelties/Novelties'
import Recommendations from '@/app/components/pages/Home/Recommendations/Recommendations'
import ComingSoon from '@/app/components/pages/Home/ComingSoon/ComingSoon'
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
