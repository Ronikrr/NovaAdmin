import { Banknote, Bell, BookOpen, CreditCard, DollarSign, Lock, Package, PlusCircle, ShoppingCart, Star, Users, Wallet } from "lucide-react";
import phoneImage from '../assets/download.jpg'
export const timelineData = [
    { icon: Bell, text: "$2400, Design changes", date: "22 DEC 7:20 PM" },
    { icon: PlusCircle, text: "New order #1832412", date: "21 DEC 11 PM" },
    { icon: ShoppingCart, text: "Server payments for April", date: "21 DEC 9:34 PM" },
    { icon: CreditCard, text: "New card added for order #4395133", date: "20 DEC 2:20 AM" },
    { icon: Lock, text: "Unlock packages for development", date: "18 DEC 4:54 AM" },
    { icon: Wallet, text: "New order #9583120", date: "17 DEC" }
];

export const stats = [
    {
        id: 1,
        icon: Banknote,
        condition: "Today's Money",
        count: "$53k",
        per: "+55%",
        detail: "than last week"
    },
    {
        id: 2,
        icon: Banknote,
        condition: "Today's Users",
        count: "2300",
        per: "+3%",
        detail: "than last month"
    },
    {
        id: 3,
        icon: Banknote,
        condition: "New Clients",
        count: "3,462",
        per: "-2%",
        detail: "than yesterday"
    },
    {
        id: 4,
        icon: Banknote,
        condition: "Sales",
        count: "$103,430",
        per: "+5%",
        detail: "than yesterday"
    }
];

export const dashboardStats = [
    {
        id: 1,
        icons: DollarSign,
        count: "$28,430",
        condition: "Revenue",
        per: "+12.5%",
        detail: "compared to last month",
    },
    {
        id: 2,
        icons: ShoppingCart,
        count: "1,240",
        condition: "Orders",
        per: "+8.3%",
        detail: "increase this week",
    },
    {
        id: 3,
        icons: Users,
        count: "982",
        condition: "Customers",
        per: "+5.1%",
        detail: "growth in user base",
    },
    {
        id: 4,
        icons: Package,
        count: "145",
        condition: "Products",
        per: "-2.0%",
        detail: "less than last month",
    },
];
export const data = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: '40-49',
        uv: 8.63,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: '50+',
        uv: 2.63,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'unknow',
        uv: 6.67,
        pv: 4800,
        fill: '#ffc658',
    },
];

export const recentOrders = [
    { id: "#001", customer: "John Doe", total: "$129.99", status: "Delivered" },
    { id: "#002", customer: "Jane Smith", total: "$89.00", status: "Pending" },
    { id: "#003", customer: "Mike Johnson", total: "$199.50", status: "Cancelled" },
    { id: "#004", customer: "John Doe", total: "$129.99", status: "Delivered" },
    { id: "#005", customer: "Jane Smith", total: "$89.00", status: "Pending" },
    { id: "#006", customer: "Mike Johnson", total: "$199.50", status: "Cancelled" },
    { id: "#007", customer: "John Doe", total: "$129.99", status: "Delivered" },
    { id: "#008", customer: "Jane Smith", total: "$89.00", status: "Pending" },
    { id: "#009", customer: "Mike Johnson", total: "$199.50", status: "Cancelled" },
];
export const activityData = [
    { message: "New message from Alex Johnson", time: "5 minutes ago" },
    { message: "Payment received from Dana Wu", time: "1 hour ago" },
    { message: "Order shipped to Michael Chen", time: "30 minutes ago" },
    { message: "New comment from Lisa Ray", time: "10 minutes ago" },
    { message: "Refund issued to Tom Brady", time: "3 hours ago" },
    { message: "Support ticket from Nina Patel", time: "45 minutes ago" },
    { message: "Subscription started by Samir Khan", time: "1 day ago" },
    { message: "Profile updated by Emma Brooks", time: "20 minutes ago" },
    { message: "Invoice sent to Karen Smith", time: "2 hours ago" },
    { message: "New registration from Jake Lee", time: "15 minutes ago" }
];
export const viewData = [
    { day: "M", views: 50 },
    { day: "T", views: 15 },
    { day: "W", views: 8 },
    { day: "T", views: 22 },
    { day: "F", views: 49 },
    { day: "S", views: 7 },
    { day: "S", views: 39 },
];

