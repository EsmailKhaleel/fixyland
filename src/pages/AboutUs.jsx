import AboutUsBreadcrumbImage from '../assets/breadcrumb-banner.jpg'
import BreadcrumbSection from '../components/BreadcrumbSection'
import Activities from '../sections/AboutUs/Activities'
import Clents from '../sections/AboutUs/Clents';
import CountUpSection from '../sections/AboutUs/CountUpSection'
import ExperienceVideoSection from '../sections/AboutUs/ExperienceVideoSection';
import Skills from '../sections/AboutUs/Skills';
import Staff from '../sections/AboutUs/Staff';

function AboutUs() {
  return (
    <main>
      <BreadcrumbSection title="About Us" image={AboutUsBreadcrumbImage} />
      <Activities />
      <CountUpSection />
      <Skills />
      <ExperienceVideoSection />
      <Staff />
      <Clents />
    </main>
  )
}

export default AboutUs