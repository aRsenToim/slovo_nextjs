"use client"

import { FC, useState } from 'react'
import s from './product.module.scss'
import Image from 'next/image'

interface IProps {
    title: string
    desc: string
    isLearn: boolean
    deleteProduct: () => void
    changeProduct: (desc: string) => void
}

const Product: FC<IProps> = ({ title, desc, isLearn, deleteProduct, changeProduct }) => {
    const [isChange, setIsChange] = useState<boolean>()
    const [isDesc, setIsDesc] = useState<string>(desc)
    return <div className={s.Product}>
        {isChange ? <div className={s.Product__change}>
            <div className={s.Change}>
                <label className={s.Change__label}>Введите новое описание</label>
                <textarea className={s.Change__textarea} value={isDesc} onChange={e => setIsDesc(e.target.value)} name="" id=""></textarea>
            </div>
            <button className={s.Change__button} onClick={() => {
                changeProduct(isDesc)
                setIsChange(false)
                }}>Изменить</button>
        </div> : <div className={s.Product__info}>
            <h1 className={s.Product__title}>{title}</h1>
            <p className={s.Product__desc}>{desc}</p>
            {isLearn ? <div className={s.Product__isLearn}>
                Изучено
            </div> : <div className={s.Product__noisLearn}>
                Не изучено
            </div>}
            <p className={s.Product__date}>12 января</p>
        </div>}
        <div className={s.Product__buttons}>
            <button className={s.Product__btn} onClick={deleteProduct}>
                <Image src={'/images/trash.svg'} alt='' width={30} height={30} />
            </button>
            <button className={s.Product__btn} onClick={() => {
                setIsChange(prev => !prev)
            }}>
                <Image src={'/images/change.png'} alt='' width={30} height={30} />
            </button>
        </div>
    </div>
}


export default Product