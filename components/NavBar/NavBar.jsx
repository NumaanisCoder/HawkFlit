import React, { useState } from 'react';
import style from './NavBar.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Poppins } from 'next/font/google';

const poppins = Poppins({weight: ['400','500'], subsets:['latin']});

const NavBar = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // Assuming login state is managed here

  const menuProvider = () => {
    if (window.innerWidth < 858) {
      setIsChecked(false);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const logout = () => {
    // Add logout functionality here
    setIsLogin(false);
  };

  return (
    <nav className={style.parent}>
      <input
        type="checkbox"
        id="check"
        className={style.check}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="check" className={style.checkbtn}>
        <FontAwesomeIcon icon={isChecked ? faTimes : faBars} />
      </label>
      <label>
        <Link className={`${style.Logo} ${style.protestStrikeRegular} ${poppins.className}`} href="/" onClick={menuProvider}>
        <img src="/hawkflit.png" alt="" />
          Hawkflit
        </Link>
      </label>
      <ul className={style.navUl}>
      
        <li className={style.navLi}>
          <Link href="/services" onClick={menuProvider}>
            Services
          </Link>
        </li>
        <li className={style.navLi}>
          <Link href="/about-us" onClick={menuProvider}>
            Case Studies
          </Link>
        </li>
        <li className={style.navLi}>
          <Link href="/about-us" onClick={menuProvider}>
           Pricing
          </Link>
        </li>
        <li className={style.navLi}>
          <Link href="/about-us" onClick={menuProvider}>
            About
          </Link>
        </li>
        <li>
        <div className={`${style.bookContainer} ${poppins.className}`} style={{width: 'fit-content'}}>
            Book a call
          </div>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
