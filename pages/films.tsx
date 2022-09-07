import { GetServerSideProps, NextPage } from 'next'
import Films from '@/components/pages/Films/Films'
import { IFilm, IFilter, IGenre } from '@/services/films.interface'
import { FilmsService } from '@/services/films.service'
import { ILink, IMetaLink } from '@/types/user.interface'

const FilmsPage: NextPage<{
	films: IFilm[]
	links: IMetaLink[]
	filters: IFilter
}> = ({ films, links, filters }) => {
	return <Films films={films} links={links} filters={filters} />
}

export const getServerSideProps: GetServerSideProps = async ({
	query,
	res
}) => {
	const page = query.page || 1
	const genre = query.genres
	const years = query.years
	const rating = query.rating
	const params: any = {
		page: page,
		genres: genre,
		years: years,
		rating: rating
	}

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate-59'
	)

	try {
		const { data: films } = await FilmsService.getAllByFilter({
			type: 'film',
			...params
		})
		const { data: genres } = await FilmsService.getGenres()
		return {
			props: {
				films: films.data as IFilm[],
				links: films.meta.links as ILink[],
				filters: {
					genres: genres.data as IGenre[]
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
