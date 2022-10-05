import { forwardRef } from 'react';
import styles from '@/app/styles/ui/Field.module.scss';
import { IField } from '@/app/interfaces/IField';

const Field = forwardRef<HTMLInputElement, IField>(
	({ label, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<label>
					{label}
					<input ref={ref} type={type} autoComplete='off' {...rest} />
				</label>
				{error && (
					<div className={styles.error}>
						<div className={styles.circle}>
							<div />
							<div />
						</div>
						<span>{error.message}</span>
					</div>
				)}
			</div>
		);
	}
);

Field.displayName = 'Field';

export default Field;
