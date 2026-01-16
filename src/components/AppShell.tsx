import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';


interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header onMenuClick={handleToggleSidebar} />
            <div className="flex flex-1 overflow-hidden">
                <div className="hidden lg:block">
                    <Sidebar isOpen={true} onClose={handleCloseSidebar} />
                </div>
                <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} isMobile={true} />
                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[var(--color-bg-secondary)]">
                    {children}
                </main>
            </div>
        </div>
    );
};
