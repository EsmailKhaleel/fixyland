
function CheckItem({ icon: Icon,  text}) {
    return (
        <li className="text-gray-600 flex items-start text-base gap-1">
            <Icon className="text-primary mr-2 bg-primary/10 rounded-full w-[22px] h-[22px]" />
            {text}
        </li>
    )
}

export default CheckItem