// Monthly sales data
export const salesData = [
    { name: 'Apr', sales: 50 },
    { name: 'May', sales: 40 },
    { name: 'Jun', sales: 300 },
    { name: 'Jul', sales: 320 },
    { name: 'Aug', sales: 500 },
    { name: 'Sep', sales: 350 },
    { name: 'Oct', sales: 180 },
    { name: 'Nov', sales: 220 },
    { name: 'Dec', sales: 500 },
];

export const topselling = [
    {
        id: 1,
        src: phoneImage,
        name: "iPhone 14 Pro Max",
        title: "iPhone 14 Pro Max 12gb ram storage 1Tb ",
        ram: "12gb",
        storage: "1Tb",
        sold: "320"
    }, {
        id: 2,
        src: phoneImage,
        name: "iPhone 14 Pro Max",
        title: "iPhone 14 Pro Max 12gb ram storage 1Tb ",
        ram: "12GB",
        storage: "2Tb",
        sold: "200"
    }, {
        id: 3,
        src: phoneImage,
        name: "iPhone 14 Pro Max",
        title: "iPhone 14 Pro Max 12gb ram storage 1Tb ",
        ram: "12GB",
        storage: "1Tb",
        sold: "150"
    }, {
        id: 4,
        src: phoneImage,
        name: "iPhone 14 Pro Max",
        title: "iPhone 14 Pro Max 12gb ram storage 1Tb ",
        ram: "8GB",
        storage: "512GB",
        sold: "120"
    }, {
        id: 5,
        src: phoneImage,
        name: "iPhone 14 Pro Max",
        title: "iPhone 14 Pro Max 12gb ram storage 1Tb ",
        ram: "8GB",
        storage: "256GB",
        sold: "100"
    },

]
export const statsdata = [
    {
        id: "stat-01",
        title: "Total Courses",
        icon: BookOpen,
        value: "28",
        per: "+22%",
        period: "since last month",
    },
    {
        id: "stat-02",
        title: "Enrollments",
        icon: Users,
        value: "1,492",
        per: "+12%",
        period: "since last month",
    },
    {
        id: "stat-03",
        title: "Revenue",
        icon: DollarSign,
        value: "$12,300",
        per: "+8.5%",
        period: "since last month",
    },
    {
        id: "stat-04",
        title: "Reviews",
        icon: Star,
        value: "320",
        per: "-3%",
        period: "since last month",
    },
];

export const recentEnrollments = [
    { id: "#ENR001", student: "Alice Johnson", course: "React Basics", date: "May 27, 2025" },
    { id: "#ENR002", student: "Bob Smith", course: "Node.js Advanced", date: "May 26, 2025" },
    { id: "#ENR003", student: "Carol Lee", course: "Intro to MongoDB", date: "May 25, 2025" },
    { id: "#ENR004", student: "David Kim", course: "TypeScript Fundamentals", date: "May 25, 2025" },
    { id: "#ENR005", student: "Emma Watson", course: "Next.js Essentials", date: "May 24, 2025" },
    { id: "#ENR006", student: "Farah Patel", course: "Tailwind CSS in Practice", date: "May 24, 2025" },
    { id: "#ENR007", student: "George Li", course: "Express.js Deep Dive", date: "May 23, 2025" },
    { id: "#ENR008", student: "Hina Rao", course: "Building REST APIs", date: "May 22, 2025" },
    { id: "#ENR009", student: "Isaac Mendes", course: "Firebase Authentication", date: "May 21, 2025" },
    { id: "#ENR010", student: "Jenny Park", course: "GraphQL with Apollo", date: "May 20, 2025" },
    { id: "#ENR011", student: "Kevin Tran", course: "Docker for Developers", date: "May 20, 2025" },
    { id: "#ENR012", student: "Laura Chen", course: "JavaScript Algorithms", date: "May 19, 2025" },
    { id: "#ENR013", student: "Mohit Sharma", course: "Advanced React Patterns", date: "May 18, 2025" },
    { id: "#ENR014", student: "Natalie Brooks", course: "SASS & SCSS Mastery", date: "May 17, 2025" },
    { id: "#ENR015", student: "Oscar Delgado", course: "Web Accessibility 101", date: "May 17, 2025" },
];


