import { FC } from 'react'
import s from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'


const Header: FC = () => {
    return <header className={s.Header}>
        <div className={s.Header__conteiner}>
            <Link href={'/'} className={s.Header__logo}>
                <Image src={'/images/logo.png'} alt='logo' width={50} height={50} />
            </Link>
            <ul className={s.Header__nav}>
                <li className={s.Header__item}>
                    <Link href={'/products/all'} className={s.Header__link}>
                        Кабинет
                    </Link>
                    <Link href={'/learn'} className={s.Header__link}>
                        Изучать
                    </Link>
                </li>
            </ul>
        </div>
    </header>
}


export default Header