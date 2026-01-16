import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import Select from "../../../components/common/Select";
import CalendarIcon from "../../../assets/calendar.svg?react";
import CountryIcon from "../../../assets/country.svg?react";

const yearOptions = [
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
];

const dateCreatedOptions = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
];

const intakeOptions = [
    { label: 'Jan 2024', value: 'jan-2024' },
    { label: 'Sep 2024', value: 'sep-2024' },
    { label: 'Jan 2025', value: 'jan-2025' },
];

const countryOptions = [
    { label: 'USA', value: 'usa' },
    { label: 'UK', value: 'uk' },
    { label: 'Canada', value: 'canada' },
    { label: 'Australia', value: 'australia' },
];

export default function FilterBar() {
    return (
        <Card className="mb-8">
            <div className="grid grid-cols-3 gap-4">
                <Select
                    options={yearOptions}
                    placeholder="Year"
                    className="min-w-[140px]"
                    icon={<CalendarIcon />}
                />
                <Select
                    options={dateCreatedOptions}
                    placeholder="Date Created"
                    className="min-w-[160px]"
                    icon={<CalendarIcon />}
                />
                <Select
                    options={intakeOptions}
                    placeholder="Select intake"
                    className="min-w-[160px]"
                    icon={<CalendarIcon />}
                />
                <Select
                    options={countryOptions}
                    placeholder="Countries"
                    className="min-w-[160px]"
                    icon={<CountryIcon />}
                />
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Apply Filters
                </Button>
            </div>
        </Card>
    );
}
