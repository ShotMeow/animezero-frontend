import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import styles from './Home.module.scss'
import Button from '@/components/ui/Button/Button'
import { FiPlay } from 'react-icons/all'
const Home: FC = () => {
	return <Layout title='AnimeZero'>
		<section className={styles.welcome}>
			<div className={styles.info}>
				<div className={styles.bread}>
					<strong>Anime Zero</strong><span>/</span><span>Каталог</span>
				</div>
				<div className={styles.about}>
					<h1>Смотрите онлайн <br/> аниме на Anime<span>Zero</span></h1>
					<p>Смотрите аниме в хорошем качестве <br/> только у нас!</p>
				</div>
				<div className={styles.action}>
					<Button>
						<FiPlay color='white' size={20} />
						Перейти к просмотру
					</Button>
					<div className={styles.circle}>
						<div></div>
						<div></div>
					</div>
					<p><span>1</span> смотрят</p>
				</div>
			</div>
		</section>
	</Layout>
}

export default Home
