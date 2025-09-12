
function IconLabel({ 
    icon: Icon, label, 
    textSize = 'text-sm', 
    textColor = 'text-gray-600', 
    iconColor = 'text-primary',
    iconSize = 'w-4 h-4'
 }) {
    return (
        <div className={`${textSize} flex items-center gap-2 `}>
            <Icon className={`${iconColor} ${iconSize}`} />
            <span className={`${textColor}`}>{label}</span>
        </div>
    )
}

export default IconLabel