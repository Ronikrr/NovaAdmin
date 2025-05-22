import { Banknote } from "lucide-react";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { day: "M", views: 50 },
  { day: "T", views: 15 },
  { day: "W", views: 8 },
  { day: "T", views: 22 },
  { day: "F", views: 49 },
  { day: "S", views: 7 },
  { day: "S", views: 39 },
];
const datas = [
  {
    id: 1,
    icons: Banknote,
    condition: "Todays Money",
    count: "$53k",
    per: "+55%",
    detail: "then last week",
  },
  {
    id: 1,
    icons: Banknote,
    condition: "Todays users",
    count: "2300",
    per: "+3%",
    detail: "then last month",
  },
  {
    id: 1,
    icons: Banknote,
    condition: "New client",
    count: "3,462",
    per: "-2%",
    detail: "then yesterday",
  },
  {
    id: 1,
    icons: Banknote,
    condition: "Sales",
    count: "$103,430",
    per: "+5%",
    detail: "then yesterday",
  },
];
const Home = () => {
  return (
    <div className="w-full p-10 ">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
        {datas.map((item, index) => (
          <>
            <div className="w-full mb-3 lg:mb-10" key={index}>
              <div className="w-full rounded-md shadow-md bg-base-100">
                <div className="flex flex-row justify-between p-5 border-b ">
                  <div className="">
                    <div className="p-2 rounded-md bg-base-300">
                      <item.icons className="text-base-100" />
                    </div>
                  </div>
                  <div className="text-right rounded-md">
                    <span className="text-[15px] font-bold ">{item.condition}</span>
                    <h1 className="text-[24px] font-roboto font-bold">{item.count}</h1>
                  </div>
                </div>
                <div className="p-5">
                  <p>
                    <span className="text-green-500">{item.per}</span> {item.detail}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full max-w-sm rounded-lg shadow bg-base-100">
          <div className="w-full h-56 p-4 border-b">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#4CAF50" radius={[10, 10, 0, 0]} barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 mt-4 ">
            <h3 className="font-semibold text-base-content">Website View</h3>
            <p className="text-sm text-base-content/70">Last Campaign Performance</p>
            <div className="flex items-center gap-1 mt-2 text-xs text-base-content/60">
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
              campaign sent 2 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
