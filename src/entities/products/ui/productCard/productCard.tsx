import { FC } from 'react'
import s from './productCard.module.scss'
import Link from 'next/link'

interface IProps {
    title: string
    isLearn: boolean
    id: string
}

const ProductCard: FC<IProps> = ({title, isLearn, id}) => {
    return <>{isLearn ? <Link href={`/product/${id}`} className={s.ProductCardLearn}>{title}</Link> : <Link href={`/product/${id}`} className={s.ProductCardnoLearn}>{title}</Link>}</> 
}

export default ProductCard