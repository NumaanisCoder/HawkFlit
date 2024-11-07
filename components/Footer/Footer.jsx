import React from 'react'
import style from './FooterStyle.module.css';

const Footer = () => {
  return (
    <div className={style.footerSection}>

        <div className={style.companyInfoContainer}>
        <p>Hawkflit is an emerging IT solutions company specializing in web development, app development, design, SEO, and other IT services.</p>
<p>Since our inception, we've been dedicated to empowering businesses with innovative, tech-driven solutions. Let us bring your vision to life with a focus on quality and results.</p>

        </div>

        <div className={style.otherLinkContainer}>
            <img src="/hawkflit.png" alt="" />
            <p>© Copyright 2024 Hawkflit.</p>
            <a href="https://www.instagram.com/hawkflit" target='_blank'>Instagram</a>
        </div>
    </div>
  )
}

export default Footer