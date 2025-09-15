import { useEffect, useRef, useState } from "react"

function Input({ children, type, placeholder, label = "", labelColor = "text-black", bgColor = "bg-white" }) {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [isClicked, setIsClicked] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isClicked && inputRef.current?.showPicker) {
            inputRef.current.showPicker();
        }
    }, [isClicked]);

    const className =
        `appearance-none ${bgColor} placeholder:text-gray-500 placeholder-opacity-100 
    rounded-sm px-3 py-3 h-14 md:px-4 md:py-4 text-black w-full 
    focus:outline-none focus:ring-1 focus:ring-primary
    active:outline-none active:ring-1 active:ring-primary 
    hover:outline-none hover:ring-1 hover:ring-primary transition-all duration-500`;

    return (
        <div
            onClick={() => setIsClicked(true)}
            className="flex flex-col gap-2">
            {label && (
                <label
                    htmlFor={label}
                    className={`font-medium ${labelColor}`}
                >
                    {label}
                </label>
            )}
            <div className="relative">
                {/* If type is "date" Toggle from ==> "text" input to ==> "date" input */}
                {!isClicked && type === "date" && children}
                {type === "date" && !isIOS && (
                    (!isClicked ? <input
                        id={label}
                        name={label}
                        type="text"
                        placeholder={placeholder}
                        className={className}
                    /> :
                        <input
                            ref={inputRef}
                            id={label}
                            name={label}
                            type="date"
                            onBlur={() => setIsClicked(false)}
                            className={className}
                        />)
                )}
                {/* If type is not "date" Render Normal Input */}
                {type !== "date" &&
                    <>
                        <input
                            id={label}
                            name={label}
                            type={type}
                            placeholder={placeholder}
                            className={className}
                        />
                        {children}
                    </>
                }
                {/* If IOS Render native date input (No Toggle) */}
                {isIOS && type === "date" && children}
                {isIOS && type === "date" && (
                    <input
                        ref={inputRef}
                        id={label}
                        name={label}
                        type="date"
                        className={className}
                    />
                )}
            </div>
        </div>
    )
}

export default Input