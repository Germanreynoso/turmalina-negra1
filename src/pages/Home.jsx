import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Benefits from '../components/Benefits'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <Benefits />
                <Gallery />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    )
}
