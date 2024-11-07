import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return <div className={poppins.className}>
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </div>
}
