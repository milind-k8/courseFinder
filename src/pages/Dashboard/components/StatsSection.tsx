import type { StatCardData } from "../../../data/dashboardData";

interface StatsSectionProps {
    data: StatCardData[];
}

export default function StatsSection({ data }: StatsSectionProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 lg:mb-10">
            {data.map((stat) => (
                <div
                    key={stat.id}
                    className={`${stat.color} relative rounded-[8px] p-4 flex flex-col items-center justify-between shadow-sm`}
                >
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[30px] font-[500]">{stat.count}</span>
                        <span className="text-[var(--color-text-primary)] text-center mb-4">{stat.label}</span>
                    </div>
                    <button
                        className="absolute bottom-[-12px] text-[13px] font-semibold px-3 h-[24px] bg-white rounded-[3px] transition-colors mt-3"
                        style={{
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: `var(${stat.borderColor})`,
                            color: stat.color.match(/text-\[([^\]]+)\]/)?.[1] || 'inherit'
                        }}
                    >
                        {stat.buttonLabel}
                    </button>
                </div>
            ))}
        </div>
    );
}
