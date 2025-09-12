import AnimatedText from "../../components/ui/AnimatedText"
import BatchText from "../../components/ui/BatchText"
import AddressesCards from "./AddressesCards"
import GoogleMap from "./GoogleMap"


function AddressSection() {

    return (
        <div className='w-full flex flex-col gap-10 section-padding items-center'>
            <BatchText text="Our Address" />
            <AnimatedText
                text="Come And Visit One Of Our Offices Around The World"
                textColor="white"
                className="heading-text justify-center font-extrabold max-w-3xl"
            />
            <div className='w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10'>
                <AddressesCards />
                <GoogleMap />
            </div>
        </div>
    )
}

export default AddressSection