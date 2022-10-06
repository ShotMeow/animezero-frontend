import styles from '@/app/styles/ui/Heading.module.scss';

interface IHeadingProps {
	catalog: string;
	title: string;
	description: string;
}

export default function Heading(props: IHeadingProps) {
	return (
		<section className={styles.heading}>
			<div className={styles.bread}>
				<strong>Anime Zero</strong>
				<span>/</span>
				<span>{props.catalog}</span>
			</div>
			<div className={styles.about}>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
			</div>
		</section>
	);
};
