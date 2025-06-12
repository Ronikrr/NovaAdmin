import { Activity, Camera, Link, Users } from "lucide-react";

import { engagementData } from "../../data/home.data";

const Social = () => {

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {engagementData.map((item) => (
          <div className="w-full " key={item.id}>
            <div className="w-full rounded-md shadow-md bg-base-100">
              <div className="flex flex-row justify-between p-5 border-b">
                <div className="p-2 rounded-md bg-base-content w-[50px] h-[50px] flex justify-center items-center">
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
                  <span className="text-green-500">{item.per}</span>{" "}
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Stats & Quick Actions */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* User Stats */}
        <div className="p-4 space-y-2 bg-white shadow rounded-2xl">
          <h3 className="font-semibold text-gray-700">Your Stats</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>📄 Posts: 120</li>
            <li>❤️ Likes: 450</li>
            <li>👥 Followers: 980</li>
            <li>🔗 Following: 310</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="p-4 space-y-2 bg-white shadow rounded-2xl">
          <h3 className="font-semibold text-gray-700">Quick Actions</h3>
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-primary">New Post</button>
            <button className="btn btn-secondary">Message</button>
            <button className="btn btn-outline">Edit Profile</button>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">Trending Today</h3>
        {/* Insert trending posts or tags here */}
        <p className="text-sm text-gray-500">#AIinWebDev #ReactRocks #MondayMotivation</p>
      </div>

      {/* Recent Activities */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">Recent Activities</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>You liked “How to build a social app” 15 minutes ago</li>
          <li>You followed @devmarketer yesterday</li>
          <li>You updated your profile photo</li>
        </ul>
      </div>

      {/* Friends Preview */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">Friends</h3>
        <div className="flex gap-4">
          {/* Friend avatars */}
          <img src="/avatars/user1.jpg" alt="Friend 1" className="w-10 h-10 rounded-full" />
          <img src="/avatars/user2.jpg" alt="Friend 2" className="w-10 h-10 rounded-full" />
          <img src="/avatars/user3.jpg" alt="Friend 3" className="w-10 h-10 rounded-full" />
        </div>
      </div>
      {/* Friend Suggestions */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">Friend Suggestions</h3>
        <div className="space-y-2">
          {["Alice", "John", "Maya"].map((name, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={`/avatars/user${index + 4}.jpg`} alt={name} className="w-8 h-8 rounded-full" />
                <span className="text-sm text-gray-700">{name}</span>
              </div>
              <button className="btn btn-sm btn-outline">Follow</button>
            </div>
          ))}
        </div>
      </div>

      {/* Media Gallery */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">Your Media</h3>
        <div className="grid grid-cols-3 gap-2">
          {["img1.jpg", "img2.jpg", "img3.jpg"].map((img, i) => (
            <img
              key={i}
              src={`/media/${img}`}
              alt={`media-${i}`}
              className="object-cover w-full h-20 rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Link Shares */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">Recently Shared Links</h3>
        <ul className="space-y-1 text-sm text-blue-600">
          <li><a href="https://react.dev" target="_blank" rel="noreferrer">react.dev</a></li>
          <li><a href="https://vercel.com/blog" target="_blank" rel="noreferrer">vercel.com/blog</a></li>
          <li><a href="https://github.com" target="_blank" rel="noreferrer">github.com</a></li>
        </ul>
      </div>

      {/* Upcoming Events */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">Upcoming Events</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>🗓️ Webinar: Modern React Patterns – June 15</li>
          <li>📣 Product Launch: SocialX v2.0 – June 20</li>
          <li>📅 Hackathon: CodeFest – July 1</li>
        </ul>
      </div>

      {/* Activity Chart Placeholder */}
      <div className="p-4 bg-white shadow rounded-2xl">
        <h3 className="mb-2 font-semibold text-gray-700">Engagement Overview</h3>
        <div className="flex items-center justify-center h-32 text-gray-400">
          {/* Replace with a chart component like Recharts later */}
          <span>📊 Chart coming soon...</span>
        </div>
      </div>

    </div>

  )
}

export default Social