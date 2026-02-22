import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import About from '../components/About'
import Benefits from '../components/Benefits'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import BackToTop from '../components/BackToTop'

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <Services />
                <HowItWorks />
                <About />
                <Benefits />
                <Gallery />
                <Testimonials />
                <FAQ />
                <CTA />
            </main>
            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    )
}
