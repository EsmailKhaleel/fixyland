import { FaCalendar } from "react-icons/fa"
import MainButton from "../components/ui/MainButton"

function BookingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="relative flex justify-center sm:justify-end items-center bg-primary/10">
      <div className="relative w-full max-w-[95%] lg:max-w-11/12 mt-[650px] md:mt-[700px] bg-primary/60 backdrop-blur-md py-8 md:py-10 lg:py-14 text-base md:text-lg shadow-xl text-white rounded-lg sm:rounded-tr-none sm:rounded-br-none sm:rounded-bl-2xl sm:rounded-tl-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-2">
            <label htmlFor="CheckIn" className="font-medium">Check In</label>
            <div className="relative">
              <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                <FaCalendar className="text-gray-400"/>
              </div>
              <input
                datepicker="true"
                id="CheckIn"
                name="CheckIn"
                type="text"
                placeholder="Select Date" 
                className="rounded-sm px-3 py-3 md:px-4 md:py-4 bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-primary active:outline-none active:ring-2 active:ring-primary transition-all duration-300" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="CheckOut" className="font-medium">Check Out</label>
            <div className="relative">
              <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                <FaCalendar className="text-gray-400"/>
              </div>
              <input
                datepicker="true"
                id="CheckOut"
                name="CheckOut"
                type="text"
                placeholder="Select Date" 
                className="rounded-sm px-3 py-3 md:px-4 md:py-4 bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-primary active:outline-none active:ring-2 active:ring-primary transition-all duration-300" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="Room" className="font-medium">Room</label>
            <select
              id="Room"
              name="Room"
              className="rounded-sm px-3 py-3 md:px-4 md:py-4 bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-primary active:outline-none active:ring-2 active:ring-primary transition-all duration-300" 
            >
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="suite">Suite Room</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="Adults" className="font-medium">Adults</label>
            <select
              id="Adults"
              name="Adults"
              className="rounded-sm px-3 py-3 md:px-4 md:py-4 bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-primary active:outline-none active:ring-2 active:ring-primary transition-all duration-300" 
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="Children" className="font-medium">Children</label>
            <select
              id="Children"
              name="Children"
              className="rounded-sm px-3 py-3 md:px-4 md:py-4 bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-primary active:outline-none active:ring-2 active:ring-primary transition-all duration-300" 
            >
              <option value="0">0 Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3 Children</option>
              <option value="4">4 Children</option>
            </select>
          </div>
          
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