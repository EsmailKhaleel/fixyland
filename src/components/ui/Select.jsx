import { useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";

function Select({
    label = "Select",
    options = ["Option 1", "Option 2", "Option 3"],
    defaultValue = "Select an option"
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className="relative flex flex-col gap-2 cursor-pointer ">
            {label && <label htmlFor={label} className="font-medium">{label}</label>}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative rounded-sm px-3 py-3 md:px-4 md:py-4 bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-primary active:outline-none active:ring-2 active:ring-primary transition-all duration-300">
                <div
                    className="flex items-center justify-between text-nowrap"
                >
                    {selectedOption || defaultValue}
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                    <LuChevronsUpDown className="text-gray-700" />
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-full mt-2 w-full rounded-sm bg-white shadow-lg z-[200]">
                    <ul className="max-h-64 overflow-auto text-black rounded-sm">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setSelectedOption(option);
                                    setIsOpen(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer m-1 rounded-sm"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Select