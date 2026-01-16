import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';


interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-8 bg-[var(--color-bg-secondary)]">
                    {children}
                </main>
            </div>
        </div>
    );
};
