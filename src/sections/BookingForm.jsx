import { FaCalendar } from "react-icons/fa"
import MainButton from "../components/ui/MainButton"
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";

function BookingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="relative flex justify-center sm:justify-end items-center bg-primary/10 z-50">
      <div className="relative w-full max-w-[96%] mt-[650px] md:mt-[700px] bg-primary/60 backdrop-blur-md py-8 md:py-10 lg:py-14 text-base md:text-lg shadow-xl text-white rounded-lg sm:rounded-tr-none sm:rounded-br-none sm:rounded-bl-2xl sm:rounded-tl-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-6 px-4 md:px-8 lg:px-16">
          <Input
            label="Check In"
            type="text"
            placeholder="Select Date"
          >
            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
              <FaCalendar className="text-gray-700" />
            </div>
          </Input>
          <Input
            label="Check Out"
            type="text"
            placeholder="Select Date"
          >
            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
              <FaCalendar className="text-gray-700" />
            </div>
          </Input>

          <Select 
            label="Room"
            options={["Single Room", "Double Room", "Suite Room"]}
            defaultValue="Select Room"
          />

          <Select 
            label="Adults"
            options={["1 Adult", "2 Adults", "3 Adults", "4 Adults"]}
            defaultValue="Select Adults"
          />

          <Select 
            label="Children"
            options={["0 Children", "1 Child", "2 Children", "3 Children", "4 Children"]}
            defaultValue="Select Children"
          />

          <div className="flex items-end sm:col-span-2 lg:col-span-1">
            <MainButton
              label="Check Now"
              color="secondary"
              colorHover="black"
              textColor="black"
              textColorHover="white"
              className="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingForm