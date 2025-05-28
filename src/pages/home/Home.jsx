import { Banknote, CircleCheck } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from "recharts";

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
  const tabledata = [
    {
      id: 1,
      src: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "Hart Hagerty",
      members: [
        {
          id: 1,
          image_member: "https://img.daisyui.com/images/profile/demo/2@94.webp"
        }, {
          id: 1,
          image_member: "https://img.daisyui.com/images/profile/demo/2@94.webp"
        }
      ],
      buget: "14000",
      completion: "60"
    },
    {
      id: 2,
      src: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      name: "agvbhnjm",
      members: [
        {
          id: 1,
          image_member: "https://img.daisyui.com/images/profile/demo/2@94.webp"
        }, {
          id: 1,
          image_member: "https://img.daisyui.com/images/profile/demo/2@94.webp"
        }
      ],
      buget: "no",
      completion: "10"
    },
  ]

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
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {/* Bar Chart */}
        <div className="w-full rounded-lg shadow bg-base-100">
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
          <div className="w-full rounded-lg shadow bg-base-100" key={index}>
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
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="capitalize text-base-300" >

                  <th>companies</th>
                  <th>members</th>
                  <th>budget</th>
                  <th>completion</th>
                </tr>
              </thead>
              <tbody>


                {tabledata.map((data, index) => (

                  <>
                    <tr key={index}>
                      <td>
                        <div className="flex items-center flex-1 gap-4">
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                              <img
                                src={data.src}
                                alt={data.name} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-base-300">{data.name}</div>

                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex flex-row items-start justify-center w-full h-full text-base-300">

                          {data.members.map((meber) => (
                            <div className="w-[20px] h-[20px] bg-gray-300 rounded-full ring-2 ring-white overflow-hidden" key={meber.id} >
                              <img
                                src={meber.image_member}
                                alt={meber.img} />
                            </div>
                          ))}
                        </div>

                      </td>
                      <td className="text-base-300" >${data.buget}</td>
                      <td>
                        <p className="text-base-300" >{data.completion}%</p>
                        <progress
                          className="progress bg-base-200 progress-primary"
                          value={data.completion}
                          max="100"
                        ></progress>
                      </td>

                    </tr>
                  </>
                ))}

              </tbody>

            </table>
          </div>
        </div>
        <div className="w-full max-w-sm rounded-lg shadow bg-base-100"></div>
      </div>
    </div>
  );
};

export default Home;