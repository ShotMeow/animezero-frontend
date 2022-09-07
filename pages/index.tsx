import { FilmsService } from '@/app/services/films.service'
import Layout from '@/app/layouts/Layout'
import Welcome from '@/app/components/home/Welcome'
import Novelties from '@/app/components/home/Novelties'
import Recommendations from '@/app/components/home/Recommendations'
import ComingSoon from '@/app/components/home/ComingSoon'
import { IFilm } from '@/app/interfaces/IFilm'
import { GetServerSidePropsContext } from 'next'

interface IIndexPageProps {
	best: IFilm[]
	newest: IFilm[]
	ongoing: IFilm[]
	recommended: IFilm[]
}

export default function IndexPage(props: IIndexPageProps) {
	return (
		<Layout title='AnimeZero'>
			<Welcome films={props.best} />
			<Novelties films={props.newest} />
			{props.recommended?.length > 0 && <Recommendations films={props.recommended} />}
			<ComingSoon films={props.ongoing} />
		</Layout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	context.res.setHeader('Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59')

	try {
		const films = await FilmsService.getAll(['best', 'newest', 'ongoing', 'recommended'])
		return {
			props: { ...films }
		}
	} catch (e) {
		return {
			notFound: true
		}
	}
}
