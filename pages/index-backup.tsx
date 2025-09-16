import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Properties from '@/components/Properties'
import RERA from '@/components/RERA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Krishna Sanjay - RERA Registered Real Estate Agent | Ernakulam</title>
        <meta 
          name="description" 
          content="Krishna Sanjay is a trusted RERA registered real estate agent in Ernakulam, Kerala. Find your dream property with professional guidance and transparent service. RERA Certificate: K-RERA/AG/0138/2025" 
        />
        <meta 
          name="keywords" 
          content="real estate agent, Ernakulam, Kerala, RERA registered, property, apartment, villa, house, Krishna Sanjay, Mulanthuruthy" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Krishna Sanjay - RERA Registered Real Estate Agent" />
        <meta property="og:description" content="Trusted RERA registered real estate agent in Ernakulam, Kerala. Professional property services with complete transparency." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishnasanjay-realestate.com" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Krishna Sanjay - RERA Registered Real Estate Agent" />
        <meta name="twitter:description" content="Trusted RERA registered real estate agent in Ernakulam, Kerala." />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Properties />
        <RERA />
        <Contact />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
