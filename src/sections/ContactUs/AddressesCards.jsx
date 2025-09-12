import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6"
import FadeIn from "../../components/ui/FadeIn";

function AddressesCards() {
    const [hovered, setHovered] = useState(1);
    return (
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
            {[
                { id: 1, title: "New York", address: "7631 Sabina Park, 115 Devon Isle, Louisiana, New York", phone: "(123) 456-7890", website: "www.example.com" },
                { id: 2, title: "London", address: "789 Rue de la Paix, 2nd Floor, Paris, France", phone: "(987) 654-3210", website: "www.example.com" },
                { id: 3, title: "Paris", address: "456 Rue de la Paix, 2nd Floor, Paris, France", phone: "(012) 345-6789", website: "www.example.com" },
                { id: 4, title: "Berlin", address: "101 Berliner Str., 3rd Floor, Berlin, Germany", phone: "(987) 654-3210", website: "www.example.com" },
            ].map((item) => (
                <FadeIn key={item.id} direction="up" delay={0.1}>
                    <div
                        key={item.id}
                        onMouseEnter={() => setHovered(item.id)}
                        className="group/card relative w-full p-4 sm:p-6 md:p-10 bg-white rounded-lg flex flex-col gap-4"
                    >
                        {/* black overlay */}
                        <div className={`absolute top-0 left-0 w-full h-full bg-transparent rounded-lg overflow-hidden transition-all duration-1000 z-0`}>
                            <div className={`w-full h-full bg-black transform origin-top transition-all duration-1000 duration- ${hovered === item.id ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>
                        </div>
                        <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-1000 z-[2] ${hovered === item.id ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                        <div className="flex flex-col gap-2 z-[2]">
                            <p className={`transition-colors duration-1000 ${hovered === item.id ? 'text-white' : 'text-gray-700'}`}>{item.address}</p>
                            <h4 className={`cursor-pointer transition-colors duration-1000 ${hovered === item.id ? 'text-white' : 'text-gray-700'}`}>
                                <a className="line-effect white-effect hover:outline-none hover:[text-decoration:none] hover:border-none">
                                    {item.phone}
                                </a>
                            </h4>
                            <h4 className={`cursor-pointer transition-colors duration-1000 ${hovered === item.id ? 'text-white' : 'text-gray-700'}`}>
                                <a className="line-effect white-effect hover:outline-none hover:[text-decoration:none] hover:border-none">
                                    {item.website}
                                </a>
                            </h4>
                        </div>
                        <button
                            className="self-start relative group/btn flex items-center gap-3 text-primary/90  font-medium transition-all
                            duration-1000 cursor-pointer text-sm sm:text-base before:content-[''] before:absolute before:left-0 before:top-full before:w-0 before:h-[1px] before:bg-current 
                            hover:before:w-full before:transition-all after:content-[''] after:absolute after:right-0 after:top-full after:w-full hover:after:w-0 focus:after:w-0 active:after:w-0 after:h-[1px] after:bg-current after:transition-all z-[2]
                            group-hover/card:text-white group-hover/card:before:bg-white group-hover/card:after:bg-white group-active/card:text-white group-active/card:before:bg-white group-active/card:after:bg-white group/anim"
                        >
                            <span>See on map</span>
                            <FaArrowRightLong className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-45 transform group-hover/btn:rotate-0 transition-transform duration-1000" />
                        </button>
                    </div>
                </FadeIn>
            ))}
        </div>
    )
}

export default AddressesCards