
import CourseIcon from '../assets/coursefinder.svg?react'
import Input from './common/Input';
import SearchIcon from '../assets/searchIcon.svg?react'
import SpeakerIcon from '../assets/speaker.svg?react'
import BellIcon from '../assets/bell.svg?react'
import ProfileIcon from '../assets/chevron-down.svg?react'
import headerUser from '../assets/header-user.png'

const HeaderLogo = () => (
    <div className="w-[264px] flex items-center justify-center">
        <CourseIcon aria-label="Course Finder" />
    </div>
);

const HeaderSearch = () => (
    <Input
        placeholder="Search by student name, ack no."
        icon={<SearchIcon />}
    />
);

const WhatsNew = () => (
    <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0 text-white" aria-label="See what's new">
        <SpeakerIcon aria-hidden="true" />
        <span className="underline">Whats New?</span>
    </button>
);

const NotificationBell = () => (
    <button className="relative w-[44px] h-[44px] border flex items-center justify-center border-[var(--color-border-secondary)] rounded-[8px] bg-transparent cursor-pointer p-0" aria-label="Notifications, 2 unread">
        <BellIcon aria-hidden="true" />
        <div className="absolute top-1.5 right-1.5 w-[16px] h-[16px] text-[12px] bg-red-500 text-white rounded-full flex items-center justify-center">
            2
        </div>
    </button>
);

const UserProfile = () => (
    <button className="flex items-center gap-4 bg-transparent border-none cursor-pointer p-0 text-white" aria-label="User profile">
        <img src={headerUser} alt="" className="rounded-full" />
        <div className="flex items-center gap-2">
            <span>John Doe</span>
            <ProfileIcon aria-hidden="true" />
        </div>
    </button>
);

const HeaderActions = () => (
    <div className="flex items-center gap-10">
        <WhatsNew />
        <NotificationBell />
        <UserProfile />
    </div>
);

export function Header() {
    return (
        <header className="h-[76px] bg-[var(--color-brand-primary)] border-b border-[var(--color-border-subtle)] flex items-center text-[var(--color-bg-primary)]">
            <HeaderLogo />
            <div className="flex justify-between px-8 flex-1">
                <HeaderSearch />
                <HeaderActions />
            </div>
        </header>
    );
};
