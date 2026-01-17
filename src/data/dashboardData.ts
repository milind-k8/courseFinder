export interface StatCardData {
    id: string;
    count: number;
    label: string;
    color: string; // Hex or tailwind class suffix
    buttonLabel: string;
}

export interface ApplicationData {
    id: string;
    ackNo: string;
    studentName: string;
    email: string;
    university: string;
    program: string;
    pendingSince: string;
    date: string;
    country: string;
    intake: string;
}

export interface NewsData {
    id: string;
    title: string;
    description: string;
    readMoreLink: string;
}

export interface ManagerData {
    id: string;
    name: string;
    phone: string;
    location: string;
    email: string;
    imageUrl: string;
}

export interface EventData {
    id: string;
    title: string;
    date: string;
    time: string;
    university: string;
    presenter: string;
    imageUrl: string;
}

export interface LinkData {
    id: string;
    label: string;
    url: string;
}

export interface BannerData {
    id: string;
    subtitle: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
}

export const alliedServicesBannerData: BannerData[] = [
    {
        id: "1",
        subtitle: "Allied Services",
        title: "Overseas Education Loans",
        description: "Provide end to end overseas education loan assistance to your students to help them achieve their goal",
        buttonLabel: "Get Started",
        buttonLink: "#",
    },
    {
        id: "2",
        subtitle: "Allied Services",
        title: "Visa Assistance",
        description: "Expert guidance and support for student visa applications to ensure a smooth and hassle-free process",
        buttonLabel: "Learn More",
        buttonLink: "#",
    },
    {
        id: "3",
        subtitle: "Allied Services",
        title: "Accommodation Services",
        description: "Find the perfect student accommodation near your university with our trusted partners worldwide",
        buttonLabel: "Explore",
        buttonLink: "#",
    },
];

export const statsData: StatCardData[] = [
    {
        id: "1",
        count: 18,
        label: "Conditional",
        color: "bg-[#E8F0FE] text-[#226CF5]", // Light Blue
        buttonLabel: "Offer letter",
    },
    {
        id: "2",
        count: 22,
        label: "Un-Conditional",
        color: "bg-[#F0FAEE] text-[#34A853]", // Light Green
        buttonLabel: "Offer letter",
    },
    {
        id: "3",
        count: 30,
        label: "Payment Received",
        color: "bg-[#FEF7E6] text-[#FBBC05]", // Light Yellow
        buttonLabel: "All Country",
    },
    {
        id: "4",
        count: 8,
        label: "Payment Received",
        color: "bg-[#FEF2F2] text-[#EA4335]", // Light Red
        buttonLabel: "Offer letter",
    },
    {
        id: "5",
        count: 8,
        label: "VISA Received",
        color: "bg-[#F3F4F6] text-[#4B5563]", // Light Grey
        buttonLabel: "Offer letter",
    },
];

