// components/ProjectCard/ProjectCard.jsx
import styles from './ProjectCard.module.css';
import {Poppins} from 'next/font/google'


const poppins = Poppins({weight: ['400','500'], subsets:['latin']})

const ProjectCard = ({ imgSrc, name, feature }) => {
  return (
    <div className={`${styles.projectCard} ${poppins.className}`}>
      <img src={imgSrc} alt={name} />
      <div className={styles.projectDetails}>
        <p>{name}</p>
        <p style={{color: 'grey'}}>{feature}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
