import BreadcrumbSection from "../components/BreadcrumbSection"
import NotFoundSection from "../sections/NotFound/NotFoundSection"

function NotFound() {
  return (
    <main>
        <BreadcrumbSection title="404 Not Found" />
        <NotFoundSection />
    </main>
  )
}

export default NotFound