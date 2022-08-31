import { FC, useRef, useState } from 'react'
import styles from '../Profile.module.scss'
import { asideNav } from '@/components/pages/Profile/Aside/Aside.data'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { api } from '@/store/api/api'
import { AiOutlineUser } from 'react-icons/ai'
import { Cropper } from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import Button from '@/components/ui/Button/Button'
import { toastr } from 'react-redux-toastr'

const Aside: FC = () => {
	const { asPath } = useRouter()
	const [isCropper, setCropper] = useState<boolean>(false)
	const [avatar, setAvatar] = useState('')
	const [cropData, setCropData] = useState('#')
	const fileInput = useRef<HTMLInputElement>(null)
	const cropperRef = useRef<HTMLImageElement>(null)
	const { data, isSuccess } = api.useGetProfileDataQuery('', {
		refetchOnMountOrArgChange: true
	})
	const [uploadAvatar] = api.useUploadAvatarMutation()

	const onFileUpload = () => {
		if (fileInput && fileInput.current) {
			fileInput.current.click()
			fileInput.current.addEventListener('change', (e: any) => {
				if (fileInput?.current?.value) {
					if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(fileInput.current.value)) {
						return toastr.error('Ошибка', 'Данный тип файлов не поддерживается')
					}
					let files
					if (e.dataTransfer) {
						files = e.dataTransfer.files
					} else if (e.target) {
						files = e.target.files
					}
					const reader = new FileReader()
					reader.onload = () => {
						setAvatar(reader.result as any)
					}
					reader.readAsDataURL(files[0])
					setCropper(true)
				}
			})
		}
	}

	const onCrop = () => {
		const image: any = cropperRef?.current
		const cropper: any = image.cropper
		setCropData(cropper.getCroppedCanvas().toDataURL())
	}

	const onUploadImage = () => {
		uploadAvatar(cropData).then(data => {
			// @ts-ignore
			if (data.error) {
				toastr.error(
					'Ошибка',
					'Не получилось загрузить аватар. Попробуйте позже'
				)
			}
			setCropper(false)
		})
	}
	console.log(data)

	return (
		<aside className={styles.aside}>
			{isSuccess && (
				<div className={styles.info}>
					{data.data.avatar ? (
						<img src={data.data.avatar} alt='Аватар' />
					) : (
						<div>
							<AiOutlineUser size={60} />
							<button onClick={onFileUpload}>Изменить</button>
							<input ref={fileInput} type='file' accept='.jpg, .jpeg, .png' />
						</div>
					)}
					<h3>{data.data.login}</h3>
					<p>{data.data.email}</p>
				</div>
			)}
			<ul>
				{asideNav.map(item => (
					<li key={item.url}>
						<Link href={item.url}>
							<a className={asPath === item.url ? styles.active : ''}>
								{item.value}
							</a>
						</Link>
					</li>
				))}
			</ul>
			{isCropper && (
				<div className={styles.cropper}>
					<div>
						<Cropper
							src={avatar}
							initialAspectRatio={16 / 9}
							guides={false}
							crop={onCrop}
							ref={cropperRef}
						/>
						<Button onClick={onUploadImage} important='primary'>
							Изменить
						</Button>
					</div>
				</div>
			)}
		</aside>
	)
}

export default Aside
