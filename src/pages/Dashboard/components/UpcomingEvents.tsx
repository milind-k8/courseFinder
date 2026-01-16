import { useState } from 'react';
import type { EventData } from "../../../data/dashboardData";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";
import ChevronIcon from '../../../assets/chevron-left.svg?react';
import GroupImage from '../../../assets/groupImage.jpg';
import BuidingIcon from '../../../assets/buiding.svg?react';
import UserIcon from '../../../assets/user.svg?react';
import LazyImage from '../../../components/common/LazyImage';

interface UpcomingEventsProps {
    data: EventData[];
}

export default function UpcomingEvents({ data }: UpcomingEventsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const eventData = data[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    const [timeTime, timePeriod] = eventData.time.split(' ');

    return (
        <Card className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-[700] text-[16px]">Upcoming Events</h3>
                <div className="flex gap-1">
                    <button
                        onClick={handlePrev}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-[var(--color-border-subtle)] hover:bg-[var(--color-bg-hover)]"
                    >
                        <ChevronIcon aria-label="Previous" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-[var(--color-border-subtle)] hover:bg-[var(--color-bg-hover)]"
                    >
                        <ChevronIcon className="rotate-180" aria-label="Next" />
                    </button>
                </div>
            </div>

            <div>
                <div className="overflow-hidden mb-3 h-[140px]">
                    <LazyImage
                        src={eventData.imageUrl || GroupImage}
                        alt={eventData.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h4 className="font-[500] text-[16px] text-[var(--color-text-primary)]">{eventData.title}</h4>
                        <p className="font-[500] text-[13px] mb-1">{eventData.date}</p>
                    </div>
                    <div className="bg-[var(--color-bg-secondary)] rounded px-1 py-2 text-center min-w-[50px]">
                        <div className="text-[13px] font-[500] text-[var(--color-text-primary)]">{timeTime}</div>
                        <div className="text-[12px] font-[400] text-[var(--color-text-secondary)] uppercase">{timePeriod}</div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] mb-3">
                    <BuidingIcon aria-hidden="true" />
                    {eventData.university}
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] mb-4">
                    <UserIcon aria-hidden="true" />
                    By {eventData.presenter}
                </div>
                <Button className="w-full justify-center">Register Now</Button>
            </div>
        </Card>
    );
}
