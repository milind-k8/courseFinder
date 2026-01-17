import { useState } from "react";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import Select from "../../../components/common/Select";
import CalendarIcon from "../../../assets/calendar.svg?react";
import CountryIcon from "../../../assets/country.svg?react";
import { type SingleValue } from "react-select";

interface SelectOption {
    label: string;
    value: string;
}

export interface FilterValues {
    year: string | null;
    dateCreated: 'newest' | 'oldest' | null;
    intake: string | null;
    country: string | null;
}

interface FilterBarProps {
    filters: FilterValues;
    onFilterChange: (filters: FilterValues) => void;
}

const yearOptions: SelectOption[] = [
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
];

const dateCreatedOptions: SelectOption[] = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
];

const intakeOptions: SelectOption[] = [
    { label: 'Jan 2024', value: 'jan-2024' },
    { label: 'Sep 2024', value: 'sep-2024' },
    { label: 'Jan 2025', value: 'jan-2025' },
];

const countryOptions: SelectOption[] = [
    { label: 'USA', value: 'usa' },
    { label: 'UK', value: 'uk' },
    { label: 'Canada', value: 'canada' },
    { label: 'Australia', value: 'australia' },
];

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
    const [pendingFilters, setPendingFilters] = useState<FilterValues>(filters);

    const handleYearChange = (option: SingleValue<SelectOption>) => {
        setPendingFilters(prev => ({
            ...prev,
            year: option?.value || null,
        }));
    };

    const handleDateCreatedChange = (option: SingleValue<SelectOption>) => {
        setPendingFilters(prev => ({
            ...prev,
            dateCreated: (option?.value as 'newest' | 'oldest') || null,
        }));
    };

    const handleIntakeChange = (option: SingleValue<SelectOption>) => {
        setPendingFilters(prev => ({
            ...prev,
            intake: option?.value || null,
        }));
    };

    const handleCountryChange = (option: SingleValue<SelectOption>) => {
        setPendingFilters(prev => ({
            ...prev,
            country: option?.value || null,
        }));
    };

    const handleApplyFilters = () => {
        onFilterChange(pendingFilters);
    };

    const selectedYear = yearOptions.find(opt => opt.value === pendingFilters.year) || null;
    const selectedDateCreated = dateCreatedOptions.find(opt => opt.value === pendingFilters.dateCreated) || null;
    const selectedIntake = intakeOptions.find(opt => opt.value === pendingFilters.intake) || null;
    const selectedCountry = countryOptions.find(opt => opt.value === pendingFilters.country) || null;

    return (
        <Card className="mb-6 lg:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                <Select
                    options={yearOptions}
                    placeholder="Year"
                    className="w-full"
                    icon={<CalendarIcon />}
                    value={selectedYear}
                    onChange={handleYearChange}
                    isClearable
                />
                <Select
                    options={dateCreatedOptions}
                    placeholder="Date Created"
                    className="w-full"
                    icon={<CalendarIcon />}
                    value={selectedDateCreated}
                    onChange={handleDateCreatedChange}
                    isClearable
                />
                <Select
                    options={intakeOptions}
                    placeholder="Select intake"
                    className="w-full"
                    icon={<CalendarIcon />}
                    value={selectedIntake}
                    onChange={handleIntakeChange}
                    isClearable
                />
                <Select
                    options={countryOptions}
                    placeholder="Countries"
                    className="w-full"
                    icon={<CountryIcon />}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    isClearable
                />
                <Button
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 sm:col-span-2 lg:col-span-1"
                    onClick={handleApplyFilters}
                >
                    Apply Filters
                </Button>
            </div>
        </Card>
    );
}
