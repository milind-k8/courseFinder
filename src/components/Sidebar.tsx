import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import HomeIcon from '../assets/home.svg';
import StudentIcon from '../assets/student.svg';
import ApplicationIcon from '../assets/application.svg';
import SearchIcon from '../assets/search.svg';
import WalletIcon from '../assets/wallet.svg';
import CommissionIcon from '../assets/commission.svg';
import AlliedIcon from '../assets/allied.svg';
import InfoIcon from '../assets/info.svg';
import FeedbackIcon from '../assets/feedback.svg';
import QuickIcon from '../assets/quick.svg';

interface SidebarItem {
    label: string;
    icon: string;
    route?: string;
    hasDropdown?: boolean;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
    { label: 'Dashboard', icon: HomeIcon, route: ROUTES.DASHBOARD },
    { label: 'Students', icon: StudentIcon, route: ROUTES.STUDENTS },
    { label: 'Applications', icon: ApplicationIcon, route: ROUTES.APPLICATIONS },
    { label: 'Search Courses', icon: SearchIcon, route: ROUTES.COURSES },
    { label: 'Wallet', icon: WalletIcon, route: ROUTES.WALLET },
    { label: 'Commission Payments', icon: CommissionIcon, route: ROUTES.COMMISSION },
    { label: 'Allied Services', icon: AlliedIcon, route: ROUTES.SERVICES, hasDropdown: true },
    { label: 'Learning Resources', icon: InfoIcon, route: ROUTES.RESOURCES },
    { label: 'Quick Links', icon: QuickIcon, hasDropdown: true },
];

const ChevronIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
    </svg>
);

const SidebarToggleButton = ({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="absolute -right-4 top-5 w-[32px] h-[32px] bg-white border border-[var(--color-border-subtle)] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 z-50 shadow-sm"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
        <div className={`transform transition-transform duration-200 ${isCollapsed ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`}>
            <ChevronIcon />
        </div>
    </button>
);


export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const navLinkClasses = "flex items-center py-2.5 px-4 no-underline font-normal rounded transition-all duration-200 cursor-pointer w-full border-none bg-none text-base text-left tracking-[-0.02em] gap-2";
    const activeClasses = "bg-[var(--color-brand-primary)] text-white font-medium [&_img]:brightness-0 [&_img]:invert [&_svg]:brightness-0 [&_svg]:invert";
    const inactiveClasses = "text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]";

    return (
        <aside className={`${isCollapsed ? 'w-[88px]' : 'w-[264px]'} h-full bg-[var(--color-bg-primary)] border-r border-[var(--color-border-subtle)] flex flex-col transition-all duration-300 relative group`}>

            <SidebarToggleButton isCollapsed={isCollapsed} onClick={() => setIsCollapsed(!isCollapsed)} />
            <div className="flex-1 flex flex-col overflow-y-auto py-8">

                <nav>
                    <ul className="list-none p-4 m-0 flex flex-col gap-2">

                        {SIDEBAR_ITEMS.map((item, index) => (
                            <li key={index}>
                                {item.route ? (
                                    <NavLink
                                        to={item.route}
                                        className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : inactiveClasses}`}
                                        end={item.route === ROUTES.DASHBOARD}
                                    >
                                        <div className={`w-6 h-6 flex items-center justify-center ${!isCollapsed ? 'mr-3' : 'mx-auto'}`}>
                                            <span className="block w-[24px] h-[24px]"><img src={item.icon} alt={item.label} className="max-w-full max-h-full" /></span>
                                        </div>
                                        {!isCollapsed && <span className="whitespace-nowrap">{item.label}</span>}


                                        {!isCollapsed && item.hasDropdown && <ChevronIcon />}

                                    </NavLink>
                                ) : (
                                    <div className={`${navLinkClasses} ${inactiveClasses}`}>
                                        <div className={`w-6 h-6 flex items-center justify-center ${!isCollapsed ? 'mr-3' : 'mx-auto'}`}>
                                            <img src={item.icon} alt={item.label} className="max-w-full max-h-full" />
                                        </div>
                                        {!isCollapsed && <span className="whitespace-nowrap">{item.label}</span>}


                                        {!isCollapsed && item.hasDropdown && <ChevronIcon />}

                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-auto px-4">
                    <button className={`${navLinkClasses} text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]`}>
                        <div className={`w-6 h-6 flex items-center justify-center ${!isCollapsed ? 'mr-3' : 'mx-auto'}`}>
                            <img src={FeedbackIcon} alt="Submit feedback" className="max-w-full max-h-full" />
                        </div>
                        {!isCollapsed && <span className="whitespace-nowrap">Submit feedback</span>}


                    </button>
                </div>
            </div>
        </aside>
    );
};
