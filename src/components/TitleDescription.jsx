import AnimatedText from './ui/AnimatedText'
import DashedLine from './ui/DashedLine'
import FadeIn from './ui/FadeIn'

function TitleDescription({ title, description }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0">
                <AnimatedText
                    text={title}
                    className="text-[32px] font-bold"
                    delay={0.2}
                />
                <DashedLine />
            </div>
            <FadeIn direction="up" delay={0.3}>
                <p className="text-gray-600 text-lg">{description}</p>
            </FadeIn>
        </div>
    )
}

export default TitleDescription