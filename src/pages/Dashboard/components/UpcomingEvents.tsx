import { useState } from 'react';
import { upcomingEvents } from "../../../data/dashboardData";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";
import Chevron from '../../../assets/chevron-left.svg';
import GroupImage from '../../../assets/groupImage.jpg';
import Buiding from '../../../assets/buiding.svg';
import User from '../../../assets/user.svg';

export default function UpcomingEvents() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const eventData = upcomingEvents[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % upcomingEvents.length);
    };

    const [timeTime, timePeriod] = eventData.time.split(' ');

    return (
        <Card className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-[700] text-[16px]">Upcoming Events</h3>
                <div className="flex gap-1">
                    <button
                        onClick={handlePrev}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                    >
                        <img className="" src={Chevron} alt="Previous" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                    >
                        <img className="rotate-180" src={Chevron} alt="Next" />
                    </button>
                </div>
            </div>

            <div>
                <div className="overflow-hidden mb-3 h-[140px]">
                    <img
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
                    <div className="bg-gray-100 rounded px-1 py-2 text-center min-w-[50px]">
                        <div className="text-[13px] font-[500] text-[var(--color-text-primary)]">{timeTime}</div>
                        <div className="text-[12px] font-[400] text-[var(--color-text-secondary)] uppercase">{timePeriod}</div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                    <img src={Buiding} alt="" />
                    {eventData.university}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-4">
                    <img src={User} alt="" />
                    By {eventData.presenter}
                </div>
                <Button className="w-full justify-center">Register Now</Button>
            </div>
        </Card>
    );
}
