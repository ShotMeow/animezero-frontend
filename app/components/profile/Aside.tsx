import 'cropperjs/dist/cropper.css';
import styles from '@/app/styles/Profile.module.scss';
import { asideNav } from '@/app/components/profile/Aside.data';
import Button from '@/app/components/ui/Button';
import NextLink from '@/app/components/ui/NextLink';
import { profileApi } from '@/app/store/api/profile.api';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Cropper } from 'react-cropper';
import { AiOutlineUser } from 'react-icons/ai';
import { toastr } from 'react-redux-toastr';

export default function Aside() {
	const { asPath } = useRouter();
	const [isCropper, setCropper] = useState<boolean>(false);
	const [avatar, setAvatar] = useState('');
	const [cropData, setCropData] = useState('#');
	const fileInput = useRef<HTMLInputElement>(null);
	const cropperRef = useRef<HTMLImageElement>(null);
	const { data, isSuccess } = profileApi.useGetProfileDataQuery('', {
		refetchOnMountOrArgChange: true
	});
	const [uploadAvatar] = profileApi.useUploadAvatarMutation();

	const onFileUpload = () => {
		if (fileInput && fileInput.current) {
			fileInput.current.click();
			fileInput.current.addEventListener('change', (e: any) => {
				if (fileInput?.current?.value) {
					if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(fileInput.current.value)) {
						return toastr.error('Ошибка', 'Данный тип файлов не поддерживается');
					}
					let files;
					if (e.dataTransfer) {
						files = e.dataTransfer.files;
					} else if (e.target) {
						files = e.target.files;
					}
					const reader = new FileReader();
					reader.onload = () => {
						setAvatar(reader.result as any);
					};
					reader.readAsDataURL(files[0]);
					setCropper(true);
				}
			});
		}
	};

	const onCrop = () => {
		const image: any = cropperRef?.current;
		const cropper: any = image.cropper;
		setCropData(cropper.getCroppedCanvas().toDataURL());
	};

	const onUploadImage = () => {
		uploadAvatar(cropData).then(data => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (data.error) {
				toastr.error(
					'Ошибка',
					'Не получилось загрузить аватар. Попробуйте позже'
				);
			} else {
				toastr.success('Успех', 'Аватар успешно изменен');
			}
			setCropper(false);
		});
	};

	return (
		<aside className={styles.aside}>
			{isSuccess && (
				<div className={styles.info}>
					{data.data.avatar ? (
						<div className={styles.avatar}>
							<img src={data.data.avatar} alt='Аватар' width={250} height={250} />
							<button onClick={onFileUpload}>Изменить</button>
							<input ref={fileInput} type='file' accept='.jpg, .jpeg, .png' />
						</div>
					) : (
						<div className={styles.plug}>
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
						<NextLink href={item.url} className={asPath.includes(item.url) ? styles.active : ''}>
							{item.value}
						</NextLink>
					</li>
				))}
			</ul>
			{isCropper && (
				<div className={styles.cropper}>
					<div>
						<Cropper
							src={avatar}
							aspectRatio={1}
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
	);
}
