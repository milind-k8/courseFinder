import { useState, useMemo } from "react";
import { applicationsData, type ApplicationData } from "../../../data/dashboardData";
import Card from "../../../components/common/Card";
import ExpandIcon from "../../../assets/expand.svg?react";
import { Table, Pagination, type Column, type SortConfig } from "../../../components/common/Table";

export default function ApplicationsTable() {
    const [sortConfig, setSortConfig] = useState<SortConfig<ApplicationData>>({ key: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSort = (key: keyof ApplicationData) => {
        setSortConfig((current) => ({
            key,
            direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const filteredAndSortedData = useMemo(() => {
        let data = [...applicationsData];

        if (sortConfig.key) {
            data.sort((a, b) => {
                const aValue = a[sortConfig.key!] ?? "";
                const bValue = b[sortConfig.key!] ?? "";

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return data;
    }, [applicationsData, sortConfig]);

    const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
    const paginatedData = filteredAndSortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const columns: Column<ApplicationData>[] = [
        {
            key: "ackNo",
            label: "Ack. no.",
            sortable: true,
            className: "text-sm text-[var(--color-text-secondary)] underline decoration-[var(--color-border-light)]"
        },
        {
            key: "studentName",
            label: "Student name",
            sortable: true,
            render: (app) => (
                <>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">{app.studentName}</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">{app.email}</div>
                </>
            )
        },
        {
            key: "university",
            label: "University",
            sortable: true,
            className: "text-sm text-[var(--color-text-primary)]"
        },
        {
            key: "program",
            label: "Program",
            sortable: true,
            className: "text-sm text-[var(--color-text-primary)]"
        },
        {
            key: "pendingSince",
            label: "Pending Since",
            sortable: true,
            render: (app) => (
                <>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">{app.pendingSince}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{app.date}</div>
                </>
            )
        }
    ];

    return (
        <Card className="flex-1" padding="p-0">
            <div className="p-6 pb-2">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Applications</h3>
                    <button className="text-[var(--color-icon-muted)] hover:text-[var(--color-text-muted)]" aria-label="Expand table">
                        <ExpandIcon aria-hidden="true" />
                    </button>
                </div>

                <div className="flex gap-2 mb-6">
                    <button className="px-4 py-2 text-[var(--color-brand-primary)] font-semibold bg-[var(--color-bg-active)] rounded-md">
                        Pending On Me (15)
                    </button>
                    <button className="px-4 py-2 text-[var(--color-text-secondary)] font-medium hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)] rounded-md">
                        Lorem Ipsum (12)
                    </button>
                    <button className="px-4 py-2 text-[var(--color-text-secondary)] font-medium hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)] rounded-md">
                        Lorem Ipsum (18)
                    </button>
                </div>
            </div>

            <Table
                data={paginatedData}
                columns={columns}
                sortConfig={sortConfig}
                onSort={handleSort}
                keyExtractor={(item) => item.id}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </Card>
    );
}
