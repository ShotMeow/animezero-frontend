import { GetServerSidePropsContext } from 'next'
import { FilmsService } from '@/app/services/films.service'
import Layout from '@/app/layouts/Layout'
import Heading from '@/app/components/ui/Heading/Heading'
import Filter from '@/app/components/ui/Filter/Filter'
import FilmsGrid from '@/app/components/ui/FilmsGrid/FilmsGrid'
import { IFilm } from '@/app/interfaces/IFilm'
import { IMetaLink } from '@/app/interfaces/IMetaLink'
import { IFilter } from '@/app/interfaces/IFilter'
import { SortType } from '@/app/types/SortTypes'

interface ISerialsPageProps {
	serials: IFilm[]
	links: IMetaLink[]
	filters: IFilter
}

export default function SerialsPage(props: ISerialsPageProps) {
	console.log(props)

	return (
		<Layout title='AnimeZero - Сериалы'>
			<Heading
				catalog='Сериалы'
				title='Сериалы смотреть онлайн'
				description='В нашем каталоге вы найдете сериалы любых жанров. Не упустите возможность смотреть сериалы онлайн бесплатно без регистрации.'
			/>
			<Filter filters={props.filters} />
			<FilmsGrid films={props.serials} links={props.links} />
		</Layout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const serials = await FilmsService.getAllByFilter({
			type: 'serial',
			page: Number(context.query.page) || 1,
			years: String(context.query.years),
			rating: context.query.rating as SortType
		}, true)

		const genres = await FilmsService.getGenres()
		const statuses = await FilmsService.getStatuses()

		return {
			props: {
				serials: serials.data,
				links: serials.meta.links,
				filters: {
					genres,
					statuses
				}
			}
		}
	} catch (e) {
		return {
			notFound: true
		}
	}
}
