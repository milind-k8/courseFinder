
import Button from "../../../components/common/Button";
// @ts-ignore
import studentImage from "../../../assets/images/student_portrait.png";

const AlliedServicesBanner = () => {
    return (
        <div
            className="w-full rounded-[16px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden mt-8"
            style={{
                background: 'var(--color-brand-gradient)',
                boxShadow: '0px 1px 15px 0px var(--color-shadow-dropdown)'
            }}
        >
            {/* Left Content */}
            <div className="z-10 flex flex-col gap-6 max-w-[600px]">
                <div className="space-y-2">
                    <p className="text-white text-[16px] font-[700]">Allied Services</p>
                    <h2 className="text-white text-[24px] md:text-[32px] font-[500]">Overseas Education Loans</h2>
                    <p className="text-white/90 text-[16px] md:text-[18px] font-[400] leading-relaxed max-w-[500px]">
                        Provide end to end overseas education loan assistance to your students to help them achieve their goal
                    </p>
                </div>
                <Button
                    variant="white"
                    className="w-fit font-semibold"
                >
                    Get Started
                </Button>
            </div>

            {/* Right Image */}
            <div className="relative z-10 mt-8 md:mt-0">
                <div className="relative w-[180px] h-[180px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-4 border-white/10 flex items-center justify-center bg-blue-500/20 backdrop-blur-sm">
                    <img
                        src={studentImage}
                        alt="Student with backpack"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Decorative elements - small stars/dots based on the description/vibe */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full opacity-60"></div>
                <div className="absolute bottom-10 left-0 w-2 h-2 bg-white rounded-full opacity-40"></div>
            </div>

            {/* Background decoration circles if needed, keeping it simple for now based on gradient */}
        </div>
    );
};

export default AlliedServicesBanner;
