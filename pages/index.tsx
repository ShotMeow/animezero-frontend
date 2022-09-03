import { NextPage } from 'next'
import { useRouter } from 'next/router'

const HomePage: NextPage = () => {
	const router = useRouter()
	router.push('/catalog')
	return <></>
}

export default HomePage
