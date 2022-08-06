import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import Image from 'next/image'
import styles from './Project.module.scss'

import quality from '@/assets//images/quality.png'

const Project: FC = () => {
	return (
		<Layout title='AnimeZero - О проекте'>
			<Heading
				catalog='О проекте'
				title='О нас'
				description='AnimeZero - один из крупнейших онлайн-кинотеатров в России, посвященный аниме.'
			/>
			<div className={styles.project}>
				<h3>Огромный выбор фильмов и сериалов</h3>
				<p>
					В нашем каталоге вы найдете огромную коллекцию аниме фильмов и
					сериалов с большим выбором озвучки и хорошим качеством
					воспроизведения. Для вас мы ежедневно работаем над улучшением нашего
					сервиса, чтобы принести в каждый дом уютную атмосферу и удобный
					просмотр аниме.
				</p>
				<Image src={quality} alt='Качество' />
			</div>
		</Layout>
	)
}

export default Project
