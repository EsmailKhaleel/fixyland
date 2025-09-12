import { IoIosSearch } from "react-icons/io"
import DashedLine from "./ui/DashedLine"
import Input from "./ui/Input"

function SearchCard() {
    return (
        <div className="bg-gray-100 h-fit w-full flex flex-col gap-4 p-6 sm:p-10 rounded-lg">
            <div className="flex flex-col">
                <div className="text-xl font-bold text-gray-900 pb-2">Search</div>
                <DashedLine />
            </div>
            <Input type="text" placeholder="Search" bgColor="bg-primary-light">
                <IoIosSearch className="absolute top-1/2 right-4 -translate-y-1/2 w-6 h-6 text-gray-500" />
            </Input>
        </div>
    )
}

export default SearchCard