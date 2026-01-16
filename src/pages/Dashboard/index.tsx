import Button from "../../components/common/Button";
import FilterBar from "./components/FilterBar";
import StatsSection from "./components/StatsSection";
import ApplicationsTable from "./components/ApplicationsTable";
import NewsBulletin from "./components/NewsBulletin";
import UpcomingEvents from "./components/UpcomingEvents";
import QuickLinks from "./components/QuickLinks";
import ManagerContact from "./components/ManagerContact";
import AlliedServicesBanner from "./components/AlliedServicesBanner";

export default function Dashboard() {

    const NameSection = () => {
        return <div className="flex items-center justify-between mb-10">
            <h3 className="text-[24px] font-normal">Hey, Good Morning <span className="font-bold">John!</span></h3>
            <div className="flex gap-4">
                <Button variant="outline" onClick={() => window.location.reload()}>Refresh Dashboard</Button>
                <Button>Register Student</Button>
            </div>
        </div>

    }
    return (
        <div className="max-w-[1600px] mx-auto">
            <NameSection />

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content Area */}
                <div className="flex-1 min-w-0">
                    <FilterBar />
                    <StatsSection />
                    <ApplicationsTable />
                    <AlliedServicesBanner />
                </div>

                {/* Right Sidebar Area */}
                <div className="w-full lg:w-[350px] shrink-0">
                    <NewsBulletin />
                    <UpcomingEvents />
                    <QuickLinks />
                    <ManagerContact />
                </div>
            </div>
        </div>
    );
};

