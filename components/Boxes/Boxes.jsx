import React from 'react';
import styles from './BoxStyle.module.css';

const Boxes = () => {
  // Number of squares you want to generate
  const squareCount = 260; 

  return (
    <div className={styles.squaresBackground}>
      {[...Array(squareCount)].map((_, index) => (
        <div key={index} className={styles.square}></div>
      ))}
    </div>
  );
};

export default Boxes;
