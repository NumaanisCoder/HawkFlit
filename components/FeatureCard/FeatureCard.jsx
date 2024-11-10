import dynamic from 'next/dynamic';
import styles from './FeatureCard.module.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500'], subsets: ['latin'] });

// Dynamically import the Lottie component, disabling server-side rendering
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const FeatureCard = ({ animationData, title, description }) => {
  return (
    <div className={`${styles.featureCard} ${poppins.className}`}>
      {/* Render the Lottie animation */}
      <Lottie animationData={animationData} className={styles.lottieIcon} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
