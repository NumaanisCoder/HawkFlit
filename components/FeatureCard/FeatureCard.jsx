// components/FeatureCard/FeatureCard.jsx
import Lottie from 'lottie-react';
import styles from './FeatureCard.module.css';
import {Poppins} from 'next/font/google'


const poppins = Poppins({weight: ['400','500'], subsets:['latin']})
const FeatureCard = ({ animationData, title, description }) => {
  return (
    <div className={`${styles.featureCard} ${poppins.className}`}>
      <Lottie animationData={animationData} className={styles.lottieIcon} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
