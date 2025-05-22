import {
  BookOpen,
  Briefcase,
  ChevronsLeftRightEllipsis,
  FolderKanban,
  House,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  PanelLeftClose,
  PanelsTopLeft,
  School,
  ShoppingBag,
  Table,
  UserCog,
  Users,
} from "lucide-react";
import  { useState } from "react";

const sidebarData = [
  {
    label: "Home",
    icon: House,
    key: "menuOpenHome",
    items: [
      { label: "Default", icon: LayoutDashboard, path: "/" },
      { label: "Ecommerce", icon: ShoppingBag, path: "/ecommrece" },
      { label: "Courses", icon: BookOpen, path: "/courses" },
      { label: "Social", icon: Users, path: "/social" },
      { label: "School", icon: School, path: "/school" },
      { label: "CRM", icon: Briefcase, path: "/crm" },
      { label: "HR", icon: UserCog, path: "/hr" },
      { label: "Projects", icon: FolderKanban, path: "/projects" },
    ],
  },
  {
    label: "winget",
    icon: LayoutList,
    key: "menuOpenwinget",
    items: [
      { label: "General", icon: LayoutDashboard, path: "/general" },
      { label: "Chart", icon: ShoppingBag, path: "/chart" },
    ],
  },
  {
    label: "Apps",
    icon: LayoutGrid,
    key: "menuOpenapps",
    items: [
      { label: "Email", icon: LayoutDashboard, path: "/email" },
      { label: "Chat", icon: ShoppingBag, path: "/chat" },
      { label: "Kanban", icon: BookOpen, path: "/kanban" },
      { label: "Social", icon: Users, path: "/social-app" },
      { label: "CRM", icon: Briefcase, path: "/crm-app" },
    ],
  },
  {
    label: "pages",
    icon: PanelsTopLeft,
    key: "menuOpenpages",
    items: [
      { label: "Login", icon: LayoutDashboard, path: "/login" },
      { label: "Signup", icon: ShoppingBag, path: "/sign-up" },
      { label: "forgot password", icon: LayoutDashboard, path: "/forgot-pass" },
      { label: "Error 404", icon: BookOpen, path: "/*" },
      { label: "2fa", icon: Users, path: "/2fa" },
      { label: "profile", icon: Briefcase, path: "/profile" },
    ],
  },
  {
    label: "froms",
    icon: ChevronsLeftRightEllipsis,
    key: "menuOpenfrom",
    items: [
      { label: "from control", icon: LayoutDashboard, path:"from-control" },
      { label: "from widget", icon: ShoppingBag, path:"from-widget" },
      { label: "from layout", icon: LayoutDashboard, path:"from-layout" },
    ],
  },
  {
    label: "table",
    icon: Table,
    key: "menuOpentable",
    items: [
      { label: "tailwind table", icon: LayoutDashboard, path:"tailwind-table" },
      { label: "data table", icon: ShoppingBag, path:"data-table" },
      { label: "from layout", icon: LayoutDashboard, path:"from-layout" },
    ],
  },
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    menuOpenHome: false,
    menuOpenapps: false,
    menuOpenpages: false,
    menuOpenwinget: false,
    menuOpenfrom: false,
    menuOpentable: false,
  });
  const [collapse, setCollapse] = useState(false);

  const handleMenuClick = (key) => {
    // Only allow click to toggle when sidebar is NOT collapsed
    if (!collapse) {
      setOpenMenus((prev) => {
        const newOpenMenus = {};
        for (const menuKey in prev) {
          newOpenMenus[menuKey] = menuKey === key ? !prev[menuKey] : false;
        }
        return newOpenMenus;
      });
    }
  };

  const handleCollapseClick = () => {
    setCollapse(!collapse);
    // Close any open menus when collapsing/expanding
    setOpenMenus({
      menuOpenHome: false,
      menuOpenapps: false,
      menuOpenpages: false,
      menuOpenwinget: false,
      menuOpenfrom: false,
      menuOpentable: false,
    });
  };

  return (
    <div
      className={`${
        collapse ? "w-[150px]" : "w-[300px]"
      } transition-transform duration-1000 ease-in-out h-screen flex flex-col justify-between shadow-md
         bg-base-100 bg-base-content text-base-100 shadow-md border-r absolute md:relative `}
    >
      <div
        className={`px-[48px] flex items-center fixed h-[100px] ${
          collapse ? "justify-center" : "justify-start"
        }`}
      >
        <div className={`text-2xl font-bold  text-base-100`}>
          {collapse ? "Nova" : "NovaAdmin"}
        </div>
      </div>

      <ul className={`${collapse ? "px-[20px]" : "px-[50px]"} pt-[100px]`}>
        {sidebarData.map((menuItem) => (
          <li
            key={menuItem.key}
            className={`font-bold cursor-pointer flex gap-3 uppercase text-[15px] flex-col relative
                            ${
                              collapse
                                ? "justify-center items-center group"
                                : "justify-start items-start"
                            }`}
            onClick={() => handleMenuClick(menuItem.key)}
          >
            <div
              className={`flex ${
                collapse && "flex-col justify-center"
              } justify-start gap-3 w-full px-3 py-3 rounded-md
                    hover:shadow-md `}
            >
              <menuItem.icon size={24} className="text-base-100" />
              <span className="text-base-100">{menuItem.label}</span>
            </div>

            {/* Sub-menu rendering based on collapse state */}
            {collapse ? (
              <ul className="absolute left-[90px] z-10 top-0 bg-base-300 p-6 rounded-xl shadow-md hidden group-hover:block">
                {menuItem.items.map((subItem, index) => (
                  <li key={index} className="relative py-1">
                    <a
                      href={subItem.path}
                            className="flex items-center gap-3 font-medium text-base-100 hover:text-base-100"
                    >
                      {subItem.icon && (
                                <subItem.icon size={18} className="text-base-100" />
                      )}
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              openMenus[menuItem.key] && (
                <ul className="relative pl-4 mt-2 space-y-4 transition-transform duration-1000 ease-linear border-l-2 border-secondary dark:border-gray-700">
                  {menuItem.items.map((subItem, index) => (
                    <li key={index} className="relative pl-4">
                      <a
                        href={subItem.path}
                              className="flex items-center gap-3 font-medium text-base-100"
                      >
                        {subItem.icon && (
                          <subItem.icon
                            size={18}
                                      className="text-base-100"
                          />
                        )}
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )
            )}
          </li>
        ))}
      </ul>

      <div
        className={`flex items-center h-[100px] border-t border-secondary dark:border-gray-700
                    ${
                      collapse
                        ? "w-[150px] px-[30px] justify-center"
                        : "w-[300px] px-[48px] justify-start"
                    } fixed bottom-0`}
      >
        <button
          className={`flex items-center justify-start gap-3 capitalize text-base-100 hover:text-base-100`}
          onClick={handleCollapseClick}
        >
          <PanelLeftClose />
          collapse
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
