
import {
  topCourses,
  recentEnrollments,
  statsdata,
  progress,
  events,
  feedbacks,
} from "../../data/home.data";
import LineChartExample from "../../components/course/chart";
const CourseDashboard = () => {
  return (
    <>
      <div className="min-h-screen space-y-6 lg:p-6 ">
        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {statsdata.map((item, i) => (
            <div className="w-full " key={i}>
              <div className="w-full rounded-lg shadow-md bg-base-100">
                <div className="flex flex-row justify-between p-5 border-b">
                  <div className="p-2 rounded-lg bg-base-content w-[50px] h-[50px] flex justify-center items-center">
                    <item.icon className="text-base-100" />
                  </div>
                  <div className="text-right">
                    <span className="text-[15px] font-bold text-base-300">
                      {item.title}
                    </span>
                    <h1 className="text-[24px] font-roboto font-bold">
                      {item.value}
                    </h1>
                  </div>
                </div>
                <div className="p-5">
                  <p>
                    <span
                      className={`${item.per.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                        }`}
                    >
                      {item.per}{" "}
                    </span>
                    {item.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Enrollments Table */}
          <div className="p-6 overflow-x-auto rounded-lg shadow bg-base-100">
            <h2 className="mb-4 text-lg font-bold text-base-300">
              Recent Enrollments
            </h2>
            <table className="min-w-full text-sm text-left">
              <thead className="border-b text-base-300">
                <tr>
                  <th className="py-2">ID</th>
                  <th className="py-2">Student</th>
                  <th className="py-2">Course</th>
                  <th className="py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentEnrollments
                  .slice()
                  .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by latest date
                  .slice(0, 10) // Show only the top 10
                  .map((e, i) => (
                    <tr key={i} className={`border-b hover:bg-base-200`}>
                      <td className="py-2 text-base-300">{e.id}</td>
                      <td className="py-2 ">{e.student}</td>
                      <td className="py-2">{e.course}</td>
                      <td className="py-2 text-base-300">{e.date}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* Completion Progress */}
          <div className="p-6 rounded-lg shadow bg-base-100">
            <h2 className="mb-4 text-lg font-semibold text-base-300">
              Course Completion Progress
            </h2>
            <div className="space-y-4">
              {progress.map((item, i) => (
                <div key={i}>
                  <p className="mb-1 text-sm">{item.name}</p>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className={`h-2 rounded ${item.percent >= 80
                        ? "bg-green-500"
                        : item.percent >= 50
                          ? "bg-yellow-300"
                          : "bg-red-600"
                        }`}
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Top Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-7 lg:gap-7">
          <div className="p-6 rounded-lg shadow bg-base-100">
            <h2 className="mb-4 text-lg font-bold text-base-300">
              Top Rated Courses
            </h2>
            <ul className="space-y-3 text-sm">
              {topCourses.slice(0, 13).map((course, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span className="text-base-300">{course.title}</span>

                  <span className="text-base-content">
                    {course.rating} ⭐ ({course.enrolled} students)
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chart Placeholder */}

          <div className="w-full col-span-2 rounded-lg shadow-md bg-base-100">
            {/* Chart Area */}
            <div className="w-full p-4 border-b h-96">
              <LineChartExample />
            </div>

            {/* Details Footer */}
            <div className="p-4 mt-4">
              <h3 className="font-bold text-base-300">Weekly Summary</h3>
              <p className="text-sm text-base-content/70">
                Course Performance Overview
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-base-content/60">
                <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
                Campaign data updated 2 days ago
              </div>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-7 lg:gap-7">
          <div className="col-span-2 p-6 rounded-lg shadow bg-base-100">
            <h2 className="mb-4 text-lg font-semibold">Student Feedback</h2>
            <div className="space-y-3 text-sm text-base-300">
              <div className="overflow-x-auto">
                <table className="table table-xs">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>comment</th>
                      <th>date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbacks.map((item, index) => (
                      <>
                        <tr key={index} >
                          <th>{index + 1}</th>
                          <td className="text-[15px]" >
                            <strong>{item.student}:</strong>
                            {item.comment}
                          </td>
                          <td className="text-xs text-gray-400">{item.date}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>#</th>
                      <th>comment</th>
                      <th>date</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow bg-base-100">
            <h2 className="mb-4 text-lg font-semibold">
              Upcoming Webinars & Events
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {events.map(({ id, title, date, speaker }) => (
                <li key={id} className="pb-3 border-b">
                  <p className="font-medium text-base-300">{title}</p>
                  <p className="text-xs text-gray-500">
                    {date} • Speaker: {speaker}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDashboard;
