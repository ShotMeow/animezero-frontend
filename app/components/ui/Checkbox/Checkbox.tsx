import { Dispatch, FC, PropsWithChildren } from 'react'
import { Switch } from '@headlessui/react'
import { BiCheck } from 'react-icons/bi'
import styles from './Checkbox.module.scss'
import cn from 'classnames'

const Checkbox: FC<PropsWithChildren<{ enabled: boolean; setEnabled: Dispatch<boolean> }>> = ({
																								  enabled,
																								  setEnabled,
																								  children
																							  }) => {
	return (
		<Switch className={styles.checkbox} checked={enabled} onChange={setEnabled}>
			<span className={cn(styles.check, { [styles.enabled]: enabled })}>
				{enabled && <BiCheck />}
			</span>
			<span>{children}</span>
		</Switch>
	)
}

export default Checkbox
