import { Banknote, Bell, CreditCard, DollarSign, Lock, Package, PlusCircle, ShoppingCart, Users, Wallet } from "lucide-react";

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
  