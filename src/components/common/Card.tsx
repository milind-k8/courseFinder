import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: string;
}

export default function Card({ children, className = "", padding = "p-6" }: CardProps) {
    return (
        <div className={`bg-white rounded-[8px] shadow-[0px_4px_20px_0px_#0000000D] ${padding} ${className}`}>
            {children}
        </div>
    );
}
