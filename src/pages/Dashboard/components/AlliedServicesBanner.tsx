import { useState, useEffect } from "react";
import Button from "../../../components/common/Button";
// @ts-ignore
import studentImage from "../../../assets/images/student_portrait.png";
import LazyImage from '../../../components/common/LazyImage';
import type { BannerData } from "../../../data/dashboardData";

interface AlliedServicesBannerProps {
    data: BannerData[];
    autoRotateInterval?: number;
}

const AlliedServicesBanner = ({ data, autoRotateInterval = 5000 }: AlliedServicesBannerProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     if (data.length <= 1) return;

    //     const interval = setInterval(() => {
    //         setCurrentIndex((prev) => (prev + 1) % data.length);
    //     }, autoRotateInterval);

    //     return () => clearInterval(interval);
    // }, [data.length, autoRotateInterval]);

    const currentBanner = data[currentIndex];

    return (
        <div className="mt-8">
            <div
                className="w-full rounded-[16px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
                style={{
                    background: 'var(--color-brand-gradient)',
                    boxShadow: '0px 1px 15px 0px var(--color-shadow-dropdown)'
                }}
            >
                <div className="z-10 flex flex-col gap-6 max-w-[600px]">
                    <div className="space-y-2">
                        <p className="text-white text-[16px] font-[700]">{currentBanner.subtitle}</p>
                        <h2 className="text-white text-[24px] md:text-[32px] font-[500]">{currentBanner.title}</h2>
                        <p className="text-white/90 text-[16px] md:text-[18px] font-[400] leading-relaxed max-w-[500px]">
                            {currentBanner.description}
                        </p>
                    </div>
                    <Button
                        variant="white"
                        className="w-fit font-semibold"
                    >
                        {currentBanner.buttonLabel}
                    </Button>
                </div>

                <div className="relative z-10 mt-8 md:mt-0">
                    <div className="relative w-[180px] h-[180px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-4 border-white/10 flex items-center justify-center bg-blue-500/20 backdrop-blur-sm">
                        <LazyImage
                            src={studentImage}
                            alt="Student with backpack"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full opacity-60"></div>
                    <div className="absolute bottom-10 left-0 w-2 h-2 bg-white rounded-full opacity-40"></div>
                </div>
            </div>

            {data.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {data.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 border-none p-0 ${index === currentIndex
                                ? "bg-[var(--color-text-primary)]"
                                : "bg-[var(--color-border-light)]"
                                }`}
                            aria-label={`Show slide ${index + 1}`}
                            aria-current={index === currentIndex ? true : undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AlliedServicesBanner;
