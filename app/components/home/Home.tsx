import Layout from '@/app/layouts/Layout'
import Welcome from '@/app/components/home/Welcome'
import Novelties from '@/app/components/home/Novelties'
import Recommendations from '@/app/components/home/Recommendations'
import ComingSoon from '@/app/components/home/ComingSoon'
import { IFilm } from '@/app/interfaces/IFilm'

interface IHomeProps {
	best: IFilm[],
	newest: IFilm[]
	ongoing: IFilm[]
	recommended: IFilm[]
}

export default function IHomeProps(props: IHomeProps) {
	return (
		<Layout title='AnimeZero'>
			<Welcome films={props.best} />
			<Novelties films={props.newest} />
			{props.recommended?.length > 0 && <Recommendations films={props.recommended} />}
			<ComingSoon films={props.ongoing} />
		</Layout>
	)
}
