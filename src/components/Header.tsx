
import CourseIcon from '../assets/coursefinder.svg?react'
import Input from './common/Input';
import SearchIcon from '../assets/searchIcon.svg?react'
import SpeakerIcon from '../assets/speaker.svg?react'
import BellIcon from '../assets/bell.svg?react'
import ProfileIcon from '../assets/chevron-down.svg?react'
import headerUser from '../assets/header-user.png'

interface HeaderProps {
    onMenuClick: () => void;
}

const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const HeaderLogo = () => (
    <div className="w-auto lg:w-[264px] flex items-center justify-center px-4 lg:px-0">
        <CourseIcon aria-label="Course Finder" />
    </div>
);

const WhatsNew = () => (
    <button className="hidden lg:flex items-center gap-2 bg-transparent border-none cursor-pointer p-0 text-white" aria-label="See what's new">
        <SpeakerIcon aria-hidden="true" />
        <span className="underline">Whats New?</span>
    </button>
);

const NotificationBell = () => (
    <button className="hidden lg:flex relative w-[44px] h-[44px] border items-center justify-center border-[var(--color-border-secondary)] rounded-[8px] bg-transparent cursor-pointer p-0" aria-label="Notifications, 2 unread">
        <BellIcon aria-hidden="true" />
        <div className="absolute top-1.5 right-1.5 w-[16px] h-[16px] text-[12px] bg-red-500 text-white rounded-full flex items-center justify-center">
            2
        </div>
    </button>
);

const UserProfile = () => (
    <button className="flex items-center gap-2 lg:gap-4 bg-transparent border-none cursor-pointer p-0 text-white" aria-label="User profile">
        <img src={headerUser} alt="" className="rounded-full w-8 h-8 lg:w-auto lg:h-auto" />
        <div className="hidden lg:flex items-center gap-2">
            <span>John Doe</span>
            <ProfileIcon aria-hidden="true" />
        </div>
    </button>
);

const HamburgerButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="lg:hidden w-[44px] h-[44px] flex items-center justify-center bg-transparent border-none cursor-pointer p-0 text-white"
        aria-label="Open navigation menu"
    >
        <HamburgerIcon />
    </button>
);

const MobileSearchButton = () => (
    <button className="md:hidden w-[44px] h-[44px] flex items-center justify-center bg-transparent border-none cursor-pointer p-0 text-white" aria-label="Search">
        <SearchIcon className="[&_path]:stroke-white [&_circle]:stroke-white" />
    </button>
);

export function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="h-[60px] lg:h-[76px] bg-[var(--color-brand-primary)] border-b border-[var(--color-border-subtle)] flex items-center text-[var(--color-bg-primary)]">
            <div className="flex items-center">
                <HamburgerButton onClick={onMenuClick} />
                <HeaderLogo />
            </div>

            <div className="flex justify-between items-center px-4 lg:px-8 flex-1">
                <div className="hidden md:block flex-1 max-w-md">
                    <Input
                        placeholder="Search by student name, ack no."
                        icon={<SearchIcon />}
                    />
                </div>

                <div className="flex items-center gap-4 lg:gap-10 ml-auto">
                    <MobileSearchButton />
                    <WhatsNew />
                    <NotificationBell />
                    <UserProfile />
                </div>
            </div>
        </header>
    );
};
