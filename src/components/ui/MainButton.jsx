import { FaArrowRightLong } from "react-icons/fa6";

const textColors = {
  black: "text-black",
  white: "text-white",
};
const hoverTextColors = {
  black: "group-hover:text-black group-active:text-black group-focus:text-black",
  white: "group-hover:text-white group-active:text-white group-focus:text-white",
};

const bgColors = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  white: "bg-white",
  black: "bg-black",
};

function MainButton({
  label = "",
  color = "secondary",
  colorHover = "white",
  textColor = "black",
  textColorHover = "black",
  onClick = () => {},
}) {

  return (
    <button
      className={`relative overflow-hidden min-w-[200px] group text-md font-medium px-6 py-4 rounded-sm transition cursor-pointer flex justify-between items-center gap-4 ${bgColors[color]} ${textColors[textColor]}`}
      onClick={onClick}
    >
      <span className={`${bgColors[colorHover]} absolute z-0 inset-0 origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100 group-focus:scale-x-100 group-active:scale-x-100`}/>
      <span
        className="bg-black/85 absolute z-10 inset-0 origin-left scale-x-0 transform transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-0 group-focus:scale-x-100 group-focus:opacity-0 group-active:scale-x-100 group-active:opacity-0"
        aria-hidden="true"
      />
      <span className={`relative z-20 transition-colors duration-500 ${hoverTextColors[textColorHover]}`}>
        {label}
      </span>
      <FaArrowRightLong className={`${hoverTextColors[textColorHover]} relative z-20 transform -rotate-45 transition-all duration-400 group-hover:rotate-0 group-focus:rotate-0 group-active:rotate-0`} />
    </button>
  );
}

export default MainButton;
