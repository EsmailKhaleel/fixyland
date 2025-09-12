import BreadcrumbSection from "../components/BreadcrumbSection"
import SubscribeSection from "../components/SubscribeSection"
import GallerySection from "../sections/OurGallery/GallerySection"

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