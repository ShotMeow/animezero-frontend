import Layout from '@/app/layouts/Layout';
import Heading from '@/app/components/ui/Heading/Heading';
import styles from '@/app/styles/pages/Partnership.module.scss';
import Button from '@/app/components/ui/Button/Button';

export default function PartnershipPage() {
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
					<a href='https://vk.com/im?media=&sel=-215749739'>
						<Button important='primary'>Поддержка</Button>
					</a>
					<p>
						Или на почту:
						<a href='mailto:admin@animezero.ru'>admin@animezero.ru</a>
					</p>
				</div>
			</section>
		</Layout>
	);
}