export const applicationsData: ApplicationData[] = [
    {
        id: "1",
        ackNo: "117110/22-23",
        studentName: "Rishi Joshi",
        email: "rishijoshi@gmail.com",
        university: "Sheffield Hallam...",
        program: "Mwc Internation...",
        pendingSince: "1 Day",
        date: "12 Dec 2022",
        country: "uk",
        intake: "jan-2024",
    },
    {
        id: "2",
        ackNo: "117110/22-23",
        studentName: "Viren Shah",
        email: "virensha24@gmail.com",
        university: "Sheffield Hallam...",
        program: "Mwc Internation...",
        pendingSince: "1 Day",
        date: "12 Dec 2022",
        country: "uk",
        intake: "sep-2024",
    },
    {
        id: "3",
        ackNo: "117110/22-23",
        studentName: "Tushar Joshi",
        email: "rishijoshi@gmail.com",
        university: "Sheffield Hallam...",
        program: "Mwc Internation...",
        pendingSince: "1 Day",
        date: "12 Dec 2022",
        country: "uk",
        intake: "jan-2025",
    },
    {
        id: "4",
        ackNo: "117121/22-23",
        studentName: "Anjali Gupta",
        email: "anjali.gupta@gmail.com",
        university: "University of Oxford",
        program: "Economics",
        pendingSince: "2 Days",
        date: "11 Dec 2022",
        country: "uk",
        intake: "jan-2024",
    },
    {
        id: "5",
        ackNo: "117122/22-23",
        studentName: "Rahul Verma",
        email: "rahul.verma@gmail.com",
        university: "Cambridge University",
        program: "Mathematics",
        pendingSince: "3 Days",
        date: "10 Dec 2022",
        country: "uk",
        intake: "sep-2024",
    },
    {
        id: "6",
        ackNo: "117111/22-23",
        studentName: "Alice Smith",
        email: "alice.smith@gmail.com",
        university: "University of Leeds",
        program: "Computer Science",
        pendingSince: "2 Days",
        date: "10 Dec 2022",
        country: "uk",
        intake: "jan-2024",
    },
    {
        id: "7",
        ackNo: "117112/22-23",
        studentName: "Bob Jones",
        email: "bob.jones@gmail.com",
        university: "University of Manchester",
        program: "Business Mgmt",
        pendingSince: "3 Days",
        date: "09 Dec 2022",
        country: "usa",
        intake: "jan-2024",
    },
    {
        id: "8",
        ackNo: "117113/22-23",
        studentName: "Charlie Brown",
        email: "charlie.brown@gmail.com",
        university: "King's College",
        program: "Law",
        pendingSince: "1 Day",
        date: "12 Dec 2022",
        country: "usa",
        intake: "sep-2024",
    },
    {
        id: "9",
        ackNo: "117114/22-23",
        studentName: "David Wilson",
        email: "david.wilson@gmail.com",
        university: "Edinburgh University",
        program: "Medicine",
        pendingSince: "5 Days",
        date: "07 Dec 2022",
        country: "canada",
        intake: "jan-2025",
    },
    {
        id: "10",
        ackNo: "117115/22-23",
        studentName: "Eva Green",
        email: "eva.green@gmail.com",
        university: "Bristol University",
        program: "Engineering",
        pendingSince: "2 Days",
        date: "10 Dec 2022",
        country: "canada",
        intake: "jan-2024",
    },
    {
        id: "11",
        ackNo: "117116/22-23",
        studentName: "Frank White",
        email: "frank.white@gmail.com",
        university: "Glasgow University",
        program: "Arts",
        pendingSince: "4 Days",
        date: "08 Dec 2022",
        country: "australia",
        intake: "sep-2024",
    },
    {
        id: "12",
        ackNo: "117117/22-23",
        studentName: "Grace Lee",
        email: "grace.lee@gmail.com",
        university: "Birmingham University",
        program: "Physics",
        pendingSince: "1 Day",
        date: "12 Dec 2022",
        country: "australia",
        intake: "jan-2024",
    },
    {
        id: "13",
        ackNo: "117118/22-23",
        studentName: "Henry Ford",
        email: "henry.ford@gmail.com",
        university: "Liverpool University",
        program: "Chemistry",
        pendingSince: "6 Days",
        date: "06 Dec 2022",
        country: "usa",
        intake: "jan-2025",
    },
    {
        id: "14",
        ackNo: "117119/22-23",
        studentName: "Ivy Chen",
        email: "ivy.chen@gmail.com",
        university: "Newcastle University",
        program: "Biology",
        pendingSince: "2 Days",
        date: "10 Dec 2022",
        country: "canada",
        intake: "sep-2024",
    },
    {
        id: "15",
        ackNo: "117120/22-23",
        studentName: "Jack Black",
        email: "jack.black@gmail.com",
        university: "Leeds Beckett",
        program: "Design",
        pendingSince: "3 Days",
        date: "09 Dec 2022",
        country: "australia",
        intake: "jan-2024",
    },
];

export const newsData: NewsData[] = [
    {
        id: "1",
        title: "Indian student tops harward!",
        description:
            "Indian student tops harward university and makes history. Its the first time for an Indian student to do this.",
        readMoreLink: "#",
    },
    {
        id: "2",
        title: "New Scholarship Program",
        description:
            "The government has announced a new scholarship program for international students starting this fall.",
        readMoreLink: "#",
    },
    {
        id: "3",
        title: "Campus Renovation Update",
        description:
            "The renovations for the science block have been completed ahead of schedule. Visit the new labs today.",
        readMoreLink: "#",
    },
];

export const upcomingEvents: EventData[] = [
    {
        id: "1",
        title: "Event Name Goes here",
        date: "7 Jan 2023",
        time: "4:30 PM",
        university: "University of New York",
        presenter: "Kishori Gupta",
        imageUrl: "", // Placeholder
    },
    {
        id: "2",
        title: "Study in UK Fair",
        date: "15 Jan 2023",
        time: "10:00 AM",
        university: "University of London",
        presenter: "John Doe",
        imageUrl: "", // Placeholder
    },
    {
        id: "3",
        title: "Visa Workshop",
        date: "20 Jan 2023",
        time: "2:00 PM",
        university: "Oxford University",
        presenter: "Jane Smith",
        imageUrl: "", // Placeholder
    },
];

export const quickLinksData: LinkData[] = [
    { id: "1", label: "Learning Resources", url: "#" },
    { id: "2", label: "Exam Schedule", url: "#" },
    { id: "3", label: "Library Portal", url: "#" },
    { id: "4", label: "Events Calendar", url: "#" },
    { id: "5", label: "Student Support", url: "#" },
];

export const managerData: ManagerData[] = [
    {
        id: "1",
        name: "Santosh Sharma",
        phone: "+91 9876543210",
        location: "Hyderabad",
        email: "sshatmal123@kcoverseas.com",
        imageUrl: "https://images.unsplash.com/photo-1548142358-6963570f2777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    },
    {
        id: "2",
        name: "Priya Patel",
        phone: "+91 9876543211",
        location: "Mumbai",
        email: "priya.patel@kcoverseas.com",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
    },
    {
        id: "3",
        name: "Amit Singh",
        phone: "+91 9876543212",
        location: "Delhi",
        email: "amit.singh@kcoverseas.com",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
    },
];
