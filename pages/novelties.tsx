import { GetStaticProps, NextPage } from 'next'
import Novelties from '@/components/pages/Novelties/Novelties'
import { FilmsService } from '@/services/films.service'
import { IFilm } from '@/services/films.interface'

const NoveltiesPage: NextPage<{ newest: IFilm[] }> = ({ newest }) => {
	return <Novelties films={newest} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: films } = await FilmsService.getAll(['newest'])
		return {
			props: {
				newest: films.data.newest as IFilm[]
			} as { newest: IFilm[] },
			revalidate: 10
		}
	} catch (e) {
		return {
			props: {
				newest: []
			}
		}
	}
}

export default NoveltiesPage
