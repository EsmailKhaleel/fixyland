import BackgroundShape from '../../assets/shape-1.svg'
import FadeIn from '../../components/ui/FadeIn'
import MainButton from '../../components/ui/MainButton'
function SubscribeSection() {
    return (
        <section className="relative bg-primary w-full py-22 px-2 sm:px-12 md:px-16 flex flex-col justify-center lg:flex-row lg:justify-between gap-8 items-center">
            <FadeIn delay={0.2} direction='left' >
                <div className="max-w-2xl">
                    <h2 className="text-[40px] font-extrabold text-white text-center lg:text-left">We Offer Every Month 20% Off for Our All Subscribers</h2>
                </div>
            </FadeIn>
            <FadeIn delay={0.4} direction='right'>
                <div className="w-full max-w-xl min-w-[500px] ">
                    <div className="flex relative">
                        <input type="email" placeholder="Enter your email"

                            className="px-4 py-5 rounded-sm bg-white w-full pr-32 focus:outline-none"
                        />
                        <div className="absolute right-1 top-1/2 -translate-y-1/2">
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
                <div className="absolute left-0 bottom-0 top-0">
                    <img src={BackgroundShape} className="w-full h-full object-cover" />
                </div>
            </FadeIn>
        </section>
    )
}

export default SubscribeSection