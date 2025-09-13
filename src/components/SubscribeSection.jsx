import BackgroundShape from '../assets/shape-1.svg'
import FadeIn from './ui/FadeIn'
import MainButton from './ui/MainButton'
function SubscribeSection() {
    return (
        <section className="relative bg-primary w-full section-padding flex flex-col justify-center lg:flex-row lg:justify-between gap-8 items-center">
            <FadeIn delay={0.2} direction='left' className="flex-4">
                <h2 className="text-[40px] font-extrabold text-white text-center lg:text-left">We Offer Every Month 20% Off for Our All Subscribers</h2>
            </FadeIn>
            <FadeIn delay={0.4} direction='right' className={"w-full flex-3 flex justify-center lg:justify-end"}>
                <div className="w-full max-w-2xl">
                    <div className="flex flex-col items-center gap-6 sm:flex-row relative">
                        <input type="email" placeholder="Enter your email"

                            className="px-4 py-5 rounded-sm bg-white w-full pr-32 focus:outline-none"
                        />
                        <div className="sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2">
                            <MainButton
                                label='Subscribe'
                                textColor='black'
                                textColorHover='white'
                                color='secondary'
                                colorHover='black'
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 top-0 z-0">
                    <img src={BackgroundShape} className="w-full h-full object-cover" />
                </div>
            </FadeIn>
        </section>
    )
}

export default SubscribeSection