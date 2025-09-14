import Input from './ui/Input'
import { FaRegCalendar } from 'react-icons/fa6'
import Select from './ui/Select'
import MainButton from './ui/MainButton'

function HorizontalBookingForm({ labelColor = "text-black" }) {
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-6 px-4 md:px-8 lg:px-16">
          <Input
            label="Check In"
            type="date"
            placeholder="Select Date"
            labelColor={labelColor}
          >
            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
              <FaRegCalendar className="text-gray-700" />
            </div>
          </Input>
          <Input
            label="Check Out"
            type="date"
            placeholder="Select Date"
            labelColor={labelColor}
          >
            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
              <FaRegCalendar className="text-gray-700" />
            </div>
          </Input>

          <Select
            label="Room"
            options={["Single Room", "Double Room", "Suite Room"]}
            defaultValue="Select Room"
            labelColor={labelColor}
          />

          <Select 
            label="Adults"
            options={["1 Adult", "2 Adults", "3 Adults", "4 Adults"]}
            defaultValue="Select Adults"
            labelColor={labelColor}
          />

          <Select 
            label="Children"
            options={["0 Children", "1 Child", "2 Children", "3 Children", "4 Children"]}
            defaultValue="Select Children"
            labelColor={labelColor}
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
  )
}

export default HorizontalBookingForm