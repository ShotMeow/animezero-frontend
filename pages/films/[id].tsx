import { GetServerSideProps, NextPage } from 'next'
import Film from '@/components/pages/Film/Film'
import { ICurrentFilm, IFilm } from '@/services/films.interface'
import { FilmsService } from '@/services/films.service'

const FilmPage: NextPage<ICurrentFilm> = ({ film }) => {
	return <Film film={film} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	try {
		const { data: film } = await FilmsService.getById(Number(query.id))
		return {
			props: {
				film: film.data as IFilm
			} as ICurrentFilm
		}
	} catch (e) {
		return {
			props: {
				film: {} as IFilm
			} as ICurrentFilm
		}
	}
}

export default FilmPage
