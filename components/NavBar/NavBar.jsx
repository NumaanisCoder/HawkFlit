import React from 'react'
import style from './NavBar.module.css'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { faBars, faMagnifyingGlass, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })

const NavBar = () => {
  return (
    <nav className={`${style.parent} ${poppins.className}`}>
        <div className={style.imageContainer}>
            <img src="./hawkflit.png" alt="Logo" /> Hawkflit
        </div>

        <ul className={style.menuContainer}> 
            <li><Link href="/">Services</Link></li>
            <li><Link href="/">Case Studies</Link></li>
            <li><Link href="/">Prices</Link></li>
            <li><Link href="/">About</Link></li>
        </ul>

        <div className={style.bookContainer}>
            Book a call
        </div>

        <div className={style.mobileMenuButton}>
                <FontAwesomeIcon icon={faBars} />
        </div>
    </nav>
  )
}

export default NavBar
