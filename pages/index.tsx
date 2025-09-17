import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Properties from "../components/Properties";
import RERA from "../components/RERA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Niza Kareem - RERA Registered Real Estate Agent | Kottayam
        </title>
        <meta
          name="description"
          content="Niza Kareem - RERA Registered Real Estate Agent in Kottayam. Find your dream property with Day Dream Realtors professional real estate services. RERA Certificate: K-RERA/AG/0124/2025"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="real estate, property, Kottayam, Kerala, RERA registered, Niza Kareem, Day Dream Realtors, apartments, villas, houses, property agent, real estate agent, Kerala property, Kottayam property"
        />
        <meta name="author" content="Niza Kareem" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://daydreamrealtors.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daydreamrealtors.com/" />
        <meta
          property="og:title"
          content="Niza Kareem - RERA Registered Real Estate Agent | Kottayam"
        />
        <meta
          property="og:description"
          content="Find your dream property with Day Dream Realtors professional real estate services. RERA Certificate: K-RERA/AG/0124/2025"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://daydreamrealtors.com/" />
        <meta
          property="twitter:title"
          content="Niza Kareem - RERA Registered Real Estate Agent | Kottayam"
        />
        <meta
          property="twitter:description"
          content="Find your dream property with Day Dream Realtors professional real estate services. RERA Certificate: K-RERA/AG/0124/2025"
        />
      </Head>

      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Properties />
        <RERA />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}
