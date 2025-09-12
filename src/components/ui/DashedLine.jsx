
function DashedLine({ color = 'bg-black' }) {
    return (
        <div className="flex gap-1.5">
            <div className={`${color} w-14 h-0.5 `}></div>
            <div className={`${color} w-4 h-0.5 `}></div>
        </div>
    )
}

export default DashedLine