import type { ReactNode } from "react";
import FilterArrowIcon from "../../../assets/filter-arrow.svg?react";
import type { SortConfig, Column } from "./types";

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    sortConfig?: SortConfig<T>;
    onSort?: (key: keyof T) => void;
    keyExtractor: (item: T) => string | number;
}

export function Table<T>({ data, columns, sortConfig, onSort, keyExtractor }: TableProps<T>) {
    const renderSortIcon = (column: Column<T>) => {
        if (!column.sortable || !sortConfig || !onSort) return null;

        if (sortConfig.key !== column.key) {
            return (
                <FilterArrowIcon aria-hidden="true" />
            );
        }
        return sortConfig.direction === 'asc' ? (
            <svg className="w-3 h-3 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        ) : (
            <svg className="w-3 h-3 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        );
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]">
                    <tr>
                        {columns.map((col) => (
                            <th key={String(col.key)} className="px-6 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                                {col.sortable && onSort ? (
                                    <button
                                        className="flex items-center gap-1 cursor-pointer hover:text-[var(--color-text-primary)] bg-transparent border-none p-0 font-medium text-xs text-[var(--color-text-secondary)] uppercase tracking-wider"
                                        onClick={() => onSort(col.key)}
                                        aria-sort={sortConfig?.key === col.key ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') : undefined}
                                    >
                                        {col.label}
                                        {renderSortIcon(col)}
                                    </button>
                                ) : (
                                    col.label
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border-subtle)]">
                    {data.map((item) => (
                        <tr key={keyExtractor(item)} className="hover:bg-[var(--color-bg-hover)]">
                            {columns.map((col) => (
                                <td key={String(col.key)} className={`px-6 py-4 whitespace-nowrap ${col.className || ''}`}>
                                    {col.render ? col.render(item) : (item[col.key] as ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
