import { Bell, LogOut, Search, UserPen } from 'lucide-react';
import User from '../assets/toppng.com-app-icon-set-login-icon-comments-avatar-icon-980x980 (1).png';

const Header = ({ theme, setTheme }) => {
    const toggletheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div className="z-10 px-4 border-b shadow-md navbar bg-base-100 text-base-content">
            {/* Left Section: Search */}
            <div className="gap-2 navbar-start">
                <button className="btn btn-ghost btn-circle">
                    <Search className="text-current" />
                </button>
                <input
                    type="text"
                    placeholder="Search..."
                    className="hidden w-full max-w-xs lg:block input input-bordered placeholder-base-content"
                />
            </div>

            {/* Right Section: Icons & Profile */}
            <div className="flex items-center gap-4 navbar-end">
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        onChange={toggletheme}
                        className="col-span-2 col-start-1 row-start-1 toggle theme-controller bg-base-content"
                    />
                    {/* Sun (Light) Icon */}
                    <svg
                        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    {/* Moon (Dark) Icon */}
                    <svg
                        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </label>

                <button className="btn btn-ghost btn-circle hover:text-base-100">
                    <div className="indicator">
                        <Bell className="text-current" />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>

                {/* Profile Dropdown */}
                <div className="dropdown dropdown-hover dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <img src={User} alt="User" className="object-cover w-8 h-8 rounded-full" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-base-100 text-base-content rounded-box shadow-md w-52 z-[1] mt-2 p-2"
                    >
                        <li><a className='hover:text-base-100' ><UserPen className="mr-2 " /> Profile</a></li>
                        <li><a className='hover:text-base-100' ><LogOut className="mr-2 " /> Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;

