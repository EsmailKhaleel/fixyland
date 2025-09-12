
function Tag({ tag }) {
    return (
        <span className="px-6 py-3 bg-primary-light text-primary rounded-sm text-sm font-medium cursor-pointer hover:bg-primary hover:text-white transition-colors duration-1000">
            {tag}
        </span>
    )
}

export default Tag