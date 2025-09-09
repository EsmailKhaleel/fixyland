import { motion } from "framer-motion";
import AnimatedImage from "./ui/AnimatedImage";
import FadeIn from "./ui/FadeIn";

function RestaurantItem({ title, price, desc, badge, image, itemKey }) {
    return (
        <div className="relative flex items-start gap-6">
            {/* Image */}
            <AnimatedImage
                bgColor="bg-white"
                wrapperClass="relative w-25 h-25 rounded-lg overflow-hidden flex-shrink-0"
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />

            {/* Content */}
            <FadeIn delay={0.3} direction="left" className="flex-1">
                <div className="flex items-center gap-2">
                    {/* Title + Badge */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                        {badge && (
                            <span className="bg-secondary text-xs font-semibold px-2 py-0.5 rounded-sm">
                                {badge}
                            </span>
                        )}
                    </div>
                    <div className="flex-1 flex items-center ml-auto">
                        {/* Dashed line */}
                        <motion.div
                            key={`${title}${itemKey}`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                            viewport={{ once: true }}
                            className="origin-left flex-1 flex flex-col justify-between gap-1 ml-2"
                        >
                            <div className="border-t border-dashed border-gray-500"></div>
                            <div className="border-t border-dashed border-gray-500"></div>
                        </motion.div>
                        {/* Price */}
                        <motion.span
                            key={`${price}${itemKey}`}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            viewport={{ once: true }}
                            className="origin-right bg-primary text-white text-lg font-bold px-3 py-1 rounded"
                        >
                            {price}
                        </motion.span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base mt-2">{desc}</p>
            </FadeIn>
        </div>
    );
}

export default RestaurantItem;
