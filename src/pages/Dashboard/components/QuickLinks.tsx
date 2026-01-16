import type { LinkData } from "../../../data/dashboardData";
import ExternalLinkIcon from "../../../assets/external-link.svg?react";

interface QuickLinksProps {
    data: LinkData[];
}

export default function QuickLinks({ data }: QuickLinksProps) {
    return (
        <div className="mb-8">
            <h3 className="font-[700] text-[16px] mb-4 text-[var(--color-text-primary)]">Quick Links</h3>
            <div className="flex flex-col gap-3">
                {data.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group"
                    >
                        <span className="text-[var(--color-brand-primary)] text-[16px] font-[500] underline">{link.label}</span>
                        <ExternalLinkIcon aria-label="External Link" />
                    </a>
                ))}
            </div>
        </div>
    );
}
