import type { ReactNode } from "react";

export type SortDirection = 'asc' | 'desc';

export interface SortConfig<T> {
    key: keyof T | null;
    direction: SortDirection;
}

export interface Column<T> {
    key: keyof T;
    label: string;
    render?: (item: T) => ReactNode;
    sortable?: boolean;
    className?: string;
}
