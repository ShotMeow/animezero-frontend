import { GetServerSidePropsContext } from 'next';
import { FilmsService } from '@/app/services/films.service';
import Layout from '@/app/layouts/Layout';
import Heading from '@/app/components/ui/Heading/Heading';
import Filter from '@/app/components/ui/Filter/Filter';
import FilmsGrid from '@/app/components/ui/FilmsGrid/FilmsGrid';
import { IFilm } from '@/app/interfaces/IFilm';
import { IMetaLink } from '@/app/interfaces/IMetaLink';
import { IFilter } from '@/app/interfaces/IFilter';
import { SortType } from '@/app/types/SortTypes';
import { useState } from 'react';
import { useMounted } from '@/app/hooks/useMounted';
import { Event } from '@/pages/_app';
import { IPaginateResponse } from '@/app/interfaces/IPaginateResponse';

interface ISerialsPageProps {
	serials: IPaginateResponse<IFilm>;
	links: IMetaLink[];
	filters: IFilter;
}

export default function SerialsPage(props: ISerialsPageProps) {
	const [newProps, setNewProps] = useState(props);

	useMounted(() => {
		setNewProps(props);
	});

	Event.on('film-update', async (data) => {
		const serials = await FilmsService.getAllByFilter({
			type: 'serial',
			page: 1,
			years: data?.years,
			rating: data?.rating,
			genres: data?.genres,
			statuses: data?.statuses
		}, true);

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
