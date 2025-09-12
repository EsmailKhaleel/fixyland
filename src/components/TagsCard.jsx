import DashedLine from "./ui/DashedLine"
import Tag from "./ui/Tag"

export const tags = [
    "Hotel", "Resort", "Travel", "Restaurants", "Beach", "Adventure", "Luxury", "Family", "Budget", "Spa", "Cruise"
]
function TagsCard() {
    return (
        <div className="w-full p-4 sm:p-6 md:p-10 bg-white rounded-lg">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Popular Tags</h2>
                    <DashedLine />
                </div>
                <div className="flex flex-wrap gap-4">
                    {tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TagsCard