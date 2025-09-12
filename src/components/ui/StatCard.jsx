
function StatCard({ title, value, icon: Icon }) {
    return (
        <div className="h-full flex flex-col justify-center items-start p-6 gap-1 bg-primary-light rounded-[6px]">
            <Icon className="text-primary mb-2 text-3xl" />
            <span className="text-lg font-semibold text-gray-600">{title}</span>
            <span className="font-semibold text-lg text-gray-900">{value}</span>
        </div>
    )
}

export default StatCard