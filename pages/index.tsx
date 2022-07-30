import { GetStaticProps, NextPage } from 'next'
import Home from '@/components/pages/Home/Home'
import { FilmsService } from '@/services/films.service'
import { IHomePage } from '@/services/films.interface'

const HomePage: NextPage = props => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: films } = await FilmsService.getAll([
			'best',
			'newest',
			'ongoing',
			'recommended'
		])
		return {
			props: {
				best: films.data.best,
				newest: films.data.newest,
				ongoing: films.data.ongoing,
				recommended: films.data.recommended
			} as IHomePage,
			revalidate: 10
		}
	} catch (e) {
		return {
			props: {
				best: [],
				newest: [],
				ongoing: [],
				recommended: []
			} as IHomePage
		}
	}
}

export default HomePage
