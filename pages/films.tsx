import { GetServerSideProps, NextPage } from 'next'
import Films from '@/components/pages/Films/Films'
import { IFilm, IFilter, IGenre, IStatus } from '@/services/films.interface'
import { FilmsService } from '@/services/films.service'
import { ILink, IMetaLink } from '@/types/user.interface'

const FilmsPage: NextPage<{
	films: IFilm[]
	links: IMetaLink[]
	filters: IFilter
}> = ({ films, links, filters }) => {
	return <Films films={films} links={links} filters={filters} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const page = query.page || 1
	const genre = query.genres
	const status = query.statuses
	const params: any = {
		page: page,
		genres: genre,
		statuses: status
	}

	try {
		const { data: films } = await FilmsService.getAllByFilter({
			type: 'film',
			...params
		})
		const { data: genres } = await FilmsService.getGenres()
		const { data: statuses } = await FilmsService.getStatuses()
		return {
			props: {
				films: films.data as IFilm[],
				links: films.meta.links as ILink[],
				filters: {
					genres: genres.data as IGenre[],
					statuses: statuses.data as IStatus[]
				}
			} as { films: IFilm[]; links: ILink[]; filters: IFilter }
		}
	} catch (e) {
		return {
			props: {
				films: [],
				links: [],
				filters: {
					genres: [],
					statuses: []
				}
			}
		}
	}
}

export default FilmsPage
