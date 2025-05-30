import { Banknote, Bell, ChartNoAxesCombined, CircleCheck, CreditCard, EllipsisVertical, Lock, MoveUp, PlusCircle, ShoppingCart, Wallet } from "lucide-react";
import { timelineData, stats } from "../../data/home.data";

import Table from "../../components/home/table";
import Grah from "../../components/home/Grah";

console.log(timelineData)
const Home = () => {



  return (
    <div className="w-full p-2 lg:p-10">
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
        {stats.map((item) => (
          <div className="w-full mb-3 lg:mb-10" key={item.id}>
            <div className="w-full rounded-md shadow-md bg-base-100">
              <div className="flex flex-row justify-between p-5 border-b">
                <div className="p-2 rounded-md bg-base-content w-[50px] h-[50px] flex justify-center items-center">
                  <item.icon className="text-base-100" />
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

      {/* Charts Section */}

      <Grah />

      {/* Projects Section */}
      <div className="grid grid-cols-1 gap-6 mb-4 xl:grid-cols-3 mt-7">
        <div className="w-full col-span-2 rounded-lg shadow-md bg-base-100">
          <div className="relative flex items-center justify-between p-6">
            <div>
              <h6 className="font-bold leading-relaxed text-base-300">
                Projects
              </h6>
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
                <li>
                  <a className="text-base-300">Action</a>
                </li>
                <li>
                  <a className="text-base-300"> Another action</a>
                </li>
                <li>
                  <a className="text-base-300">Something else here</a>
                </li>
              </ul>
            </div>
          </div>

          <Table />
        </div>
        <div className="w-full rounded-lg shadow-md bg-base-100">
          <div className="relative flex items-center justify-between p-6">
            <div>
              <h6 className="font-bold leading-relaxed text-base-300">
                Order Overview
              </h6>
              <p className="flex items-center gap-1 text-[14px] ">
                <ChartNoAxesCombined className="w-[20px] h-[20px] text-green-500" />
                <strong> 24%</strong>    this month
              </p>
            </div>
          </div>
          <div className="max-w-md mx-auto mt-10">
            <div className="relative pl-16 border-gray-300 border-dotted">
              {timelineData.map((event, index) => (
                <div key={index} className="flex items-start mb-8 space-x-3">
                  <div className="absolute p-1 rounded-full bg-base-100 left-5">

                    <event.icon className="text-base-300" />

                    {index !== timelineData.length - 1 && <span className="block mt-3 text-center text-base-200">|</span>}
                  </div>
                  <div>
                    <p className="text-sm text-base-300">{event.text}</p>
                    <p className="mt-1 text-xs ">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
