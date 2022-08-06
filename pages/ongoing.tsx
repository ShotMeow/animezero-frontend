import { GetStaticProps, NextPage } from 'next'
import Ongoing from '@/components/pages/Ongoing/Ongoing'
import { FilmsService } from '@/services/films.service'
import { IFilm } from '@/services/films.interface'

const OngoingPage: NextPage<{ ongoing: IFilm[] }> = ({ ongoing }) => {
	return <Ongoing films={ongoing} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: films } = await FilmsService.getAll(['ongoing'])
		return {
			props: {
				ongoing: films.data.ongoing as IFilm[]
			} as { ongoing: IFilm[] },
			revalidate: 10
		}
	} catch (e) {
		return {
			props: {
				ongoing: []
			}
		}
	}
}

export default OngoingPage