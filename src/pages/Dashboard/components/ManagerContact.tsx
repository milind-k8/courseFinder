import { managerData } from "../../../data/dashboardData";
import Card from "../../../components/common/Card";
import UserImage from '../../../assets/user-img.png';

export default function ManagerContact() {
    return (
        <div>
            <h3 className="font-[700] text-[16px] mb-4 text-[var(--color-text-primary)]">Contact Regional Manager</h3>
            <div className="flex flex-col gap-4">
                {managerData.map((manager) => (
                    <Card key={manager.id} padding="p-0" className="overflow-hidden border border-[var(--color-border-subtle)]">
                        <div className="p-4 flex gap-4 items-center">
                            <img
                                src={UserImage}
                                alt={manager.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-[var(--color-brand-primary)] font-[500] text-[16px]">{manager.name}</h4>
                                <p className="text-[13px] text-[var(--color-text-primary)] font-[500] mt-0.5">
                                    {manager.phone} <span className="text-[var(--color-border-light)] mx-2">|</span> {manager.location}
                                </p>
                            </div>
                        </div>
                        <div className="bg-[var(--color-bg-secondary)] py-2 text-center text-[13px] text-[var(--color-text-primary)] font-[400] border-t border-[var(--color-border-subtle)]">
                            {manager.email}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
