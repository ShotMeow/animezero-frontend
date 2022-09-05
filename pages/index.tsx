import { GetStaticProps, NextPage } from 'next'
import Home from '@/components/pages/Home/Home'
import { FilmsService } from '@/services/films.service'
import { IFilm } from '@/services/films.interface'

const IndexPage: NextPage<{
	best: IFilm[]
	newest: IFilm[]
	ongoing: IFilm[]
	recommended: IFilm[]
}> = props => {
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
				best: films.data.best as IFilm[],
				newest: films.data.newest as IFilm[],
				ongoing: films.data.ongoing as IFilm[],
				recommended: films.data.recommended as IFilm[]
			} as {
				best: IFilm[]
				newest: IFilm[]
				ongoing: IFilm[]
				recommended: IFilm[]
			},
			revalidate: 10
		}
	} catch (e) {
		return {
			props: {
				best: [],
				newest: [],
				ongoing: [],
				recommended: []
			}
		}
	}
}

export default IndexPage
