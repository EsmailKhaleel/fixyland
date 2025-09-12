import BreadcrumbSection from '../components/BreadcrumbSection'
import ContactSection from '../sections/StaffDetails/ContactSection'
import DataSection from '../sections/StaffDetails/DataSection'
function StaffDetails() {
  return (
    <main>
      <BreadcrumbSection title="Staff Details" />
      <div className='relative bg-primary-light w-full'>
        <ContactSection />
        <DataSection />
      </div>
    </main>
  )
}

export default StaffDetails