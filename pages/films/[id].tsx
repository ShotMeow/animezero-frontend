import { GetServerSideProps, NextPage } from 'next'
import Film from '@/components/pages/Film/Film'
import { IFilm } from '@/services/films.interface'
import { FilmsService } from '@/services/films.service'

const FilmPage: NextPage<{ film: IFilm }> = ({ film }) => {
	return <Film film={film} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	try {
		const { data: film } = await FilmsService.getById(Number(query.id))
		return {
			props: {
				film: film.data as IFilm
			} as { film: IFilm }
		}
	} catch (e) {
		return {
			props: {
				film: {}
			}
		}
	}
}

export default FilmPage
