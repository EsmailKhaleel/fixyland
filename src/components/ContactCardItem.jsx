import { motion } from "framer-motion"

const iconVariants = {
  initial: {
    scale: 1
  },
  hover: {
    rotate: [0, 45, 0],
    scale: [1, 0, 1],
    transition: {
      duration: 0.3
    }
  }
}

function ContactCardItem({ contact, iconColor = "text-black" }) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className="flex gap-3 sm:gap-4 md:gap-6 items-start"
        >
            <motion.div
                variants={iconVariants}
                className="flex items-center justify-center"
            >
                <contact.icon className={`${iconColor} w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full`} />
            </motion.div>
            <div className="flex flex-col gap-0.5 sm:gap-1">
                <p className="text-sm sm:text-base font-semibold">{contact.title}</p>
                <h6 className="text-sm sm:text-base">
                    <a className="line-effect hover:outline-none hover:[text-decoration:none] hover:border-none">{contact.value}</a>
                </h6>
            </div>
        </motion.div>
    )
}

export default ContactCardItem