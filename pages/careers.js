import { useState, useEffect } from "react";
import styles from "@/styles/careers.module.css";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { Dancing_Script, Poppins, Ubuntu } from 'next/font/google'
import Boxes from "@/components/Boxes/Boxes";



// Font imports
const ubuntu = Ubuntu({ weight: ['500', '700'], subsets: ['latin'] });
const dancing = Dancing_Script({ weight: ['500', '700'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });

function Careers() {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "79b25fa1-5a5c-49f0-bcb8-8954ede49891");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setMessage("Thanks for applying! We'll review your application and get in touch shortly.");
        setMessageColor("green");
        enqueueSnackbar("Application Submitted!", { variant: "success" });
      } else {
        setMessage("Failed to submit application. Please try again.");
        setMessageColor("red");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setMessageColor("red");
    }
  }

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <Head>
        <title>Hawkflit - Careers</title>
        <meta
          name="description"
          content="Explore career opportunities at Hawkflit. Join our team and grow with us."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Careers - Hawkflit" />
        <meta
          property="og:description"
          content="Explore career opportunities at Hawkflit. Join our team and grow with us."
        />
        <link rel="canonical" href="https://www.hawkflit.com/careers" />

        <meta property="og:image" content="https://www.hawkflit.com/careers-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/careers-icon.png" sizes="any" />
      </Head>
      <div className={styles.root}>
      <main className={styles.main}>
      <div className={styles.Banner}>
    <span className={`${dancing.className} ${styles.bannerTextOne}`}>Join Our Team</span>
    <h2 className={`${ubuntu.className} ${styles.bannerTextTwo}`}>
        Build Your Future With Us
    </h2>
    <span className={`${poppins.className} ${styles.bannerTextThree}`}>
        Be a part of our dynamic and innovative team, where your skills and passion can make a real impact.
        Explore exciting career opportunities and grow with us.
    </span>
</div>
                {/* Background squares layer */}
                <div className={styles.backgroundWrapper}>
                    <Boxes />
                </div>
            </main>
        <section className={styles.mainContainer}>
          <div className={styles.jobOpeningContainer}>
            <h2>Current Job Openings</h2>
            <ul>
              <li>
                <h3>Frontend Developer</h3>
                <p>Location: Remote</p>
                <p>Experience: 2+ years</p>
                <p>Skills: React, JavaScript, CSS, HTML, Responsive Design</p>
              </li>
              <li>
                <h3>Backend Developer</h3>
                <p>Location: Remote</p>
                <p>Experience: 3+ years</p>
                <p>Skills: Node.js, Express, MongoDB, API Development, Cloud Services</p>
              </li>
              <li>
                <h3>UI/UX Designer</h3>
                <p>Location: On-site</p>
                <p>Experience: 1+ years</p>
                <p>Skills: Adobe XD, Figma, Sketch, Prototyping, User Research</p>
              </li>
              <li>
                <h3>Web Development Intern</h3>
                <p>Location: Remote</p>
                <p>Experience: Freshers welcome</p>
                <p>Skills: Basic HTML, CSS, JavaScript, WordPress (optional)</p>
              </li>
            </ul>
           
          </div>
          <div className={styles.formMainContainer}>
          <form  enctype="multipart/form-data" className={styles.formContainer} onSubmit={handleSubmit}>
  <h2>Apply Now</h2>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Name"
    required
    minLength="3"
  />
  <input
    type="email"
    name="email"
    id="email"
    placeholder="Email"
    required
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
  />
  <input
    type="text"
    name="position"
    id="position"
    placeholder="Position Applied For"
    required
    minLength="3"
  />
  <textarea
    name="message"
    id="message"
    placeholder="Tell us why you're a great fit for this role"
    required
    minLength="10"
  ></textarea>
  <input
    type="file"
    name="resume"
    id="resume"
    required
    accept=".pdf,.doc,.docx"
  />
  <button type="submit">Submit</button>
  {message && (
    <p
      style={{
        color: messageColor,
        marginTop: "10px",
        paddingLeft: "4px",
      }}
    >
      {message}
    </p>
  )}
</form>

          </div>
        </section>
        <section className={styles.teamContainer}>
          <h2>
            Join our <span>Team</span>
          </h2>
          <p>
            At Hawkflit, we believe in fostering talent and innovation. Be part of a
            dynamic team where your contributions make a real impact.
          </p>
        </section>
      </div>
    </>
  );
}

export default Careers;
