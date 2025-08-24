import { useEffect, useRef, useState } from "react"

function Input({ children, type, placeholder, label = "" }) {
    const [isClicked, setIsClicked] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
    if (isClicked && inputRef.current?.showPicker) {
      inputRef.current.showPicker();
    }
  }, [isClicked]);
    return (
        <div 
        onClick={() => setIsClicked(true)}
        className="flex flex-col gap-2">
            {label && <label htmlFor={label} className="font-medium">{label}</label>}
            <div className="relative">
                {!isClicked && children}
                {!isClicked ? 
                <input
                    id={label}
                    name={label}
                    type={type}
                    placeholder={placeholder}
                    className="rounded-sm px-3 py-3 md:px-4 md:py-4 bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-primary active:outline-none active:ring-2 active:ring-primary transition-all duration-300"
                /> : 
                <input
                    ref={inputRef}
                    id={label}
                    name={label}
                    type="date"
                    onBlur={() => setIsClicked(false)}
                    className="rounded-sm px-3 py-3 md:px-4 md:py-4 bg-white text-black w-full focus:outline-none focus:ring-2 focus:ring-primary active:outline-none active:ring-2 active:ring-primary transition-all duration-300"
                />}

            </div>
        </div>
    )
}

export default Input