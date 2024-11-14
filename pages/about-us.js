import React from 'react'
import styles from '@/styles/AboutUsStyle.module.css'
import { Ubuntu, Dancing_Script, Poppins } from "next/font/google";
import Boxes from '@/components/Boxes/Boxes';
import FeatureCard from '@/components/FeatureCard/FeatureCard';
import data from '@/Data/Values.json'
import Link from 'next/link';
import Head from 'next/head';




// Font imports
const ubuntu = Ubuntu({ weight: ['500', '700'], subsets: ['latin'] });
const dancing = Dancing_Script({ weight: ['500', '700'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });

const AboutUs = () => {
  return (
    <div className={styles.parent}>
        <Head>
        <title>Hawkflit - About us</title>
        <meta name="description" content="Hawkflit delivers expert web & app development, graphic design, and digital marketing to help businesses succeed online." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        </Head>
         <main className={styles.main}>
        <div className={styles.Banner}>
          <span className={`${dancing.className} ${styles.bannerTextOne}`}>Get to know us</span>
          <h2 className={`${ubuntu.className} ${styles.bannerTextTwo}`}>
          About Hawkflit
          </h2>
          <span className={`${poppins.className} ${styles.bannerTextThree}`}>
          Hawkflit delivers expert web & app development, graphic design, and digital marketing to help businesses succeed online.
          </span>
          <Link href={'/contact-us'} className={`${styles.bookContainer} ${poppins.className}`}>
            Book a call
          </Link>
        </div>
        {/* Background squares layer */}
        <div className={styles.backgroundWrapper}>
          <Boxes />
        </div>
      </main>

      <section className={styles.valueSection}>
        <div className={styles.valueHead}>
            <h3>Our Values</h3>
        </div>
        <div className={styles.featuresContainer}>
            {data.map((value,index)=>(
                <FeatureCard imgURL={value.icon} title={value.title} description={value.description} key={index}/>
            ))}

        </div>
      </section>

      <section className={styles.teamSection}>

      <div className={styles.introductionContainer}>
    <h4>Who are we?</h4>
    <p>
        At Hawkflit, we're a team of dedicated experts with a passion for creating digital experiences that drive impact. 
        With a robust expertise in web development, app development, graphic design, and digital marketing, we help 
        businesses carve a unique digital identity. 
        
        <br />
        <br />
        
        Whether it's crafting responsive websites, building feature-rich applications, designing eye-catching visuals, or 
        developing effective marketing strategies, our approach is always detail-oriented, creative, and customized to fit 
        your brand's goals. Our mission? To empower your digital journey with tailored solutions that truly resonate. 
        Partner with us, and let's take your business to new heights together.
    </p>
</div>



        <div className={styles.founderSection}>

            <div className={styles.founderSectionHeader}>
                    <h3>Our Team</h3>
            </div>

            <div className={styles.founderCardContainer}>
            

<div className={styles.card}>
    <img src="https://ik.imagekit.io/94nzrpaat/Hawkflit/amaan.JPG?updatedAt=1716993517802" alt="Mohammad Amaan" />
    <div className={styles.cardInfo}>
        <span className={dancing.className}>Our Lead Developer</span>
        <h3>Mohammad Amaan</h3>
        <p>
            Hello 👋 I'm <strong>Mohammad Amaan</strong>, a tech lead with a knack for transforming complex technical concepts into actionable, scalable solutions. With a solid foundation in software engineering, my experience spans across various domains including <strong>backend systems</strong>, <strong>API development</strong>, and <strong>cloud integrations</strong>. I'm passionate about creating seamless and reliable digital environments that drive business goals.
            <br /><br />
            In my role, I focus on making informed decisions that enhance <strong>performance</strong>, <strong>security</strong>, and <strong>usability</strong>. I thrive on building and leading tech-driven projects, always ensuring our technology aligns with the evolving needs of our users and clients.
        </p>
    </div>
</div>


<div className={styles.card}>
    <img src="https://ik.imagekit.io/xnrxbagp7/Untitled%20design.png?updatedAt=1731421860269" alt="Numaan Qureshi" />
    <div className={styles.cardInfo}>
        <span className={dancing.className}>Our Lead Developer</span>
        <h3>Numaan Qureshi</h3>
        <p>
            Hey there 👋 I'm <strong>Numaan Qureshi</strong>, a dedicated <strong>full-stack developer</strong> and tech enthusiast on a mission to deliver digital solutions that not only work efficiently but also resonate with users. My journey into technology started early, fueled by a relentless curiosity to understand how things work. Over the years, I have cultivated a deep understanding of both <strong>front-end and back-end technologies</strong>, designing and deploying a diverse range of applications and websites.
            <br /><br />
            My passion extends to experimenting with <strong>emerging technologies</strong>, refining <strong>user experiences</strong>, and creating streamlined <strong>codebases</strong>. Whether it's building intuitive UI/UX or ensuring scalable backend architecture, I believe every line of code is a step towards solving real-world problems.
        </p>
    </div>
</div>

<div className={styles.card}>
    <img src="https://ik.imagekit.io/94nzrpaat/Hawkflit/WhatsApp%20Image%202024-05-29%20at%2021.32.17_20a17324.jpg?updatedAt=1716998676592" alt="Mohd Faraz" />
    <div className={styles.cardInfo}>
        <span className={dancing.className}>Our Lead Developer</span>
        <h3>Mohd Faraz</h3>
        <p>
            Hi 🌟 I'm <strong>Mohd Faraz</strong>, a creative designer who blends artistry with functionality to craft visually compelling digital products. With a background in graphic design and a flair for innovation, I specialize in <strong>UI/UX design</strong>, <strong>branding</strong>, and creating experiences that captivate users and bring brands to life.
            <br /><br />
            My work is rooted in a deep understanding of <strong>color theory</strong>, <strong>typography</strong>, and <strong>user behavior</strong>. Whether it’s designing a sleek website or an engaging app interface, I believe in pushing creative boundaries to deliver designs that are both beautiful and intuitive.
        </p>
    </div>
</div>

            </div>
        </div>


        
        </section>           
    </div>
  )
}

export default AboutUs