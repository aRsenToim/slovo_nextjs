import { FC } from 'react'
import s from './blockInfo.module.scss'


interface IProps {
    title: string
    desc: string
}

const BlockInfo: FC<IProps> = ({title, desc}) => {
    return <div className={s.BlockInfo}>
        <h1 className={s.BlockInfo__title}>{title}</h1>
        <p className={s.BlockInfo__desc}>{desc}</p>
    </div>
}


export default BlockInfo