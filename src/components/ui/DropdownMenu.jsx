import { IoIosArrowForward } from "react-icons/io";

const MenuItem = ({ item }) => {
  return (
    <div className="group/item relative"> {/* unique group for this item */}
      {/* Row hover group only for styling */}
      <div className="group/row cursor-pointer transition-all duration-300 px-6 py-4 border-b border-b-gray-400/10 flex items-center justify-between gap-2 hover:bg-secondary">
        <div className="flex items-center gap-2 transition-colors duration-300 relative group-hover/row:text-black">
          <span className="opacity-0 absolute left-0 transition-opacity duration-300 group-hover/row:opacity-100 text-xs">//</span>
          <span className="inline-block transition-all duration-500 group-hover/row:translate-x-6">
            {item.label}
          </span>
        </div>
        {item.children && (
          <span className="text-md">
            <IoIosArrowForward className="transition-transform duration-300 group-hover/row:rotate-90 group-hover/row:text-black" />
          </span>
        )}
      </div>

      {/* Submenu — visibility tied to this item's group only */}
      {item.children && (
        <div
          className="
            absolute top-0 left-full
            bg-primary text-white min-w-[200px]
            opacity-0 invisible
            group-hover/item:opacity-100 group-hover/item:visible
            transform scale-95 group-hover/item:scale-100
            transition-all duration-300 ease-out
            z-50
          "
        >
          {item.children.map((child, idx) => (
            <MenuItem key={`item-${idx}-${child.label}`} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute top-full left-0 mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-top-left scale-x-105 group-hover:scale-x-100 transform z-50">
      <div className="bg-primary min-w-[300px] text-white">
        {items.map((item, index) => (
          <MenuItem key={`item-${index}-${item.label}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
