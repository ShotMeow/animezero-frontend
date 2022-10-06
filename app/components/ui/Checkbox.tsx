import { Dispatch, PropsWithChildren } from 'react';
import { Switch } from '@headlessui/react';
import { BiCheck } from 'react-icons/bi';
import styles from '@/app/styles/ui/Checkbox.module.scss';
import cn from 'classnames';

interface ICheckboxProps {
	enabled: boolean;
	setEnabled: Dispatch<boolean>;
}

export default function Checkbox(props: PropsWithChildren<ICheckboxProps>) {
	return (
		<Switch className={styles.checkbox} checked={props.enabled} onChange={props.setEnabled}>
			<span className={cn(styles.check, { [styles.enabled]: props.enabled })}>
				{props.enabled && <BiCheck />}
			</span>
			<span>{props.children}</span>
		</Switch>
	);
};
