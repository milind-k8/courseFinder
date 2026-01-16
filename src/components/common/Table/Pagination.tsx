

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center py-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <span aria-hidden="true">&lt;</span>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all ${currentPage === page
                            ? "bg-white text-[var(--color-text-primary)] shadow-[0px_2px_15px_0px_#0000001A]"
                            : "text-[var(--color-text-secondary)] border border-gray-200 hover:bg-gray-50"
                            }`}
                        onClick={() => onPageChange(page)}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <span aria-hidden="true">&gt;</span>
                </button>
            </div>
        </div>
    );
}
