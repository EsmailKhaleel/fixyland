
function BigDashedLine({ color = "bg-black" }) {
    return (
        <div className="flex gap-2">
            <div className={`${color} w-36 h-[3px] rounded-l-full`}></div>
            <div className={`${color} w-8 h-[3px] `}></div>
            <div className={`${color} w-4 h-[3px] rounded-r-full`}></div>
        </div>
    )
}

export default BigDashedLine