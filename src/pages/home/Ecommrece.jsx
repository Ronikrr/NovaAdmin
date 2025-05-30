

import { dashboardStats, recentOrders, activityData } from "../../data/home.data";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line,
    RadialBarChart,
    RadialBar
} from "recharts";
import { data } from '../../data/home.data';
import { Legend } from "chart.js";


const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};
const Ecommrece = () => {

    return (
        <div className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {dashboardStats.map((item) => (
                    <div className="w-full mb-3 lg:mb-10" key={item.id}>
                        <div className="w-full rounded-md shadow-md bg-base-100">
                            <div className="flex flex-row justify-between p-5 border-b">
                                <div className="p-2 rounded-md bg-base-content w-[50px] h-[50px] flex justify-center items-center">
                                    <item.icons className="text-base-100" />
                                </div>
                                <div className="text-right">
                                    <span className="text-[15px] font-bold text-base-300">
                                        {item.condition}
                                    </span>
                                    <h1 className="text-[24px] font-roboto font-bold">
                                        {item.count}
                                    </h1>
                                </div>
                            </div>
                            <div className="p-5">
                                <p>
                                    <span className="text-green-500">{item.per}</span>{" "}
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                <div className="col-span-2 p-6 rounded-lg shadow-md bg-base-100">
                    <h2 className="mb-4 text-lg font-bold text-base-300">Recent Orders</h2>

                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr className="text-base-300" >
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="border-b">
                                        <td className="py-2">{order.id}</td>
                                        <td className="py-2">{order.customer}</td>
                                        <td className="py-2">{order.total}</td>
                                        <td className="py-2">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${order.status === "Delivered"
                                                    ? "bg-green-100 text-green-700"
                                                    : order.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-6 shadow bg-base-100 rounded-2xl">
                    <h2 className="mb-4 text-lg font-bold text-base-300">Sales Activity</h2>
                    <ul className="space-y-3 text-sm ">
                        {activityData.map(data => (

                            <>
                                <li className="flex justify-between">
                                    <span>{data.message}</span>
                                    <span className="text-xs text-gray-400">{data.time}</span>
                                </li>
                            </>
                        ))}
                        <li className="flex justify-between">
                            <span>Product restocked: AirPods Pro</span>
                            <span className="text-xs text-gray-400">5 hours ago</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Refund issued to Mark Davis</span>
                            <span className="text-xs text-gray-400">Yesterday</span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Sales Chart Placeholder */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">

            <div className="w-full col-span-1 rounded-lg shadow-md bg-base-100">
                <div className="w-full p-4 border-b h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={15} data={data}>
                            <RadialBar
                                minAngle={20}
                                label={{ position: 'insideStart', fill: '#fff' }}
                                background
                                clockWise
                                dataKey="uv"
                            />
                            <Legend iconSize={20} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                        </RadialBarChart>
                    </ResponsiveContainer>

                </div>
                <div className="p-4 mt-4">
                    <h3 className="font-semibold text-base-300">Website Views</h3>
                    <p className="text-sm text-base-content/70">Last Campaign Performance</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-base-content/60">
                        <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
                        campaign sent 2 days ago
                    </div>
                </div>
            </div>
                <div className="col-span-2 p-6 shadow bg-base-100 rounded-2xl">
                    <h2 className="mb-4 text-lg font-bold text-base-300">Top Selling Products</h2>
                    <ul className="text-sm divide-y">
                        <li className="flex justify-between py-2">
                            <span className="text-base-300" >iPhone 14 Pro Max</span>
                            <span className="font-medium text-base-content">320 sold</span>
                        </li>
                        <li className="flex justify-between py-2">
                            <span className="text-base-300" >Nike Air Max 90</span>
                            <span className="font-medium text-base-content">270 sold</span>
                        </li>
                        <li className="flex justify-between py-2">
                            <span className="text-base-300" >Samsung Galaxy S22</span>
                            <span className="font-medium text-base-content">215 sold</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Ecommrece;
