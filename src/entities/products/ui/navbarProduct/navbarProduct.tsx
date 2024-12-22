'use client'
import { FC } from 'react'
import s from './navbarProduct.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IRoute {
    href: string
    title: string
    id: number
}
const routes: IRoute[] = [
    {
        href: "/products/all",
        title: "Все слова",
        id: 1,
    },
    {
        href: "/products/learn",
        title: "Изученные слова",
        id: 2
    },
    {
        href: "/products/nolearn",
        title: "Не изученные слова",
        id: 3
    },
]


const NavbarProduct: FC = () => {
    const pathname = usePathname()

    return <nav className={s.NavbarProduct}>
        <ul className={s.NavbarProduct__conteiner}>
            {routes.map(item => <Link href={item.href} className={item.href == pathname ? s.NavbarProduct__linkActive : s.NavbarProduct__link} key={item.id}><li className={s.NavbarProduct__item} >
                {item.title}
            </li></Link>)}
            <Link href={'/create'} className={s.NavbarProduct__link}>
                <li className={s.NavbarProduct__item} >
                    Создать
                </li>
            </Link>
        </ul>
    </nav>
}


export default NavbarProduct