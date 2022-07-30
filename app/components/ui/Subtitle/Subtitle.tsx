import { FC, PropsWithChildren } from 'react'
import styles from './Subtitle.module.scss'
import { ISubtitle } from '@/components/ui/Subtitle/Subtitle.interface'

const Subtitle: FC<PropsWithChildren<ISubtitle>> = ({title, children}) => {
    return <div className={styles.subtitle}>
        <div className={styles.icon}>
            {children}
        </div>
        <h2>{title}</h2>
    </div>
}

export default Subtitle