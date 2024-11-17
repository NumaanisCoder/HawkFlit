import { useState, useEffect } from "react";
import styles from "@/styles/contact-us.module.css";
import Head from "next/head";
import { useSnackbar } from "notistack";

function ContactUs() {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "08da09b6-aa22-4e64-a195-99acfdacff5e");

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
        setMessage("Thanks for contacting us! We'll be in touch shortly.");
        setMessageColor("green");
        enqueueSnackbar("Response Submitted!", { variant: "success" });
      } else {
        setMessage("Failed to submit form. Please try again.");
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
        <title>Hawkflit - Contact us</title>
        <meta
          name="description"
          content="Submit your queries through form, one of our team member will get in touch with you soon."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Home - Hawkflit" />
        <meta
          property="og:description"
          content="Submit your queries through form, one of our team member will get in touch with you soon."
        />
        <link rel="canonical" href="https://wwww.hawkflit.com/contact-us" />

        <meta property="og:image" content="https://www.hawkflit.com/el.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/el.png" sizes="any" />
      </Head>
      <div className={styles.root}>
        <section className={styles.mainContainer}>
          <div className={styles.addressContainer}>
            <h2>Address</h2>
            <p>Hawkflit</p>
            <p>Bazaria Khansama, Rampur - 244901, U.P., India</p>
            <a href="mailto:info@hawkflit.com">info@hawkflit.com</a>
            <a href="tel:+919410929946">+91 9410929946</a>
          </div>
          <div className={styles.formMainContainer}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
              <h2>Contact form</h2>
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
                name="category"
                id="category"
                placeholder="Category"
                required
                minLength="3"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                required
                minLength="3"
              ></textarea>
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
        <section className={styles.mapContainer}>
          <h2>
            Find us on <span>Google map</span>
          </h2>
          <p>
          Discover our location with ease! We're here to help and welcome you to visit us. Use the map link to get accurate directions and see where we're located
          </p>
          <div className={styles.mapBind}>
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bazaria%20Khansama,%20Rampur,%20Uttarpradesh,%20India+(Hawkflit)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;