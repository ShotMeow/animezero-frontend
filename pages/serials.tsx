import { GetServerSidePropsContext } from 'next';
import { FilmsService } from '@/app/services/films.service';
import Layout from '@/app/layouts/Layout';
import Heading from '@/app/components/ui/Heading';
import Filter from '@/app/components/ui/Filter/Filter';
import FilmsGrid from '@/app/components/ui/FilmsGrid';
import { IFilm } from '@/app/interfaces/IFilm';
import { IMetaLink } from '@/app/interfaces/IMetaLink';
import { IFilter } from '@/app/interfaces/IFilter';
import { SortType } from '@/app/types/SortTypes';
import { useState } from 'react';
import { useMounted } from '@/app/hooks/useMounted';
import { IPaginateResponse } from '@/app/interfaces/IPaginateResponse';
import { useFilmUpdate } from '@/app/hooks/useFilmUpdate';
import usePaginationRoute from '@/app/hooks/usePaginationRoute';
import { useRouter } from 'next/router';

interface ISerialsPageProps {
	serials: IPaginateResponse<IFilm>;
	links: IMetaLink[];
	filters: IFilter;
}

export default function SerialsPage(props: ISerialsPageProps) {
	const [newProps, setNewProps] = useState(props);
	const router = useRouter();

	useMounted(() => {
		setNewProps(props);
	});

	useFilmUpdate(router, 'serial', (serials) => {
		setNewProps({
			...newProps,
			serials
		});
	});

	usePaginationRoute(router, 'serial', (serials) => {
		setNewProps({
			...newProps,
			serials
		});
	});

	return (
		<Layout title='AnimeZero - Сериалы'>
			<Heading
				catalog='Сериалы'
				title='Сериалы смотреть онлайн'
				description='В нашем каталоге вы найдете сериалы любых жанров. Не упустите возможность смотреть сериалы онлайн бесплатно без регистрации.'
			/>
			<Filter filters={newProps.filters} />
			<FilmsGrid films={newProps.serials.data} links={newProps.serials.meta.links} />
		</Layout>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const serials = await FilmsService.getAllByFilter({
			type: 'serial',
			page: Number(context.query.page) || 1,
			years: String(context.query.years),
			rating: context.query.rating as SortType
		}, true);

		const genres = await FilmsService.getGenres();
		const statuses = await FilmsService.getStatuses();

		return {
			props: {
				serials,
				filters: {
					genres,
					statuses
				}
			}
		};
	} catch (e) {
		return {
			notFound: true
		};
	}
}
