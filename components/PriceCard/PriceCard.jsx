import React from 'react'
import style from './PriceCardStyle.module.css'
import { Ubuntu, Dancing_Script, Poppins } from "next/font/google";


const dancing = Dancing_Script({ weight: ['500', '700'], subsets: ['latin'] });

const PriceCard = ({data}) => {
    const {planName, description, price, features} = data;
  return (
    <div className={style.parent}>
        <h3>{planName}</h3>
        <p>{description}</p>

        <div className={style.priceContainer}>
            <span className={dancing.className} style={{color: '#448ffe'}}>Starting from</span>
            <h4>{price}</h4>
            <div className={`${style.bookContainer}`}>
                Book a call
            </div>
        </div>

        <ul className={style.featuresContainer}>

            {features?.map((value,index)=>
            (
                <div className={style.feature}>
               <img src="https://www.uiforge.design/assets/img/template/ic-check.svg" alt="" /> <li key={index}>{value}</li>
               </div>
            ))}

        </ul>
    </div>
  )
}

export default PriceCard