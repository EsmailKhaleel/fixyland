import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function StaffCard2({ employee }) {
  const [showSocial, setShowSocial] = useState(false);

  const handleMouseLeave = (e) => {
    const element = e.currentTarget;
    element.classList.add("not-hover");
    setTimeout(() => {
      element.classList.remove("not-hover");
    }, 600);
  };

  const toggleSocial = () => {
    setShowSocial((prev) => !prev);
  };

  return (
    <div className="mt-8 relative flex flex-col items-start gap-4 bg-white rounded-xl z-0 max-w-[400px]">
      <div
        onClick={toggleSocial} // 👈 tap/click toggles
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden group rounded-t-xl cursor-pointer"
      >
        <img
          src={employee.image}
          alt="Staff"
          className="w-full h-full object-cover transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-in-out"
        />

        {/* Ripple effect hover-based */}
        <span
          className={`absolute inset-0 rounded-xl bg-white opacity-0 
          group-hover:animate-ripple group-[.not-hover]:animate-rippleReverse 
          origin-center transition-all ease-out`}
        ></span>

        {/* Social icons: appear either on hover OR if tapped */}
        <div
          className={`absolute bottom-6 right-10 flex flex-col gap-2 transform transition-all duration-700 ease-in-out
            ${showSocial ? "translate-x-0" : "translate-x-24"} 
            group-hover:translate-x-0`}
        >
          {[FaFacebook, FaXTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
            <div
              key={i}
              className="bg-white text-primary hover:bg-primary hover:text-white rounded-md p-3 cursor-pointer transition-all duration-300"
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center w-full py-4">
        <h2 className="relative text-xl sm:text-2xl font-bold text-black before:content-[''] before:w-0 before:h-[1px] before:bg-black before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-500 hover:before:w-full">
          {employee.name}
        </h2>
        <p className="text-md sm:text-lg text-gray-600">{employee.position}</p>
      </div>
    </div>
  );
}

export default StaffCard2;
