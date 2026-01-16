import { useState } from "react";
import type { NewsData } from "../../../data/dashboardData";
import Card from "../../../components/common/Card";
import NewsPaperIcon from "../../../assets/news-paper.svg?react";

interface NewsBulletinProps {
    data: NewsData[];
}

export default function NewsBulletin({ data }: NewsBulletinProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentNews = data[currentIndex];

    return (
        <Card className="mb-6">
            <h3 className="font-[700] text-[16px] mb-4">News Bulletin</h3>
            <div className="flex gap-4">
                <div className="min-w-[40px] h-[40px] border-[1px] border-[var(--color-text-secondary)] rounded-full flex items-center justify-center text-[var(--color-brand-primary)]">
                    <NewsPaperIcon aria-label="News Paper" />
                </div>
                <div>
                    <h4 className="font-[700] text-[16px] mb-1">{currentNews.title}</h4>
                    <p className="text-[14px] font-[400] text-[var(--color-text-secondary)] mb-1 leading-relaxed">
                        {currentNews.description}
                        <a href={currentNews.readMoreLink} className=" ml-1 text-[var(--color-brand-primary)] underline">
                            Read More
                        </a>
                    </p>
                </div>
            </div>

            <div className="flex justify-center gap-1 mt-4">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-colors duration-300 border-none p-0 ${index === currentIndex ? "bg-[var(--color-text-primary)]" : "bg-[var(--color-border-light)]"
                            }`}
                        aria-label={`Show news item ${index + 1}`}
                        aria-current={index === currentIndex ? true : undefined}
                    ></button>
                ))}
            </div>
        </Card>
    );
}
