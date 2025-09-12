function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

    const goToPage = (page) => {
        if (page >= 1 && page <= pageCount) {
            onPageChange(page);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex justify-center bg-primary-light">
            {/* Previous button */}
            {currentPage > 1 && <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-5 py-3 rounded-sm text-white bg-black hover:bg-primary transition-colors duration-1000 cursor-pointer ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                Previous Page
            </button>}

            {/* Page number buttons */}
            <div className="flex gap-2 mx-2">
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-5 py-3 rounded-sm text-white bg-black hover:bg-primary transition-colors duration-1000 cursor-pointer ${currentPage === page ? "!bg-primary text-white" : ""
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Next button */}
            {currentPage < pageCount && <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                className={`px-5 py-3 rounded-sm text-white bg-black hover:bg-primary transition-colors duration-1000 cursor-pointer ${currentPage === pageCount ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                Next Page
            </button>}
        </div>
    );
}

export default Pagination;
