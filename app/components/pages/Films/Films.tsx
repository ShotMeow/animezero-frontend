import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import { IFilm, IFilter } from '@/services/films.interface'
import Filter from '@/components/ui/Filter/Filter'
import FilmsGrid from '@/components/ui/FilmsGrid/FilmsGrid'
import { IMetaLink } from '@/types/user.interface'

const Films: FC<{ films: IFilm[]; links: IMetaLink[]; filters: IFilter }> = ({
	films,
	links,
	filters
}) => {
	return (
		<Layout title='AnimeZero - Фильмы'>
			<Heading
				catalog='Фильмы'
				title='Фильмы смотреть онлайн'
				description='В нашем каталоге вы найдете аниме-фильмы любых жанров. Не упустите возможность смотреть фильмы онлайн бесплатно без регистрации.'
			/>
			<Filter filters={filters} />
			<FilmsGrid films={films} links={links} />
		</Layout>
	)
}

export default Films
