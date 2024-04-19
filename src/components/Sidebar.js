"use client"; // This is a client component

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TiContacts } from 'react-icons/ti'
import { AiOutlineHome } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const sidebarLinks = [
    { label: ' Home', path: '/', targetSegment: null, icon: AiOutlineHome },
    { label: ' Tables', path: '/table', targetSegment: 'table', icon: BiNews },
    { label: ' Contact', path: '/contact', targetSegment: 'contact', icon: TiContacts },
]

const Sidebar = () => {

    const [ isCollapsed, setIsCollapsed ] = useState(false);

    const toggleSidebarCollapseHandler = () => {
        setIsCollapsed((prev) => !prev);
    }

    return (
        <div className='sidebar__wrapper h-screen sticky top-0'>
            <button className='sidebar__btn' onClick={toggleSidebarCollapseHandler}>
                {isCollapsed ? <MdOutlineKeyboardArrowRight /> : <MdOutlineKeyboardArrowLeft />}
            </button>
            <aside className="sidebar" data-collapsed={isCollapsed}>
                <div className="sidebar__top">
                    <Image
                        src="/logo.jpg"
                        width={80}
                        height={80}
                        className="sidebar__logo"
                        alt="logo"
                    />
                    <p className="sidebar__logo-name"   ><span className="text-2xl font-semibold">Q</span>uick<span className='text-2xl font-semibold'>S</span>ilver</p>
                </div>
                <ul className="sidebar__list">
                    {sidebarLinks.map(({label, icon: Icon, path}, i) => (
                        <li key={i} className="sidebar__items">
                            <Link href={path} className="sidebar__link">
                                <div className="sidebar__icon">
                                    <Icon />
                                </div>
                                <span className="sidebar__name">{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar
