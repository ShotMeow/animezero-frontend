import { GetServerSideProps, NextPage } from 'next'
import Serials from '@/components/pages/Serials/Serials'
import { FilmsService } from '@/services/films.service'
import { IFilm, IFilter, IGenre, IStatus } from '@/services/films.interface'
import { IMetaLink } from '@/types/user.interface'

const SerialsPage: NextPage<{
	serials: IFilm[]
	links: IMetaLink[]
	filters: IFilter
}> = ({ serials, links, filters }) => {
	return <Serials serials={serials} links={links} filters={filters} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const page = query.page || 1
	const genre = query.genres
	const status = query.statuses
	const years = query.years
	const rating = query.rating
	const params: any = {
		page: page,
		genres: genre,
		statuses: status,
		years: years,
		rating: rating
	}
	try {
		const { data: serials } = await FilmsService.getAllByFilter({
			type: 'serial',
			...params
		})
		const { data: genres } = await FilmsService.getGenres()
		const { data: statuses } = await FilmsService.getStatuses()

		return {
			props: {
				serials: serials.data as IFilm[],
				links: serials.meta.links as IMetaLink[],
				filters: {
					genres: genres.data as IGenre[],
					statuses: statuses.data as IStatus[]
				}
			} as { serials: IFilm[]; links: IMetaLink[]; filters: IFilter }
		}
	} catch (e) {
		return {
			props: {
				serials: [],
				links: [],
				filters: {
					genres: [],
					statuses: []
				}
			}
		}
	}
}

export default SerialsPage
