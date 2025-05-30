

import { dashboardStats, recentOrders, activityData } from "../../data/home.data";
import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar
} from "recharts";
import { data, topselling } from '../../data/home.data';
import { Legend } from "chart.js";
const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};
const Ecommrece = () => {

    return (
        <div className="p-0 space-y-6 lg:p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-y-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {dashboardStats.map((item) => (
                    <div className="w-full " key={item.id}>
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

            <div className="grid grid-cols-1 gap-y-4 lg:gap-4 sm:grid-cols-3 ">
                <div className="col-span-2 p-6 rounded-lg shadow-md bg-base-100">
                    <h2 className="mb-4 text-lg font-bold text-base-300">Recent Orders</h2>

                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr className="text-base-300" >
                                    <th className="hidden lg:table-cell"  >#ID</th>
                                    <th>Name</th>
                                    <th className="hidden lg:table-cell"  >Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="border-b">
                                        <td className="hidden py-2 lg:table-cell">{order.id}</td>
                                        <td className="py-2">{order.customer}</td>
                                        <td className="hidden py-2 lg:table-cell">{order.total}</td>
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
                                    <span className="text-xs lg:text-md"  >{data.message}</span>
                                    <span className="text-xs text-gray-400">{data.time}</span>
                                </li>
                            </>
                        ))}

                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div className="p-6 bg-white shadow rounded-2xl">
                    <h2 className="mb-4 text-lg font-semibold">Monthly Sales</h2>
                    <div className="space-y-4 text-sm">
                        {[
                            { month: "January", percent: 80 },
                            { month: "February", percent: 60 },
                            { month: "March", percent: 90 },
                        ].map((item, idx) => (
                            <div key={idx}>
                                <p className="mb-1">{item.month}</p>
                                <div className="w-full h-2 bg-gray-100 rounded">
                                    <div
                                        className="h-2 bg-blue-500 rounded"
                                        style={{ width: `${item.percent}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="p-4 text-center bg-white shadow rounded-2xl">
                        <h3 className="text-sm text-gray-500">New Users</h3>
                        <p className="text-xl font-bold text-blue-600">52</p>
                    </div>
                    <div className="p-4 text-center bg-white shadow rounded-2xl">
                        <h3 className="text-sm text-gray-500">Revenue</h3>
                        <p className="text-xl font-bold text-green-600">$4,200</p>
                    </div>
                    <div className="p-4 text-center bg-white shadow rounded-2xl">
                        <h3 className="text-sm text-gray-500">Returns</h3>
                        <p className="text-xl font-bold text-red-600">3%</p>
                    </div>
                    <div className="p-4 text-center bg-white shadow rounded-2xl">
                        <h3 className="text-sm text-gray-500">Page Views</h3>
                        <p className="text-xl font-bold text-indigo-600">12.4k</p>
                    </div>
                </div>
            </div>

            {/* Sales Chart Placeholder */}
            <div className="grid grid-cols-1 gap-y-4 lg:gap-4 sm:grid-cols-3 ">

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
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-base-300" >

                                    <th className="hidden lg:table-cell" >id</th>
                                    <th>Name</th>
                                    <th className="hidden lg:table-cell" >RAM</th>
                                    <th className="hidden lg:table-cell" >Storage</th>
                                    <th>Sold</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {topselling.map((item, index) => (
                                    <>
                                        <tr key={index}>
                                            <td className="hidden lg:table-cell"  >{item.id}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="w-12 h-12 mask mask-squircle">
                                                            <img
                                                                src={item.src}
                                                                alt={item.name} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-base-300">{item.name}</div>
                                                        <div className="text-sm opacity-50 text-[12px] hidden lg:table-cell ">{item.title}</div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className="hidden lg:table-cell"  >
                                                {item.ram}


                                            </td>
                                            <td className="hidden lg:table-cell"  >{item.storage}</td>
                                            <td>{item.sold}</td>

                                        </tr>
                                    </>
                                ))}


                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr className="text-base-300">

                                    <th>id</th>
                                    <th>Name</th>
                                    <th>RAM</th>
                                    <th>Storage</th>
                                    <th>Sold</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Ecommrece;
