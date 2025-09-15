import { FaBath, FaBed, FaUsers, FaShower } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import MainButton from "./ui/MainButton";

function RoomFlipCard({ room }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="w-full h-[420px] cursor-pointer"
            style={{ perspective: 1200 }}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            {/* Card container */}
            <motion.div
                animate={{ rotateY: flipped ? [20, 30, -180] : 0 }}
                transition={{ ease: "easeInOut", duration: 10 }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* FRONT SIDE */}
                <motion.div
                    className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-100"
                    // style={{ backfaceVisibility: "hidden" }}
                    animate={{ scale: flipped ? 0.97 : 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${room.image})` }}
                    ></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                        <p className="text-sm sm:text-base">
                            From <span className="font-bold">${room.price}</span> / Night
                        </p>
                        <h4 className="text-xl font-bold">{room.title}</h4>
                    </div>
                </motion.div>

                {/* BACK SIDE */}
                <div
                    className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg bg-white p-6 flex flex-col justify-between"
                    style={{
                        // backfaceVisibility: "hidden",
                        transform: "rotateY(-180deg)",
                    }}
                >
                    {/* Animate content inside */}
    <motion.div
      initial={{ y: 20, scale: 0.95 }}
      animate={flipped ? { y: 0, scale: 1 } : { y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
                        {/* back ontent */}

                        <p className="text-primary font-bold text-base mb-1">
                            From ${room.price} / Night
                        </p>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {room.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{room.description}</p>

                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                                <FaUsers /> {room.guests} Guests
                            </li>
                            <li className="flex items-center gap-2">
                                <FaBed /> {room.beds} Beds
                            </li>
                            <li className="flex items-center gap-2">
                                <FaBath /> {room.bath} Bath
                            </li>
                            <li className="flex items-center gap-2">
                                <FaShower /> Shower
                            </li>
                        </ul>

                        <div className="pt-4">
                            <MainButton
                                label="Read More"
                                color="primary"
                                colorHover="black"
                                textColor="white"
                                textColorHover="white"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default RoomFlipCard;
