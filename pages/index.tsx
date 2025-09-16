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
          Krishna Sanjay - RERA Registered Real Estate Agent | Ernakulam
        </title>
        <meta
          name="description"
          content="Krishna Sanjay - RERA Registered Real Estate Agent in Ernakulam. Find your dream property with our professional real estate services. RERA Certificate: K-RERA/AG/0138/2025"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="real estate, property, Ernakulam, Kochi, RERA registered, Krishna Sanjay, apartments, villas, houses, property agent, real estate agent, Kerala property, Ernakulam property"
        />
        <meta name="author" content="Krishna Sanjay" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://krishnasanjay.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishnasanjay.com/" />
        <meta
          property="og:title"
          content="Krishna Sanjay - RERA Registered Real Estate Agent | Ernakulam"
        />
        <meta
          property="og:description"
          content="Find your dream property with our professional real estate services. RERA Certificate: K-RERA/AG/0138/2025"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://krishnasanjay.com/" />
        <meta
          property="twitter:title"
          content="Krishna Sanjay - RERA Registered Real Estate Agent | Ernakulam"
        />
        <meta
          property="twitter:description"
          content="Find your dream property with our professional real estate services. RERA Certificate: K-RERA/AG/0138/2025"
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
