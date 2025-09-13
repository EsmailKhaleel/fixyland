
function Tag({ tag }) {
    return (
        <span className="px-4 py-2 sm:px-6 sm:py-3 bg-primary-light text-primary rounded-sm text-sm font-medium cursor-pointer hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary active:text-white transition-colors duration-1000">
            {tag}
        </span>
    )
}

export default Tag