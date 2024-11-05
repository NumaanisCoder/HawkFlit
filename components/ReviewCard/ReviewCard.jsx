import React from 'react'
import style from './ReviewCardStyle.module.css'

const ReviewCard = ({description, clientImage, clientName, clientCompany}) => {
  return (
    <div className={style.reviewCard}>
        <div className={style.description}>
            {description}
        </div>
        <div className={style.clientInfoContainer}>
            <div className={style.clientImageContainer}>
            <img src={clientImage} alt={clientName} />
            </div>
            <div className={style.clientDetails}>
                <p>{clientName}</p>
                <span>{clientCompany}</span>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard