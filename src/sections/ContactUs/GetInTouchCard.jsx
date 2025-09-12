import { FaLocationDot } from "react-icons/fa6"
import SocialMediaButtons from "../../components/SocialMediaButtons"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactCardItem from "../../components/ContactCardItem";


export const contacts = [
  {
    icon: FaLocationDot,
    title: "Our Office",
    value: "7631 Sabina Park, 115 Devon Isle, Louisiana, USA"
  },
  {
    icon: FaPhoneAlt,
    title: "Monday-Friday: 08am-9pm",
    value: "(+1) 123-456-7890"
  },
  {
    icon: MdEmail,
    title: "Need Help?",
    value: "info@domain.com"
  }
]

function GetInTouchCard() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 bg-secondary rounded-lg flex flex-col justify-center gap-4 sm:gap-6 md:gap-8">
      <h2 className="text-xl sm:text-2xl font-bold">Get in touch with us today</h2>
      <p className="text-sm sm:text-base">Please feel free to contact our friendly staff with any Fixyland enquiry.</p>
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        {contacts.map((contact, index) => (
          <ContactCardItem key={index} contact={contact} />
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
        <h3 className="text-2xl font-bold text-black">Follow Us</h3>
        <SocialMediaButtons
          color="bg-black"
          colorHover="bg-primary"
          iconColor="text-white"
          iconColorHover="text-white"
        />
      </div>
    </div>
  )
}

export default GetInTouchCard