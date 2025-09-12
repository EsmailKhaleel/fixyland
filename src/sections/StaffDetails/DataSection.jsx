import Background from '../../assets/pattern-1.png'
import DashedLine from '../../components/ui/DashedLine'
import FadeIn from '../../components/ui/FadeIn'
import SkillProgress from '../../components/ui/SkillProgress'
import skills from '../../data/skills'
function DataSection() {
    return (
        <section
            style={{ backgroundImage: `url(${Background})` }}
            className="relative px-4 sm:px-8 md:px-12 lg:px-16 bg-primary w-full z-0 pt-52 pb-32 -mt-35 md:-mt-28"
        >
            <div className='flex flex-col gap-16'>
                <div className='flex md:flex-row flex-col gap-8 md:gap-16 lg:gap-40 xl:gap-52 z-10'>
                    <FadeIn direction='up' delay={0.2}>
                        <div className='flex flex-col gap-4'>
                            <div className='w-36'>
                                <h2 className="text-2xl font-bold text-white">
                                    Biography
                                </h2>
                            </div>
                            <DashedLine color='bg-white' />
                        </div>
                    </FadeIn>
                    <div className='flex flex-col gap-4'>
                        <FadeIn direction='up' delay={0.3}>
                            <p className='text-white font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at tortor a lacus lacinia aliquam a quis mi. Nulla pulvinar quis mi ac feugiat. Morbi scelerisque nisl vel risus laoreet egestas. Aliquam erat volutpat. Nam egestas nec odio posuere fermentum. Nulla accumsan, leo eget rutrum dapibus, erat urna porttitor ex, in elementum sapien magna et nunc. Vivamus feugiat pharetra condimentum. Donec egestas, nibh quis ultrices imperdiet, urna quam consequat arcu, et aliquet sapien sem in quam. Nunc molestie, ipsum quis convallis iaculis, dui felis dictum dui, vel vehicula magna arcu id arcu. Aenean imperdiet consequat aliquam.</p>
                        </FadeIn>
                        <FadeIn direction='up' delay={0.4}>
                            <p className='text-white font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at tortor a lacus lacinia aliquam a quis mi. Nulla pulvinar quis mi ac feugiat. Morbi scelerisque nisl vel risus laoreet egestas. Aliquam erat volutpat. Nam egestas nec odio posuere fermentum. Nulla accumsan, leo eget rutrum dapibus, erat urna porttitor ex, in elementum sapien magna et nunc. Vivamus feugiat pharetra condimentum. Donec egestas, nibh quis ultrices imperdiet, urna quam consequat arcu, et aliquet sapien sem in quam. Nunc molestie, ipsum quis convallis iaculis, dui felis dictum dui, vel vehicula magna arcu id arcu. Aenean imperdiet consequat aliquam.</p>
                        </FadeIn>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-8 md:gap-16 lg:gap-40 xl:gap-52 z-10'>
                    <FadeIn direction='up' delay={0.5}>
                        <div className='flex flex-col gap-4'>
                            <div className='w-36'>

                                <h2 className="text-2xl font-bold text-white text-nowrap">
                                    My Skills
                                </h2>
                            </div>
                            <DashedLine color='bg-white' />
                        </div>
                    </FadeIn>

                    <div className='flex flex-col gap-10'>
                        <FadeIn direction='up' delay={0.6}>
                            <p className='text-white font-normal text-base'>Nulla faucibus hendrerit nisl facilisis commodo. Sed dapibus maximus diam at fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris maximus vehicula enim, eu imperdiet magna suscipit at. Vestibulum feugiat at leo eu euismod. In nec mollis tellus. Morbi elementum, metus vel pharetra gravida, odio enim ultrices neque, nec aliquet nisl libero ut lacus. Curabitur sit amet blandit nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam nec libero mi. Duis interdum tincidunt mollis. Donec imperdiet porttitor mauris. Phasellus non lacus lobortis, pretium velit a, tempus magna.</p>
                        </FadeIn>
                        <div className='flex flex-col gap-8'>

                            {skills.map(({ id, name, level }, index) => (
                                <FadeIn
                                    key={id}
                                    direction="up"
                                    delay={0.3 + index * 0.2}
                                    className="relative w-full"
                                >
                                    <SkillProgress
                                        name={name} level={level} delay={index * 0.2}
                                        progressColor='bg-secondary'
                                        levelColor='text-secondary'
                                        nameColor='text-white'
                                    />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataSection