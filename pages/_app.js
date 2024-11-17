import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Add the Google Tag script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-V5XCECZ6JB";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-V5XCECZ6JB");
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/hawkflitnewlogo.png" type="image/png" />
        <meta
          name="google-site-verification"
          content="f9c5_PzRfCj9bG3corfANyFsbYaW3I90yMxyKfWpDLM"
        />
      </Head>
      <div className={poppins.className}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
