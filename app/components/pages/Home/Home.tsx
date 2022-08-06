import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Welcome from '@/components/pages/Home/Welcome/Welcome'
import Novelties from '@/components/pages/Home/Novelties/Novelties'
import Recommendations from '@/components/pages/Home/Recommendations/Recommendations'
import ComingSoon from '@/components/pages/Home/ComingSoon/ComingSoon'
import { IFilm } from '@/services/films.interface'

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
