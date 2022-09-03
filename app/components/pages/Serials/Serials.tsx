import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import { IFilm, IFilter } from '@/services/films.interface'
import Filter from '@/components/ui/Filter/Filter'
import FilmsGrid from '@/components/ui/FilmsGrid/FilmsGrid'
import { IMetaLink } from '@/types/user.interface'

const Serials: FC<{
	serials: IFilm[]
	links: IMetaLink[]
	filters: IFilter
}> = ({ serials, links, filters }) => {
	return (
		<Layout title='AnimeZero - Сериалы'>
			<Heading
				catalog='Сериалы'
				title='Сериалы смотреть онлайн'
				description='В нашем каталоге вы найдете сериалы любых жанров. Не упустите возможность смотреть сериалы онлайн бесплатно без регистрации.'
			/>
			<Filter filters={filters} />
			<FilmsGrid films={serials} links={links} />
		</Layout>
	)
}

export default Serials
