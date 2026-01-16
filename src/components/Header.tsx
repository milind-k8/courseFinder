
import CourseIconSrc from '../assets/coursefinder.svg'
import Input from './common/Input';
import SearchIconSrc from '../assets/searchIcon.svg'
import SpeakerIconSrc from '../assets/speaker.svg'
import BellIconSrc from '../assets/bell.svg'
import ProfileIconSrc from '../assets/chevron-down.svg'
import headerUser from '../assets/header-user.png'

const HeaderLogo = () => (
    <div className="w-[264px] flex items-center justify-center">
        <img src={CourseIconSrc} alt="Course Finder" />
    </div>
);

const HeaderSearch = () => (
    <Input
        placeholder="Search by student name, ack no."
        icon={<img src={SearchIconSrc} alt="Search" />}
    />
);

const WhatsNew = () => (
    <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0 text-white" aria-label="See what's new">
        <img src={SpeakerIconSrc} alt="" aria-hidden="true" />
        <span className="underline">Whats New?</span>
    </button>
);

const NotificationBell = () => (
    <button className="relative w-[44px] h-[44px] border flex items-center justify-center border-[var(--color-border-secondary)] rounded-[8px] bg-transparent cursor-pointer p-0" aria-label="Notifications, 2 unread">
        <img src={BellIconSrc} alt="" aria-hidden="true" />
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
            <img src={ProfileIconSrc} alt="" aria-hidden="true" />
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
