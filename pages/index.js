import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Ubuntu, Dancing_Script, Poppins } from "next/font/google";
import Boxes from "@/components/Boxes/Boxes";

import Pen from '../public/assets/pen.json';
import Computer from '../public/assets/computer.json';
import Clock from '../public/assets/clock.json';
import Money from '../public/assets/money.json';
import Check from '../public/assets/check.json';
// import Person from '../public/assets/person.json';
import Person from '../public/assets/person.json'

import ServiceCard from "@/components/ServiceCard/ServiceCard";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useEffect, useRef, useState } from "react";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import FaqCard from "@/components/FaqCard/FaqCard";
import Link from "next/link";


// Font imports
const ubuntu = Ubuntu({ weight: ['500', '700'], subsets: ['latin'] });
const dancing = Dancing_Script({ weight: ['500', '700'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });

export default function Home() {

  const ref = useRef();

  const [visibilityPercentage, setVisibilityPercentage] = useState(0);
  const [containerIsVisible, setContainerIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate the percentage of the element visible in the viewport
        const visiblePercentage = entry.intersectionRatio * 100;
        setVisibilityPercentage(visiblePercentage.toFixed(2)); // Keep it to 2 decimal places
      },
      {
        threshold: Array.from(Array(101).keys(), i => i / 100), // Create thresholds from 0% to 100%
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [visibilityPercentage]);

  useEffect(() => {
    if (count <= 0 && visibilityPercentage >= 50) {
      setContainerIsVisible(prev => !prev);
      setCount(prev => prev + 1);
    }
  }, [visibilityPercentage]);

  return (
    <div className={styles.parent}>
      <Head>
        <title>Hawkflit</title>
        <meta name="description" content="Hawkflit delivers expert web & app development, graphic design, and digital marketing to help businesses succeed online." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <main className={styles.main}>
        <div className={styles.Banner}>
          <span className={`${dancing.className} ${styles.bannerTextOne}`}>Welcome to Hawkflit</span>
          <h2 className={`${ubuntu.className} ${styles.bannerTextTwo}`}>
            Your partner studio for Web Development, App Development, UI/UX, SEO, and Analytics.
          </h2>
          <span className={`${poppins.className} ${styles.bannerTextThree}`}>
            Designing stunning products, visuals, brands, and websites
          </span>
          <Link href="/contact-us" className={`${styles.bookContainer} ${poppins.className}`}>
            Book a call
          </Link>
        </div>
        {/* Background squares layer */}
        <div className={styles.backgroundWrapper}>
          <Boxes />
        </div>
      </main>

      {/* Marquee section */}
      <div className={`${styles.marqueeContainer} ${poppins.className}`}>
        <img src="/marquee/img-bridge.svg" alt="image bridge" className={styles.imgBridge} />
        <div className={styles.marquee}>
          <img src="/marquee/aws.svg" alt="" />
          <img src="/marquee/figma.svg" alt="" />
          <img src="/marquee/firebase.svg" alt="" />
          <img src="/marquee/github.svg" alt="" />
          <img src="/marquee/jira.svg" alt="" />
          <img src="/marquee/postman.svg" alt="" />
          <img src="/marquee/angular.svg" alt="" />
          <img src="/marquee/aws.svg" alt="" />
          <img src="/marquee/figma.svg" alt="" />
          <img src="/marquee/firebase.svg" alt="" />
          <img src="/marquee/github.svg" alt="" />
          <img src="/marquee/jira.svg" alt="" />
          <img src="/marquee/postman.svg" alt="" />
          <img src="/marquee/angular.svg" alt="" />
          <img src="/marquee/aws.svg" alt="" />
          <img src="/marquee/figma.svg" alt="" />
          <img src="/marquee/firebase.svg" alt="" />
          <img src="/marquee/github.svg" alt="" />
          <img src="/marquee/jira.svg" alt="" />
          <img src="/marquee/postman.svg" alt="" />
          <img src="/marquee/angular.svg" alt="" />
          <img src="/marquee/aws.svg" alt="" />
          <img src="/marquee/figma.svg" alt="" />
          <img src="/marquee/firebase.svg" alt="" />
          <img src="/marquee/github.svg" alt="" />
          <img src="/marquee/jira.svg" alt="" />
          <img src="/marquee/postman.svg" alt="" />
          <img src="/marquee/angular.svg" alt="" />
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesParentContainer}>
        <h3 className={`${poppins.className} ${styles.serviceHeading}`}>
          How can we support you?
        </h3>

        <div className={styles.servicesContainer}>


          <ServiceCard imgSrc="/assets/img-ui.svg" title="UI/UX Design" description="Create user-friendly interfaces that enhance user experience and engagement." />
          <ServiceCard imgSrc="/assets/img-web.svg" title="Web Development" description="Build responsive and dynamic websites tailored to your business needs." />
          <ServiceCard imgSrc="/assets/img-branding.svg" title="SEO Development" description="Improve your website's visibility and ranking on search engines for better traffic." />

        </div>
      </div>

      {/* Features Section */}
      <section className={styles.featuresParentSection}>
        <div className={styles.featuresContainer}>
          <FeatureCard imgURL={'/stack.png'} alt={"stack"} title="Unlimited Design" description="Submit unlimited design requests with the flexibility to revise until every detail meets your expectations." />
          <FeatureCard imgURL={'/hourglass.png'} alt={"hour glass"} title="Quick Turnaround" description="Enjoy fast, reliable delivery for all your projects, ensuring efficiency and quality every step of the way." />
          <FeatureCard imgURL={'/person.png'} alt={"person"} title="Dedicated Designer" description="Work closely with a dedicated designer who truly understands your brand, values, and vision." />
          <FeatureCard imgURL={'/quality.png'} alt={"quality"} title="Quality Assurance" description="Our team guarantees that every design meets the highest standards of quality, creativity, and attention to detail." />
          <FeatureCard imgURL={'/dollar.png'} alt={"dollar"} title="Flexible Plans" description="Choose from a range of flexible pricing plans designed to fit your needs, budget, and project scope." />
          <FeatureCard imgURL={'/light.png'} alt={"light"} title="Creative Solutions" description="Access unique and innovative design solutions crafted to elevate your brand." />
        </div>
      </section>

      {/* Projects Section */}
      <div className={styles.projectParentContainer}>
        <div className={`${styles.projectHead} ${poppins.className}`}>
          <h4>Latest projects</h4>
          <p>Designing stunning products, visuals, brands, and websites: empowering startups and innovative companies to shine.</p>
        </div>
        <div className={styles.projectContainer}>
        <ProjectCard imgSrc="https://ik.imagekit.io/94nzrpaat/Projects/yc.jpg?updatedAt=1731242557511" name="Yameen Corporation" feature="E-commerce platform" />
          <ProjectCard imgSrc="https://ik.imagekit.io/94nzrpaat/Projects/pbrp.png?updatedAt=1731239084852" name="Pitch Black Recovery Project" feature="Company Portfolio" />
          <ProjectCard imgSrc="https://ik.imagekit.io/94nzrpaat/Projects/fa.png?updatedAt=1731241351598" name="FA Handicrafts" feature="Business Portfolio" />
          <ProjectCard imgSrc="https://ik.imagekit.io/94nzrpaat/Projects/wg.png?updatedAt=1731239564269" name="WebGrasper" feature="Blog Application" />
        </div>
        <a href="tel:+918077329438" className={`${styles.bookContainer} ${poppins.className}`}>
          Book a call
        </a>
      </div>
      <section className={styles.toolsSection}>
        <div className={styles.toolsContainer} ref={ref}>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread1 : ''}`}>
            <img src="/tools/ic-bootstrap.svg" alt="Bootstrap logo" style={styles.toolIcon} width="16px" />
            <span>Bootstrap</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread2 : ''}`}>
            <img src="/tools/ic-aws.svg" alt="aws logo" style={styles.toolIcon} width="16px" />
            <span>AWS</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread3 : ''}`}>
            <img src="/tools/ic-figma.svg" alt="figma logo" style={styles.toolIcon} width="16px" />
            <span>Figma</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread4 : ''}`}>
            <img src="/tools/ic-firebase.svg" alt="Firebase logo" style={styles.toolIcon} width="16px" />
            <span>Firebase</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread5 : ''}`}>
            <img src="/tools/ic-git.svg" alt="Github logo" style={styles.toolIcon} width="16px" />
            <span>GitHub</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread6 : ''}`}>
            <img src="/tools/ic-gpt.svg" alt="chatgpt logo" style={styles.toolIcon} width="16px" />
            <span>ChatGPT</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread7 : ''}`}>
            <img src="/tools/ic-illustrator.svg" alt="Illustrator logo" style={styles.toolIcon} width="16px" />
            <span>Illustrator</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread8 : ''}`}>
            <img src="/tools/ic-jira.svg" alt="Jira logo" style={styles.toolIcon} width="16px" />
            <span>Jira</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread9 : ''}`}>
            <img src="/tools/ic-office.svg" alt="Office logo" style={styles.toolIcon} width="16px" />
            <span>Office</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread10 : ''}`}>
            <img src="/tools/ic-ps.svg" alt="ps logo" style={styles.toolIcon} width="16px" />
            <span>Photoshop</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread11 : ''}`}>
            <img src="/tools/ic-vs.svg" alt="vs code logo" style={styles.toolIcon} width="16px" />
            <span>VS Code</span>
          </div>
          <div class={`${styles.toolItem} ${containerIsVisible ? styles.spread12 : ''}`}>
            <img src="/tools/ic-xd.svg" alt="Adobe xd logo" style={styles.toolIcon} width="16px" />
            <span>Adobe XD</span>
          </div>
        </div>
      </section>


      {/* ReviewSection */}
      <section className={styles.reviewSection}>

        <div className={styles.reviewHead}>
          <h5>Words of appreciation</h5>
          <p>Discover what our clients/partners have to say about our design services.</p>
        </div>

        <div className={styles.reviewCardContainer}>

          <ReviewCard
            description={"The team at Hawkflit went above and beyond to deliver a top-notch product that exceeded our expectations. Communication was seamless, and deadlines were always met."}
            clientName={"Alex Johnson"}
            clientCompany={"CEO, Techwave"}
            clientImage={"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"}
          />
          <ReviewCard
            description={"I was blown away by the professionalism and attention to detail. From start to finish, they kept us in the loop, turning our vision into reality. Highly recommended!"}
            clientName={"Jaspreet Singh"}
            clientCompany={"Founder, FinEdge Solutions"}
            clientImage={"https://thumbs.dreamstime.com/b/young-adult-indian-sikh-man-26551979.jpg"}
          />
          <ReviewCard
            description={"Working with this team has been a fantastic experience. Their expertise in custom software development has significantly boosted our operations. A true partner in our success!"}
            clientName={"Raj Mehta"}
            clientCompany={"CTO, GreenTree"}
            clientImage={"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg"}
          />
          <ReviewCard
            description={"Impressive work! They were able to pivot quickly when we needed adjustments and delivered exactly what we were looking for. Efficient, skilled, and easy to work with!"}
            clientName={"Leon Perez"}
            clientCompany={"Project Manager, BlueSky"}
            clientImage={"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBmYWNlc3xlbnwwfHwwfHx8MA%3D%3D"}
          />
          <ReviewCard
            description={"Hawkflit transformed our ideas into an intuitive, functional app. Their creativity and dedication truly set them apart. Our customers love the new features!"}
            clientName={"Ben Thompson"}
            clientCompany={"Co-Founder, SmartGrow"}
            clientImage={"https://images.unsplash.com/photo-1508341591423-4347099e1f19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"}
          />
          <ReviewCard
            description={"Amazing service and outstanding product quality! They’re skilled at finding innovative solutions and made the process enjoyable and stress-free. We couldn't be happier!"}
            clientName={"Sanjay Kapoor"}
            clientCompany={"Owner, Artistry Solutions"}
            clientImage={"https://thumbs.dreamstime.com/b/smiling-indian-man-looking-camera-mature-wearing-spectacles-portrait-middle-eastern-confident-businessman-office-195195079.jpg"}
          />



        </div>

        <div id="case-studies" className={styles.reviewHead}>
          <h5>Case studies</h5>
          <p>Explore our successful projects and see the impactful results we've delivered for our clients.</p>
        </div>

        <div className={styles.projectContainer}>
        <ProjectCard imgSrc="https://ik.imagekit.io/94nzrpaat/Projects/ae.png?updatedAt=1731241415823" name="Attar Electronics" feature="Business portfolio" />
          <ProjectCard imgSrc="https://ik.imagekit.io/94nzrpaat/Projects/sl.png?updatedAt=1731242332472" name="Sarte Living" feature="Business Portfolio" />
        </div>

        <div className={styles.reviewHead}>
          <h5>Frequently asked Questions</h5>
        </div>
        <div className={styles.faqContainer}>
          <FaqCard question={"What services does your company provide?"} answer={"We offer custom software development, web and mobile applications, and IT consulting."} />
          <FaqCard question={"How does your development process work?"} answer={"We follow an agile methodology to ensure flexibility and meet client needs at every stage."} />
          <FaqCard question={"What industries do you specialize in?"} answer={"Our expertise spans finance, healthcare, e-commerce, and more!"} />
          <FaqCard question={"Do you provide post-launch support?"} answer={"Yes, we offer comprehensive support and maintenance after launch."} />
          <FaqCard question={"How long does a typical project take?"} answer={"Project timelines vary, but we work to deliver efficiently without compromising quality."} />
        </div>


      </section>

      <section className={styles.otherProjectSection}>
        <div className={styles.otherProjectSectionHead}>
          <h5 className={dancing.className}>Other Projects We have Done</h5>
        </div>
        <div className={styles.projectMarquee}>

          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template.jpg.avif" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/electro-free-ecommerce-template.jpg.web" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/pillowmart-free-template.jpg.avif" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/timezone-free-template.jpg.avif" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/karma-free-template.jpg.avif" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/avision-free-template.jpg.webp" alt="" srcset="" />
          <img src="https://www.uiforge.design/assets/img/portfolio/img-slide-tech.webp" alt="" srcset="" />

        </div>
        <div className={styles.projectMarqueeTwo}>

          <img src="https://www.uiforge.design/assets/img/portfolio/img-slide-tech.webp" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/electro-free-ecommerce-template.jpg.web" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/timezone-free-template.jpg.avif" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/pillowmart-free-template.jpg.avif" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template.jpg.avif" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/avision-free-template.jpg.webp" alt="" srcset="" />
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/karma-free-template.jpg.avif" alt="" srcset="" />

        </div>



        <div className={styles.endingSection}>
          <h5>Ready to <span>transform</span> your brand?</h5>
          <p>Get started today and elevate your business with our expert web design services.
            <br />
            Contact us to discuss your project and discover how our web designer can help bring your vision to life.</p>

          <div className={`${styles.bookContainer} ${poppins.className}`} style={{ width: 'max-content' }}>
            Book a call
          </div>
        </div>

      </section>
    </div>
  );
}
