import { FC } from 'react'
import Layout from '@/components/Layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import Button from '@/components/ui/Button/Button'
import styles from './Partnership.module.scss'

const Partnership: FC = () => {
	return (
		<Layout title='AnimeZero - Сотрудничество'>
			<Heading
				catalog='Сотрудничество'
				title='Партнерам'
				description='Наш кинотеатр всегда рад новым партнерам. За поддержку нашего портала мы будем рады предоставить эксклюзивные предложения и надежные прозрачные взаимоотношения.'
			/>
			<section className={styles.partner}>
				<p>
					Получить более подробную информацию о партнерской программе вы можете
					обратившись в чате:
				</p>
				<div>
					<Button important='primary'>Поддержка</Button>
					<p>
						Или на почту:
						<a href='mailto:admin@animezero.ru'>admin@animezero.ru</a>
					</p>
				</div>
			</section>
		</Layout>
	)
}

export default Partnership
