
function MenuIcon({ isSticky = false }) {
  return (
    <div className="relative flex flex-col justify-between w-5 h-5 gap-1">
        <span className={`w-full h-[2px] ${isSticky ? 'bg-black' : 'bg-white'} transform group-hover:translate-x-1 group-focus:translate-x-1 transition-transform duration-1000`}></span>
        <span className={`w-full h-[2px] ${isSticky ? 'bg-black' : 'bg-white'} transform translate-x-1 group-hover:-translate-x-1 group-focus:-translate-x-1 transition-transform duration-1000`}></span>
        <span className={`w-full h-[2px] ${isSticky ? 'bg-black' : 'bg-white'} transform group-hover:translate-x-1 group-focus:translate-x-1 transition-transform duration-1000`}></span>
    </div>
  )
}

export default MenuIcon