import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: string;
}

export default function Card({ children, className = "", padding = "p-6" }: CardProps) {
    return (
        <div className={`bg-[var(--color-bg-primary)] rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] ${padding} ${className}`}>
            {children}
        </div>
    );
}
