import React from 'react'
import styles from '@/styles/ServicesStyle.module.css'
import Boxes from '@/components/Boxes/Boxes'
import { Dancing_Script, Poppins, Ubuntu } from 'next/font/google'
import IndustrialCard from '@/components/IndustrialCard/IndustrialCard'
import Head from 'next/head'





// Font imports
const ubuntu = Ubuntu({ weight: ['500', '700'], subsets: ['latin'] });
const dancing = Dancing_Script({ weight: ['500', '700'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });


const services = () => {
    return (
        <div className={styles.parent}>
            <Head>
                <title>Our Services</title>
                <meta name="description" content="Hawkflit delivers expert web & app development, graphic design, and digital marketing to help businesses succeed online." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <div className={styles.Banner}>
                    <span className={`${dancing.className} ${styles.bannerTextOne}`}>Our Expertise</span>
                    <h2 className={`${ubuntu.className} ${styles.bannerTextTwo}`}>
                        Explore our services
                    </h2>
                    <span className={`${poppins.className} ${styles.bannerTextThree}`}>
                        We offer a wide range of services to help your brand stand out and succeed in the digital landscape.
                        Discover how we can bring your vision to life.
                    </span>

                </div>
                {/* Background squares layer */}
                <div className={styles.backgroundWrapper}>
                    <Boxes />
                </div>
            </main>


            <section className={styles.designProcessSection}>
                <div className={styles.designProcessHead}>
                    <h3>Our Development Process</h3>
                    <p>At Hawkflit, we follow a streamlined approach to deliver each project with technical precision and innovative solutions.
                        <br />
                        Here's how we turn your vision into reality:</p>
                </div>

                <div className={styles.processContainer}>

                    <div className={styles.processCard}>
                        <span className={dancing.className}>1</span>
                        <h5>Project Discovery & Planning</h5>
                        <p>We dive deep to understand your objectives, business needs, and user expectations, setting the stage with a clear strategy.</p>
                    </div>

                    <div className={styles.processCard}>
                        <span className={dancing.className}>2</span>
                        <h5>Design & Prototyping</h5>
                        <p>Our design team crafts interactive prototypes, ensuring the look, feel, and flow are exactly what you envision.</p>
                    </div>

                    <div className={styles.processCard}>
                        <span className={dancing.className}>3</span>
                        <h5>Development & Testing</h5>
                        <p>We bring designs to life with robust code, rigorously testing to ensure flawless functionality across devices.</p>
                    </div>

                    <div className={styles.processCard}>
                        <span className={dancing.className}>4</span>
                        <h5>Launch & Support</h5>
                        <p>After a successful launch, our team provides ongoing support to maintain, update, and enhance your product.</p>
                    </div>

                </div>
            </section>




            <section className={styles.cardContainer}>

                <div className={styles.card}>
                    <img src="https://www.uiforge.design/assets/img/portfolio/img-design-development.webp" alt="Web Development" />
                    <div className={styles.cardInfo}>
                        <div className={styles.cardInfoHead}>
                            <h5>Web Development</h5>
                            <p>Build responsive, fast, and secure websites that elevate your online presence and drive business growth.
                                From initial planning to final launch, we ensure every project is crafted to meet your unique goals.</p>
                        </div>

                        <div className={styles.features}>
                            <span>KEY FEATURES:</span>
                            <p><span>Responsive Design</span><span>SEO Optimization</span><span>Custom Backend</span></p>
                        </div>

                        <div className={styles.features}>
                            <span>TECHNOLOGIES:</span>
                            <p><span>React</span><span>Node.js</span><span>MongoDB</span><span>Next.js</span></p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/Untitled%20design%20%2826%29_0.png?itok=I4s2Lh6r" alt="App Development" />
                    <div className={styles.cardInfo}>
                        <div className={styles.cardInfoHead}>
                            <h5>App Development</h5>
                            <p>Design and develop robust, user-friendly mobile applications that engage users and drive business results.
                                From concept to deployment, we ensure your app provides a seamless experience across all devices.</p>
                        </div>

                        <div className={styles.features}>
                            <span>KEY FEATURES:</span>
                            <p><span>Cross-Platform Support</span><span>Intuitive UI</span><span>High Performance</span></p>
                        </div>

                        <div className={styles.features}>
                            <span>TECHNOLOGIES:</span>
                            <p><span>React Native</span><span>Flutter</span><span>Swift</span></p>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="https://digitaledenz.com/wp-content/uploads/2023/07/SEO-INOVATION-WEBSITE-WPML-2020.jpg" alt="SEO Services" />
                    <div className={styles.cardInfo}>
                        <div className={styles.cardInfoHead}>
                            <h5>SEO Services</h5>
                            <p>Boost your online visibility and drive organic traffic with targeted SEO strategies.
                                We optimize every aspect of your site to ensure it ranks higher and reaches the right audience.</p>
                        </div>

                        <div className={styles.features}>
                            <span>KEY FEATURES:</span>
                            <p><span>Keyword Research</span><span>On-Page Optimization</span><span>Content Strategy</span></p>
                        </div>

                        <div className={styles.features}>
                            <span>TECHNOLOGIES & TOOLS:</span>
                            <p><span>Google Analytics</span><span>Ahrefs</span><span>SEMrush</span></p>
                        </div>
                    </div>
                </div>


                <div className={styles.card}>
                    <img src="https://media.licdn.com/dms/image/D4D12AQHFymeR2tK9ZA/article-cover_image-shrink_720_1280/0/1655528485759?e=2147483647&v=beta&t=lUMDmtkYOLEpSgVw4n9oOTXpCldSrZcDToYsKZbXtcc" alt="Social Media Promotion" />
                    <div className={styles.cardInfo}>
                        <div className={styles.cardInfoHead}>
                            <h5>Social Media Promotion</h5>
                            <p>Increase your brand’s reach and engagement with tailored social media strategies.
                                From content creation to targeted campaigns, we help your brand connect with the right audience.</p>
                        </div>

                        <div className={styles.features}>
                            <span>KEY FEATURES:</span>
                            <p><span>Content Strategy</span><span>Audience Targeting</span><span>Engagement Boost</span></p>
                        </div>

                        <div className={styles.features}>
                            <span>PLATFORMS:</span>
                            <p><span>Facebook</span><span>Instagram</span><span>LinkedIn</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://learn.g2.com/hubfs/G2CM_FI978_Learn_Article_Images_%5BGraphic_Design%5D_V1b.png" alt="Graphic Designing" />
                    <div className={styles.cardInfo}>
                        <div className={styles.cardInfoHead}>
                            <h5>Graphic Designing</h5>
                            <p>Bring your brand to life with stunning visuals and creative designs that capture attention.
                                From logos to social media graphics, we design elements that resonate with your audience.</p>
                        </div>

                        <div className={styles.features}>
                            <span>KEY FEATURES:</span>
                            <p><span>Logo Design</span><span>Brand Identity</span><span>Custom Illustrations</span></p>
                        </div>

                        <div className={styles.features}>
                            <span>TOOLS & SOFTWARE:</span>
                            <p><span>Adobe Photoshop</span><span>Illustrator</span><span>Figma</span></p>
                        </div>
                    </div>
                </div>

            </section>


            <section className={styles.guidanceSection}>

                <h4>Need guidance on your next step?</h4>
                <p>Reach out, and we'll help you navigate through our services to find the perfect match for your needs.</p>
                <a href='tel:+918077329438' className={`${styles.bookContainer} ${poppins.className}`} style={{width: 'fit-content'}}>
            Book a call
          </a>

            </section>


            <section className={styles.targetSection}>
                <div className={styles.targetSectionHead}>
                        <h3>Industries we design for</h3>
                        <p>At UI Forge, we specialize in crafting tailored design solutions for a wide range of industries.
                            <br />
                        Explore the sectors where our expertise shines.</p>
                </div>

                <div className={styles.targetCardContainer}>
    <IndustrialCard 
        img={'https://ik.imagekit.io/xnrxbagp7/ic-ecommerce.svg?updatedAt=1731159667903'} 
        name={'Ecommerce'} 
        info={'Building online stores focused on user experience, enhancing shopping and boosting conversions.'} 
    />
    <IndustrialCard 
        img={'https://ik.imagekit.io/xnrxbagp7/ic-tech.svg?updatedAt=1731159667842'} 
        name={'Tech Startups'} 
        info={'Developing unique digital products that empower startups to excel in competitive markets.'} 
    />
    <IndustrialCard 
        img={'https://ik.imagekit.io/xnrxbagp7/ic-healtcare.svg?updatedAt=1731159667841'} 
        name={'Healthcare'} 
        info={'Creating healthcare apps that engage patients and streamline care processes effectively.'} 
    />
    <IndustrialCard 
        img={'https://ik.imagekit.io/xnrxbagp7/ic-finance.svg?updatedAt=1731159667874'} 
        name={'Finance'} 
        info={'Building secure financial apps that make complex tasks easy and user-friendly.'} 
    />
    <IndustrialCard 
        img={'https://ik.imagekit.io/xnrxbagp7/ic-education.svg?updatedAt=1731159667788'} 
        name={'Education'} 
        info={'Designing educational tools that improve accessibility and transform learning experiences.'} 
    />
    <IndustrialCard 
        img={'https://ik.imagekit.io/xnrxbagp7/ic-real-estates.svg?updatedAt=1731159667785'} 
        name={'Real Estate'} 
        info={'Developing property platforms that make buying and selling seamless, enhancing user satisfaction.'} 
    />
</div>

            </section>
        </div>
    )
}

export default services