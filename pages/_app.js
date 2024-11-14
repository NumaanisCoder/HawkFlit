import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/hawkflit.png" type="image/png" />
      </Head>
      <div className={poppins.className}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
