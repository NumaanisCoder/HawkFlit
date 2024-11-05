import React from 'react'
import style from './FaqCardStyle.module.css';

const FaqCard = ({question, answer}) => {
  return (
    <details className={style.container}>
        <summary className={style.summaryQ}>
            {"Q: "+question
            } <span>
                +
                </span></summary>
            <p>
            {answer}
            </p>
    </details>
  )
}

export default FaqCard