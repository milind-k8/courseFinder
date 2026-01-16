import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";

export default function FilterBar() {
    return (
        <Card className="mb-8">
            <div className="grid grid-cols-3 gap-4">
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white min-w-[140px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Year</option>
                    <option>2023</option>
                    <option>2024</option>
                </select>
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white min-w-[160px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Date Created</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                </select>
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white min-w-[160px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select intake</option>
                    <option>Jan 2024</option>
                    <option>Sep 2024</option>
                </select>
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white min-w-[160px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Countries</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                </select>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Apply Filters
                </Button>
            </div>
        </Card>
    );
}
