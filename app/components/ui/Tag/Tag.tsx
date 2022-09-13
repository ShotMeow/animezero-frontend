import { FC } from 'react';

import styles from './Tag.module.scss';
import cn from 'classnames';

const Tag: FC<{ title: number | string; black?: boolean; bold?: boolean }> = ({
	                                                                              title,
	                                                                              black,
	                                                                              bold
                                                                              }) => {
	return (
		<div
			className={cn(
				styles.tag,
				{ [styles.bold]: bold },
				{ [styles.black]: black }
			)}
		>
			{title}
		</div>
	);
};

export default Tag;
