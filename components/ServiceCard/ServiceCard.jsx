// components/ServiceCard/ServiceCard.jsx
import Image from 'next/image';
import styles from './ServiceCard.module.css';
import {Poppins} from 'next/font/google'


const poppins = Poppins({weight: ['400','500'], subsets:['latin']})


const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className={`${styles.serviceCard} ${poppins.className}`}>
      <img src={imgSrc} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
