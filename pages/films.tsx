import { GetServerSidePropsContext } from 'next'
import { FilmsService } from '@/app/services/films.service'
import Heading from '@/app/components/ui/Heading/Heading'
import Filter from '@/app/components/ui/Filter/Filter'
import FilmsGrid from '@/app/components/ui/FilmsGrid/FilmsGrid'
import Layout from '@/app/layouts/Layout'
import { IFilm } from '@/app/interfaces/IFilm'
import { IFilter } from '@/app/interfaces/IFilter'
import { SortType } from '@/app/types/SortTypes'
import { IPaginateResponse } from '@/app/interfaces/IPaginateResponse'

interface IFilmsPageProps {
	films: IPaginateResponse<IFilm>
	filters: IFilter
}

export default function FilmsPage(props: IFilmsPageProps) {
	return (
		<Layout title='AnimeZero - Фильмы'>
			<Heading
				catalog='Фильмы'
				title='Фильмы смотреть онлайн'
				description='В нашем каталоге вы найдете аниме-фильмы любых жанров. Не упустите возможность смотреть фильмы онлайн бесплатно без регистрации.'
			/>
			<Filter filters={props.filters} />
			<FilmsGrid films={props.films.data} links={props.films.meta.links} />
		</Layout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const films = await FilmsService.getAllByFilter({
			type: 'film',
			page: Number(context.query.page) || 1,
			years: String(context.query.years),
			rating: context.query.rating as SortType
		}, true)

		const genres = await FilmsService.getGenres()

		return {
			props: {
				films,
				filters: {
					genres
				}
			}
		}
	} catch (e) {
		return {
			notFound: true
		}
	}
}
