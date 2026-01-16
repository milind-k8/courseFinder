import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import HomeIcon from '../assets/home.svg?react';
import StudentIcon from '../assets/student.svg?react';
import ApplicationIcon from '../assets/application.svg?react';
import SearchIcon from '../assets/search.svg?react';
import WalletIcon from '../assets/wallet.svg?react';
import CommissionIcon from '../assets/commission.svg?react';
import AlliedIcon from '../assets/allied.svg?react';
import InfoIcon from '../assets/info.svg?react';
import FeedbackIcon from '../assets/feedback.svg?react';
import QuickIcon from '../assets/quick.svg?react';

interface SidebarItem {
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    route?: string;
    hasDropdown?: boolean;
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    isMobile?: boolean;
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

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const SidebarToggleButton = ({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="absolute -right-4 top-5 w-[32px] h-[32px] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--color-bg-hover)] z-50 shadow-sm"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
        <div className={`transform transition-transform duration-200 ${isCollapsed ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`}>
            <ChevronIcon />
        </div>
    </button>
);


export function Sidebar({ isOpen, onClose, isMobile = false }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const navLinkClasses = "flex items-center py-2.5 px-4 no-underline font-normal rounded transition-all duration-200 cursor-pointer w-full border-none bg-none text-base text-left tracking-[-0.02em] gap-2";
    const activeClasses = "bg-[var(--color-brand-primary)] text-white font-medium [&_img]:brightness-0 [&_img]:invert [&_svg]:brightness-0 [&_svg]:invert";
    const inactiveClasses = "text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]";

    const handleNavClick = () => {
        if (isMobile) {
            onClose();
        }
    };

    if (!isMobile) {
        return (
            <aside className={`${isCollapsed ? 'w-[88px]' : 'w-[264px]'} h-full bg-[var(--color-bg-primary)] border-r border-[var(--color-border-subtle)] flex flex-col transition-all duration-300 relative`}>
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
                                                <span className="block w-[24px] h-[24px]"><item.icon className="max-w-full max-h-full" aria-label={item.label} /></span>
                                            </div>
                                            {!isCollapsed && <span className="whitespace-nowrap">{item.label}</span>}
                                            {!isCollapsed && item.hasDropdown && <ChevronIcon />}
                                        </NavLink>
                                    ) : (
                                        <div className={`${navLinkClasses} ${inactiveClasses}`}>
                                            <div className={`w-6 h-6 flex items-center justify-center ${!isCollapsed ? 'mr-3' : 'mx-auto'}`}>
                                                <item.icon className="max-w-full max-h-full" aria-label={item.label} />
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
                                <FeedbackIcon className="max-w-full max-h-full" aria-label="Submit feedback" />
                            </div>
                            {!isCollapsed && <span className="whitespace-nowrap">Submit feedback</span>}
                        </button>
                    </div>
                </div>
            </aside>
        );
    }

    if (!isOpen) return null;

    return (
        <>
            <div
                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                onClick={onClose}
                aria-hidden="true"
            />

            <aside className="lg:hidden fixed top-0 left-0 w-[280px] h-full bg-[var(--color-bg-primary)] border-r border-[var(--color-border-subtle)] flex flex-col z-50 shadow-xl">
                <div className="flex items-center justify-between p-4 border-b border-[var(--color-border-subtle)]">
                    <span className="font-semibold text-lg">Menu</span>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center bg-transparent border-none cursor-pointer text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] rounded-lg"
                        aria-label="Close menu"
                    >
                        <CloseIcon />
                    </button>
                </div>

                <div className="flex-1 flex flex-col overflow-y-auto py-4">
                    <nav>
                        <ul className="list-none p-4 m-0 flex flex-col gap-2">
                            {SIDEBAR_ITEMS.map((item, index) => (
                                <li key={index}>
                                    {item.route ? (
                                        <NavLink
                                            to={item.route}
                                            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : inactiveClasses}`}
                                            end={item.route === ROUTES.DASHBOARD}
                                            onClick={handleNavClick}
                                        >
                                            <div className="w-6 h-6 flex items-center justify-center mr-3">
                                                <span className="block w-[24px] h-[24px]"><item.icon className="max-w-full max-h-full" aria-label={item.label} /></span>
                                            </div>
                                            <span className="whitespace-nowrap">{item.label}</span>
                                            {item.hasDropdown && <ChevronIcon />}
                                        </NavLink>
                                    ) : (
                                        <div className={`${navLinkClasses} ${inactiveClasses}`}>
                                            <div className="w-6 h-6 flex items-center justify-center mr-3">
                                                <item.icon className="max-w-full max-h-full" aria-label={item.label} />
                                            </div>
                                            <span className="whitespace-nowrap">{item.label}</span>
                                            {item.hasDropdown && <ChevronIcon />}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-auto px-4">
                        <button className={`${navLinkClasses} text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]`}>
                            <div className="w-6 h-6 flex items-center justify-center mr-3">
                                <FeedbackIcon className="max-w-full max-h-full" aria-label="Submit feedback" />
                            </div>
                            <span className="whitespace-nowrap">Submit feedback</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};
