import React from 'react'
import style from './IndustrialCardStyle.module.css'

const IndustrialCard = ({img, name, info}) => {
  return (
    <div className={style.parent}>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{info}</p>
    </div>
  )
}

export default IndustrialCard