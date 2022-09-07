import { FilmsService } from '@/app/services/films.service'
import { IFilm } from '@/app/services/films.interface'
import Layout from '@/app/components/Layout/Layout'
import Welcome from '@/app/components/pages/Home/Welcome/Welcome'
import Novelties from '@/app/components/pages/Home/Novelties/Novelties'
import Recommendations from '@/app/components/pages/Home/Recommendations/Recommendations'
import ComingSoon from '@/app/components/pages/Home/ComingSoon/ComingSoon'

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

export async function getServerSideProps() {
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
