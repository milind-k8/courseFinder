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
        return <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-10 gap-4">
            <h3 className="text-[20px] lg:text-[24px] font-normal">Hey, Good Morning <span className="font-bold">John!</span></h3>
            <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
                <Button variant="outline" onClick={() => window.location.reload()} className="flex-1 sm:flex-none text-sm lg:text-base">Refresh Dashboard</Button>
                <Button className="flex-1 sm:flex-none text-sm lg:text-base">Register Student</Button>
            </div>
        </div>

    }
    return (
        <div className="max-w-[1600px] mx-auto">
            <NameSection />

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-1 min-w-0 order-2 lg:order-1">
                    <FilterBar />
                    <StatsSection />
                    <ApplicationsTable />
                    <AlliedServicesBanner />
                </div>

                <div className="w-full lg:w-[350px] shrink-0 order-1 lg:order-2">
                    <div className="block lg:hidden">
                        <NewsBulletin />
                    </div>

                    <div className="hidden lg:block">
                        <NewsBulletin />
                        <UpcomingEvents />
                        <QuickLinks />
                        <ManagerContact />
                    </div>

                </div>
            </div>

            <div className="lg:hidden mt-6 space-y-6">
                <UpcomingEvents />
                <QuickLinks />
                <ManagerContact />
            </div>
        </div>
    );
};

