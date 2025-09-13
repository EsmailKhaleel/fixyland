import { FaRegCalendar } from "react-icons/fa6"
import Input from "./ui/Input"
import Select from "./ui/Select"
import MainButton from "./ui/MainButton"

function BookingForm({ btnLabel = "Book Appointment" }) {
    return (
        <form className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-8 bg-gray-100 rounded-lg">
            <Input
                type="text"
                placeholder="Ex. first name"
                label="First Name"
                labelColor="text-gray-600"
                bgColor="bg-primary-light"

            />
            <Input
                type="text"
                placeholder="Ex. last name"
                label="Last Name"
                labelColor="text-gray-600"
                bgColor="bg-primary-light"
            />
            <Input
                type="email"
                placeholder="Ex. info@domain"
                label="Email"
                labelColor="text-gray-600"
                bgColor="bg-primary-light"
            />
            <Input
                type="tel"
                placeholder="Ex. (+1) 987 654 3210"
                label="Phone Number"
                labelColor="text-gray-600"
                bgColor="bg-primary-light"
            />
            <Select
                label="Select Type"
                options={["Standard", "Deluxe", "Suite"]}
                defaultValue="Select Type"
                bgColor="bg-primary-light"
                labelColor="text-gray-600"
            />
            <Select
                label="Select Room"
                options={["Junior Rooms", "Family Rooms", "Deluxe Rooms", "Suite Rooms", "Single Room", "Double Room", "Premium Room"]}
                defaultValue="Select Type"
                bgColor="bg-primary-light"
                labelColor="text-gray-600"
            />
            <Input
                type="date"
                placeholder="Select Date"
                label="Check In"
                labelColor="text-gray-600"
                bgColor="bg-primary-light"
            >
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                    <FaRegCalendar className="text-gray-700" />
                </div>
            </Input>
            <Input
                type="date"
                placeholder="Select Date"
                label="Check Out"
                labelColor="text-gray-600"
                bgColor="bg-primary-light"
            >
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                    <FaRegCalendar className="text-gray-700" />
                </div>
            </Input>

            <div className="sm:col-span-2 flex flex-col gap-2">
                <label htmlFor="message" className="font-medium text-gray-600">Message</label>
                <textarea
                    className="w-full h-[200px] p-3 bg-primary-light text-black rounded-sm focus:outline-none focus:ring-1 focus:ring-primary active:outline-none active:ring-1 active:ring-primary hover:outline-none hover:ring-1 hover:ring-primary transition-all duration-500 resize-none overflow-y-auto"
                    placeholder="Ex. type message"
                />
            </div>
            <div className="sm:col-span-2 flex justify-start">
                <MainButton
                    label={btnLabel}
                    color="primary"
                    textColor="white"
                    colorHover="black"
                    textColorHover="white"
                />
            </div>
        </form>
    )
}

export default BookingForm