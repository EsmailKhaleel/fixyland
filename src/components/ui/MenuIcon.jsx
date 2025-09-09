
function MenuIcon({ isSticky = false }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      className="group"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="5"
        x2="19"
        y2="5"
        stroke={isSticky ? 'black' : 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        className="transform group-hover:translate-x-1.5 group-focus:translate-x-1.5 group-active:translate-x-1.5 transition-transform duration-1000"
      />
      <line
        x1="5"
        y1="12.5"
        x2="24"
        y2="12.5"
        stroke={isSticky ? 'black' : 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        className="transform group-hover:-translate-x-1 group-focus:-translate-x-1 group-active:-translate-x-1 transition-transform duration-1000"
      />
      <line
        x1="0"
        y1="20"
        x2="19"
        y2="20"
        stroke={isSticky ? 'black' : 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        className="transform group-hover:translate-x-1.5 group-focus:translate-x-1.5 group-active:translate-x-1.5 transition-transform duration-1000"
      />
    </svg>
  )
}

export default MenuIcon