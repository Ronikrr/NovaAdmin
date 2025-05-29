import { Banknote, CircleCheck, EllipsisVertical, LogOut, UserPen } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from "recharts";
import Table from "../../components/home/table";
import Grah from "../../components/home/Grah";

const Home = () => {
  // Weekly website views
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


  // Dashboard metrics
  const stats = [
    {
      id: 1,
      icons: Banknote,
      condition: "Today's Money",
      count: "$53k",
      per: "+55%",
      detail: "than last week",
    },
    {
      id: 2,
      icons: Banknote,
      condition: "Today's Users",
      count: "2300",
      per: "+3%",
      detail: "than last month",
    },
    {
      id: 3,
      icons: Banknote,
      condition: "New Clients",
      count: "3,462",
      per: "-2%",
      detail: "than yesterday",
    },
    {
      id: 4,
      icons: Banknote,
      condition: "Sales",
      count: "$103,430",
      per: "+5%",
      detail: "than yesterday",
    },
  ];

  return (
    <div className="w-full p-2 lg:p-10">
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
        {stats.map((item) => (
          <div className="w-full mb-3 lg:mb-10" key={item.id}>
            <div className="w-full rounded-md shadow-md bg-base-100">
              <div className="flex flex-row justify-between p-5 border-b">
                <div className="p-2 rounded-md bg-base-content w-[50px] h-[50px] flex justify-center items-center">
                  <item.icons className="text-base-100" />
                </div>
                <div className="text-right">
                  <span className="text-[15px] font-bold text-base-300">{item.condition}</span>
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
        ))}
      </div>

      {/* Charts Section */}

      <Grah />

      {/* Projects Section */}
      <div className="grid grid-cols-1 gap-6 mb-4 xl:grid-cols-3 mt-7">
        <div className="w-full col-span-2 rounded-lg shadow bg-base-100">
          <div className="relative flex items-center justify-between p-6">
            <div>
              <h6 className="font-bold leading-relaxed text-base-300">Projects</h6>
              <p className="flex items-center gap-1 text-[14px]">
                <CircleCheck className="w-[20px] h-[20px] text-base-400" />
                <strong>30 done</strong> this month
              </p>
            </div>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="text-base-300">
                <EllipsisVertical />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box shadow-md w-52 z-[1] mt-2 p-2"
              >
                <li><a className='text-base-300' >Action</a></li>
                <li><a className='text-base-300'> Another action</a></li>
                <li><a className='text-base-300'>Something else here</a></li>
              </ul>
            </div>
          </div>

          <Table />
        </div>
        <div className="w-full rounded-lg shadow-md bg-base-100">
          <div className="relative flex items-center justify-between p-6">
            <div>
              <h6 className="font-bold leading-relaxed text-base-300">Order Overview</h6>
              <p className="flex items-center gap-1 text-[14px]">
                <CircleCheck className="w-[20px] h-[20px] text-base-400" />
                <strong>30 done</strong> this month
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;