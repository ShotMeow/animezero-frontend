import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Welcome from '@/components/pages/Home/Welcome/Welcome'
const Home: FC = () => {
	return <Layout title='AnimeZero'>
		<Welcome />
	</Layout>
}

export default Home
