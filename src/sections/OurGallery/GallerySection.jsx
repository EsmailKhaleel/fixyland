import { useState } from "react";
import gallery from "../../data/gallery";
import { AnimatePresence, motion } from "framer-motion";

function GallerySection() {
    const [filteredGallery, setFilteredGallery] = useState(gallery);
    const [activeCategory, setActiveCategory] = useState("Show All");
    const handleFilter = (category) => {
        setActiveCategory(category);

        if (category === "Show All") {
            setFilteredGallery(gallery);
        } else {
            setFilteredGallery(gallery.filter(item => item.category === category));
        }
    };
    const categories = [...new Set(gallery.map(item => item.category))];

    return (
        <section className="relative bg-primary-light w-full py-24 px-2 sm:px-12 md:px-16 flex flex-col justify-center items-center gap-8">
            {/* Filter Buttons */}
            <div className="flex gap-6 flex-wrap justify-center">
                {["Show All", ...categories].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleFilter(category)}
                        className={`${activeCategory === category
                            ? "bg-primary text-white"
                            : "bg-white text-primary"
                            } text-lg px-6 py-2 rounded cursor-pointer transition-all duration-400`}
                    >
                        {category}
                    </button>
                ))}

            </div>

            {/* Gallery Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <AnimatePresence mode="popLayout">
                    {filteredGallery.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            layoutId={item.id.toString()}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.4, layout: { duration: 0.3 } }}
                            className="relative group w-full h-[400px] rounded-lg overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.category}
                                className="w-full h-full object-cover rounded"
                            />
                            <div className="origin-top bg-primary w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-80 scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100 group-active:scale-y-100 transition-all duration-300 flex items-center justify-center">
                                <span className="text-white text-xl font-normal cursor-pointer">
                                    {item.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default GallerySection;
