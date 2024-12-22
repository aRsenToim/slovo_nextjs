"use client"

import { FC, useEffect, useState } from 'react'
import s from './createForm.module.scss'

interface IProps {
    createProduct: (title: string, desc: string) => void
}


const CreateForm: FC<IProps> = ({createProduct}) => {
    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [isPopup, setIsPopup] = useState<boolean>(false)

    useEffect(() => {
        if(isPopup){
            setTimeout(() => {
                setIsPopup(false)
            }, 3000);
        }
    })

    return <div className={s.CreateForm}>
        <h1 className={s.CreateForm__title}>Добавить слово</h1>
        <div className={s.CreateForm__block}>
            <label className={s.CreateForm__label}>Введите название слова</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)} className={s.CreateForm__input} />
        </div>
        <div className={s.CreateForm__block}>
            <label className={s.CreateForm__label}>Введите описание</label>
            <textarea className={s.CreateForm__textarea} value={desc} onChange={e => setDesc(e.currentTarget.value)} name="" id=""></textarea>
        </div>
        <button className={s.CreateForm__button} onClick={() => {
            createProduct(title, desc)
            setDesc('')
            setTitle('')
            setIsPopup(true)
        }}>Добавить</button>
        {isPopup && <div className={s.CreateForm__alert}>Запись создана</div>}
    </div>  
}


export default CreateForm