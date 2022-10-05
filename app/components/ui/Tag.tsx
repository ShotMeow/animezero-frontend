import styles from '@/app/styles/ui/Tag.module.scss';
import cn from 'classnames';

interface ITagProps {
	title: string | number;
	black?: boolean;
	bold?: boolean;
}

export default function Tag(props: ITagProps) {
	return (
		<div
			className={cn(
				styles.tag,
				{ [styles.bold]: props.bold },
				{ [styles.black]: props.black }
			)}
		>
			{props.title.toString()}
		</div>
	);
};
