import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from "recharts";
const viewData = [
    { day: "M", views: 50 },
    { day: "T", views: 15 },
    { day: "W", views: 8 },
    { day: "T", views: 22 },
    { day: "F", views: 49 },
    { day: "S", views: 7 },
    { day: "S", views: 39 },
];

// Monthly sales data
const salesData = [
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
const Grah = () => {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1">
            {/* Bar Chart */}
            <div className="w-full rounded-lg shadow-md bg-base-100">
              <div className="w-full h-56 p-4 border-b">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={viewData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#4CAF50" radius={[10, 10, 0, 0]} barSize={10} />
                  </BarChart>
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
    
            {/* Line Charts */}
            {["#007BFF", "#398e3d"].map((color, index) => (
              <div className="w-full rounded-lg shadow-md bg-base-100" key={index}>
                <div className="w-full p-4 border-b">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 600]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="sales" stroke={color} strokeWidth={3} dot />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="p-4 mt-4">
                  <h3 className="font-semibold text-base-300">Daily Sales</h3>
                  <p className="text-sm text-base-content/70">15% increase in todays sales</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-base-content/60">
                    <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
                    updated 4 min ago
                  </div>
                </div>
              </div>
            ))}
          </div>
  )
}

export default Grah