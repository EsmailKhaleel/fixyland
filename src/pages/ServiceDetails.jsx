import BreadcrumbSection from "../components/BreadcrumbSection"
import CallNowCard from "../components/CallNowCard"
import CategoriesList from "../components/CategoriesList"
import DownloadCard from "../components/DownloadCard"
import FadeIn from "../components/ui/FadeIn"
import ServiceData from "../sections/ServiceDetails/ServiceData"

function ServiceDetails() {
    return (
        <main>
            <BreadcrumbSection title="Service Details" />
            <section className="relative w-full overflow-hidden section-padding bg-primary-light grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-10">
                    <ServiceData />
                    <div className="w-full flex flex-col gap-6 lg:gap-10">
                        <FadeIn direction="up" delay={0.6}>
                            <CategoriesList />
                        </FadeIn>
                        <FadeIn direction="up" delay={0.8}>
                            <CallNowCard />
                        </FadeIn>
                        <FadeIn direction="up" delay={1}>
                            <DownloadCard />
                        </FadeIn>
                    </div>
            </section>
        </main>
    )
}

export default ServiceDetails