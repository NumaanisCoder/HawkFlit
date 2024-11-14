import React from 'react'
import styles from '@/styles/PricingStyle.module.css'
import Boxes from '@/components/Boxes/Boxes'
import { Dancing_Script, Poppins, Ubuntu } from 'next/font/google'
import PriceCard from '@/components/PriceCard/PriceCard'
import data from '@/Data/Subscription.json';
import FaqCard from '@/components/FaqCard/FaqCard'
import Head from 'next/head'






// Font imports
const ubuntu = Ubuntu({ weight: ['500', '700'], subsets: ['latin'] });
const dancing = Dancing_Script({ weight: ['500', '700'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });


const services = () => {
    return (
        <div className={styles.parent}>
            <Head>
                <title>Our Pricing - Hawkflit</title>
                <meta name="description" content="Hawkflit delivers expert web & app development, graphic design, and digital marketing to help businesses succeed online." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                
                <div className={styles.Banner}>
                    <span className={`${dancing.className} ${styles.bannerTextOne}`}>Discover your perfect plan</span>
                    <h2 className={`${ubuntu.className} ${styles.bannerTextTwo}`}>
                    Our Pricing Plans
                    </h2>
                    <span className={`${poppins.className} ${styles.bannerTextThree}`}>
                    Choose the plan that best suits your needs and budget.
                    <br />
                    Get exceptional design services tailored to your requirements.
                    </span>

                </div>


                {/* Background squares layer */}
                <div className={styles.backgroundWrapper}>
                    <Boxes />
                </div>


             
            </main>


<section className={styles.priceSection}>
<div className={styles.priceCardContainer}>
                    {
                        data?.map((value,index)=>(
                            <PriceCard data={value} key={index}/>
                        ))
                    }
                   
                </div>
</section>
          
          <section className={styles.faqSection}>
          <div className={styles.reviewHead}>
          <h5>Frequently asked Questions</h5>
        </div>
        <div className={styles.faqContainer}>
        <FaqCard question={"What is included in the Carve plan?"} answer={"The Carve plan includes a one-week design sprint, one revision per request, up to 1 meeting per week, dev-ready Figma files, 5-day availability, Slack + Ticketing system, and an average 3-day delivery time."} />
<FaqCard question={"Who is the Forge plan best suited for?"} answer={"The Forge plan is ideal for startups and scaleups seeking ongoing design support and growth. It offers priority support, unlimited revisions per request, and up to 2 meetings per week."} />
<FaqCard question={"What does the Foundry plan offer for agencies?"} answer={"The Foundry plan provides custom solutions for agencies, including unlimited requests, unlimited revisions, flexible meetings, dev-ready Figma files, urgent support calls, and an average 3-day delivery."} />
<FaqCard question={"Can I get more meetings if needed?"} answer={"Yes, the Foundry plan offers flexible meeting options to cater to specific needs."} />
<FaqCard question={"What is the average delivery time for requests?"} answer={"Carve has an average delivery time of 3 days, Forge averages 3-4 days, and Foundry offers an average 3-day delivery for each request."} />

        </div>
          </section>
            
        </div>
    )
}

export default services