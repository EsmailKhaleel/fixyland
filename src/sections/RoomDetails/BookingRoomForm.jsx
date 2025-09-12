
import Input from "../../components/ui/Input";
import MainButton from "../../components/ui/MainButton";
import Select from "../../components/ui/Select";
import { FaRegCalendar } from "react-icons/fa6";

function BookingRoomForm() {
  return (
    <div className="bg-gray-100 h-fit w-full flex flex-col gap-6 p-6 sm:p-10 rounded-lg">
      <div className="text-5xl text-primary font-semibold flex gap-2 items-center">
        750
        <div className="ml-2 flex flex-col justify-between">
          <span className="text-gray-600 font-normal text-base">$</span>
          <span className="text-gray-600 font-normal text-base">/PER NIGHT</span>
        </div>
      </div>
      <hr className="border-gray-300" />
      <Input
        type="date"
        label="Check In"
        placeholder="Select date.."
        bgColor="bg-primary-light"
        labelColor="text-gray-600"
      >
        <FaRegCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
      </Input>

      <Input
        type="date"
        label="Check Out"
        placeholder="Select date.."
        bgColor="bg-primary-light"
        labelColor="text-gray-600"
      >
        <FaRegCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
      </Input>

      <Select
        label="Room Type"
        defaultValue="Select Room"
        bgColor="bg-primary-light"
        labelColor="text-gray-600"
        options={["Single Room", "Double Room", "Suite", "Deluxe Room", "Family Room"]}
      />

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Adults"
          defaultValue="Select Adults"
          options={["1 Adult", "2 Adults", "3 Adults", "4 Adults"]}
          bgColor="bg-primary-light"
          labelColor="text-gray-600"
        />
        <Select
          label="Children"
          defaultValue="Select Children"
          options={["0 Children", "1 Child", "2 Children", "3 Children", "4 Children"]}
          bgColor="bg-primary-light"
          labelColor="text-gray-600"
        />
      </div>

      <MainButton
        label="Book A Room"
        color="secondary"
        textColor="black"
        colorHover="black"
        textColorHover="white"
      />
    </div>
  )
}

export default BookingRoomForm