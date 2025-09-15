import Breadcrumb from "./ui/Breadcrumb";
import Background from "../assets/breadcrumb-banner.jpg";
import FadeIn from "./ui/FadeIn";

function BreadcrumbSection({ image = Background, title }) {
    return (
        <div
            className="relative h-[350px] bg-cover bg-center bg-no-repeat flex items-center px-2 sm:px-12 lg:px-16 gap-6"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="relative z-10 flex flex-col gap-4">
                <FadeIn direction="down" duration={0.5} delay={0.08} >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-snug tracking-wide font-extrabold text-white">{title}</h1>
                </FadeIn>
                <FadeIn
                    direction="up"
                    duration={0.5}
                    delay={0.08}
                    className="text-gray-300"
                >
                    <Breadcrumb />
                </FadeIn>
            </div>
        </div>
    )
}

export default BreadcrumbSection