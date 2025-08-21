
function Spinner() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900">
        <div className="w-30 h-30 rounded-full absolute border-4 border-solid border-transparent"></div>
        <div className="w-30 h-30 rounded-full absolute animate-spin-slow border-4 border-solid border-transparent border-t-primary"></div>
        <div className="w-24 h-24 rounded-full absolute border-4 border-solid border-transparent"></div>
        <div className="w-24 h-24 rounded-full absolute animate-spin-fast border-4 border-solid border-transparent border-b-secondary"></div>
        <div className="w-20 h-20 rounded-full absolute border-4 border-solid border-transparent"></div>
        <div className="w-20 h-20 rounded-full absolute animate-spin-medium border-4 border-solid border-transparent border-l-white"></div>
    </div>
  );
}

export default Spinner;