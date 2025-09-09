import BreadcrumbSection from "../components/BreadcrumbSection"
import GallerySection from "../sections/OurGallery/GallerySection"
import SubscribeSection from "../sections/OurGallery/SubscribeSection"

function OurGallery() {
  return (
    <main>
        <BreadcrumbSection title="Our Gallery" />
        <GallerySection />
        <SubscribeSection />
    </main>
  )
}

export default OurGallery