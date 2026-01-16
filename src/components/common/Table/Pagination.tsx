

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center py-4 border-t border-[var(--color-border-subtle)]">
            <div className="flex items-center gap-2">
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--color-bg-hover)] text-[var(--color-text-secondary)] disabled:opacity-50 disabled:cursor-not-allowed"
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
                            ? "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)]"
                            : "text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] hover:bg-[var(--color-bg-hover)]"
                            }`}
                        onClick={() => onPageChange(page)}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--color-bg-hover)] text-[var(--color-brand-primary)] disabled:opacity-50 disabled:cursor-not-allowed"
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
