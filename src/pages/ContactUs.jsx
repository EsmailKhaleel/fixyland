import BreadcrumbSection from '../components/BreadcrumbSection'
import ContactForm from '../sections/ContactUs/ContactForm'
import GetInTouchCard from '../sections/ContactUs/GetInTouchCard'
import BackgroundShape from '../assets/pattern-1.png'
import AddressSection from '../sections/ContactUs/AddressSection'
import FadeIn from '../components/ui/FadeIn'
function ContactUs() {
  return (
    <main>
      <BreadcrumbSection title="Contact Us" />
      <div className='relative bg-primary-light w-full'>
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 relative z-20 pt-26">
          <div className='w-full grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] z-20 gap-10 lg:gap-14 bg-gray-100 px-4 py-6 md:p-10 lg:p-12 rounded-lg'>
            <ContactForm />
            <FadeIn direction="left" delay={0.1}>
              <GetInTouchCard />
            </FadeIn>
          </div>
        </section>
        <section
          style={{ backgroundImage: `url(${BackgroundShape})` }}
          className="relative w-full overflow-hidden bg-primary z-0 pt-52 pb-32 -mt-35 md:-mt-52"
        >
          <AddressSection />
        </section>
      </div>
    </main>
  )
}

export default ContactUs