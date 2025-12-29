import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import CallToAction from '@/components/sections/CallToAction'
// import CaseStudies from '@/components/sections/CaseStudies'
import Workflow from '@/components/sections/Workflow'
// import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <main className="relative">
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Services Section */}
            <Services />

            {/* Call to Action */}
            <CallToAction />

            {/* Case Studies - Commented out for future use */}
            {/* <CaseStudies /> */}

            {/* Workflow / Process Accordion */}
            <Workflow />

            {/* Team Section - Commented out for future use */}
            {/* <Team /> */}

            {/* Testimonials Carousel */}
            <Testimonials />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </main>
    )
}
