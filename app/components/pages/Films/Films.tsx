import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import { IFilm, IFilter } from '@/services/films.interface'
import { ILink } from '@/components/ui/Pagination/Pagination.interface'
import Filter from '@/components/ui/Filter/Filter'
import FilmsGrid from '@/components/ui/FilmsGrid/FilmsGrid'

const Films: FC<{ films: IFilm[]; links: ILink[]; filters: IFilter }> = ({
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
