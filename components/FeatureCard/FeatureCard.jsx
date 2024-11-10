// components/FeatureCard/FeatureCard.jsx
// import Lottie from 'lottie-react';
import styles from './FeatureCard.module.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500'], subsets: ['latin'] });

// Dynamically import the Lottie component, disabling server-side rendering
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const poppins = Poppins({weight: ['400','500'], subsets:['latin']})
const FeatureCard = ({ imgURL, title, description }) => {
  return (
    <div className={`${styles.featureCard} ${poppins.className}`}>
      <img src={imgURL} alt="" className={styles.lottieIcon}/>
      <h5>
        {title.split(' ').map((word, index) => (
          <span key={index} style={{ display: 'block' }}>{word}</span>
        ))}
      </h5>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
