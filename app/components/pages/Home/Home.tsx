import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Welcome from '@/components/pages/Home/Welcome/Welcome'
import Novelties from '@/components/pages/Home/Novelties/Novelties'
import Recommendations from '@/components/pages/Home/Recommendations/Recommendations'
import ComingSoon from '@/components/pages/Home/ComingSoon/ComingSoon'
import { IHomePage } from '@/services/films.interface'

const Home: FC<IHomePage> = ({ best, newest, recommended, ongoing }) => {
	return (
		<Layout title='AnimeZero'>
			<Welcome best={best} />
			<Novelties newest={newest} />
			<Recommendations recommended={recommended} />
			<ComingSoon ongoing={ongoing} />
		</Layout>
	)
}

export default Home
