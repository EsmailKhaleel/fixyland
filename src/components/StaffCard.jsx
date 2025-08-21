import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function StaffCard({ employee }) {
    return (
        <div className="mt-8 relative flex flex-col items-start gap-4 bg-white rounded-xl z-0 max-w-[300px]">
            <div className="relative overflow-hidden group rounded-t-xl">
                <img src={employee.image} alt="Staff" className="w-full h-full object-cover transform group-hover:scale-110 group-hover:-rotate-3 group-focus:scale-110 group-focus:-rotate-3 transition-all duration-500 ease-in-out" />
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ripple group-focus:animate-ripple origin-center transition-all duration-500 ease-out"></span>
            </div>
            <h2 className="relative text-xl sm:text-2xl ml-4 mt-4 font-bold text-black before:content-[''] before:w-0 before:h-[1px] before:bg-black before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-500 hover:before:w-full focus:before:w-full">
                {employee.name}</h2>
            <div className="ml-4 mb-4 flex items-center gap-2">
                <div className="w-6 sm:w-10 h-[1px] bg-primary"></div>
                <p className="text-md sm:text-lg text-gray-600">{employee.position}</p>
            </div>
            <button className="group absolute bottom-[25%] right-4 bg-primary rounded-md p-1 sm:p-2 cursor-pointer">
                <FaPlus className="w-5 h-5 text-white" />
                <motion.div
                    className="absolute bottom-[calc(100%+8px)] right-0 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible trsnsform translate-y-3 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-400"
                >
                    {[FaFacebook, FaXTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                        <motion.div
                            key={i}
                            className="bg-white text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md p-1 sm:p-2 cursor-pointer transition-all duration-300"
                        >
                            <Icon className="w-5 h-5" />
                        </motion.div>
                    ))}
                </motion.div>
            </button>
        </div>
    )
}

export default StaffCard