export const topCourses = [
    { title: "React for Beginners", rating: "4.8", students: 340 },
    { title: "Node.js Mastery", rating: "4.6", students: 290 },
    { title: "Advanced JavaScript", rating: "4.5", students: 250 },
    { title: "Full-Stack Web Development", rating: "4.9", students: 410 },
    { title: "Intro to MongoDB", rating: "4.7", students: 320 },
    { title: "Tailwind CSS Deep Dive", rating: "4.6", students: 275 },
    { title: "TypeScript Essentials", rating: "4.5", students: 230 },
    { title: "Python for Web", rating: "4.4", students: 300 },
    { title: "GraphQL Fundamentals", rating: "4.3", students: 190 },
    { title: "Docker & Kubernetes", rating: "4.6", students: 260 },
    { title: "Next.js in Action", rating: "4.7", students: 310 },
    { title: "REST APIs with Express.js", rating: "4.5", students: 280 },
    { title: "Database Design Basics", rating: "4.4", students: 210 },
    { title: "Vue.js Crash Course", rating: "4.3", students: 185 },
    { title: "Modern HTML & CSS", rating: "4.8", students: 360 },
];

export const progress = [
    { name: "React Pro", percent: 90 },
    { name: "Tailwind CSS Complete", percent: 78 },
    { name: "Full Stack Bootcamp", percent: 62 },
    { name: "Node.js Mastery", percent: 85 },
    { name: "Advanced JavaScript", percent: 70 },
    { name: "MongoDB Essentials", percent: 55 },
    { name: "TypeScript Fundamentals", percent: 65 },
    { name: "GraphQL Basics", percent: 40 },
    { name: "Docker for Developers", percent: 50 },
    { name: "Next.js Advanced", percent: 75 },
];



export const datas = [
    { name: 'Week 1', enrollments: 120, views: 2400, revenue: 1200 },
    { name: 'Week 2', enrollments: 200, views: 3200, revenue: 1800 },
    { name: 'Week 3', enrollments: 150, views: 2800, revenue: 1500 },
    { name: 'Week 4', enrollments: 300, views: 5000, revenue: 3000 },
    { name: 'Week 5', enrollments: 250, views: 4700, revenue: 2700 },
    { name: 'Week 6', enrollments: 280, views: 5200, revenue: 2900 },
    { name: 'Week 7', enrollments: 350, views: 6100, revenue: 3400 },
];
export const events = [
    { id: 1, title: 'React Hooks Deep Dive', date: 'June 5, 2025 - 3 PM EST', speaker: 'Jane Doe' },
    { id: 2, title: 'Advanced Node.js Patterns', date: 'June 12, 2025 - 1 PM EST', speaker: 'John Smith' },
    { id: 3, title: 'Tailwind CSS Masterclass', date: 'June 19, 2025 - 5 PM EST', speaker: 'Alice Johnson' },
    { id: 4, title: 'Next.js for Beginners', date: 'June 25, 2025 - 4 PM EST', speaker: 'Bob Lee' },
    { id: 5, title: 'GraphQL Fundamentals', date: 'July 2, 2025 - 2 PM EST', speaker: 'Charlie Kim' },
    
];
export const feedbacks = [
    { id: 1, student: 'Aarav', comment: 'Excellent walkthroughs and assignments!', date: '3 days ago' },
    { id: 2, student: 'Sophia', comment: 'Very intuitive and well-paced courses.', date: '6 days ago' },
    { id: 3, student: 'Noah', comment: 'Loved the hands-on projects.', date: '1 week ago' },
    { id: 4, student: 'Emma', comment: 'Clear explanations and great examples.', date: '8 days ago' },
    { id: 5, student: 'Liam', comment: 'The instructor was very engaging.', date: '10 days ago' },
   
];
  
  