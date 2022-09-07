import Layout from '@/app/layouts/Layout'
import Heading from '@/app/components/ui/Heading/Heading'
import styles from '@/app/styles/pages/RightHolder.module.scss'

export default function RightHolderPage() {
	return (
		<Layout title='Для правообладателей'>
			<Heading
				catalog='Правообладателям'
				title='Информация для правообладателей'
				description='Деятельность сайта AnimeZero осуществляется в соответствии с законодательством РФ в области защиты информации и авторских прав на предоставляемый контент.'
			/>
			<section className={styles.holder}>
				<p>
					Все размещенные на нашем ресурсе материалы находятся в свободном
					доступе и могут быть бесплатно скачаны из интернета. Сбор информации в
					сети и размещение контента производится в автоматическом режиме.
				</p>
				<p>
					Публикация нелицензионного, похищенного контента и материалов,
					защищенных авторским правом, не допускается. Администрация размещает
					только любительские русскоязычные материалы из свободных источников
					при использовании автоматической системы.
				</p>
				<p>
					Администрация ресурса предлагает сотрудничество с правообладателями
					контента. В случае нарушения прав собственности сайт обязуется убрать
					неправомерно размещенный материал или предложить выгодные условия
					сотрудничества правообладателю. Если вы обнаружили материал,
					представленный на нашем сайте, который нарушает ваши авторские права,
					или же дискредитирует Вашу компанию, предоставляя неверную или
					искаженную информацию, пожалуйста свяжитесь с нами для решения этого
					вопроса.
				</p>
				<p>
					Для этого вы можете обратиться в поддержку или отправить сообщение на
					нашу корпоративную почту
					<a href='mailto:admin@animezero.ru'>
						<strong> admin@animezero.ru </strong>
					</a>
					со следующим содержанием:
				</p>
				<ol>
					<li>Контактные данные</li>
					<li>Реквизиты вашей компании</li>
					<li>
						Прямую ссылку (ссылки) на материал, который вы считаете спорным
					</li>
					<li>
						Заверенные сканированные копии документов, подтверждающих ваше
						эксклюзивное право на материал (или копии документов на
						посреднические услуги)
					</li>
				</ol>
				<p>
					После проверки всей информации, администрация сайта свяжется с вами
					для урегулирования спорного вопроса.
				</p>
			</section>
		</Layout>
	)
}
