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
  Menu,
} from "lucide-react";
import { useState } from "react";

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
      { label: "from control", icon: LayoutDashboard, path: "from-control" },
      { label: "from widget", icon: ShoppingBag, path: "from-widget" },
      { label: "from layout", icon: LayoutDashboard, path: "from-layout" },
    ],
  },
  {
    label: "table",
    icon: Table,
    key: "menuOpentable",
    items: [
      {
        label: "tailwind table",
        icon: LayoutDashboard,
        path: "tailwind-table",
      },
      { label: "data table", icon: ShoppingBag, path: "data-table" },
      { label: "from layout", icon: LayoutDashboard, path: "from-layout" },
    ],
  },
];

const Sidebar = ({ collapse, setCollapse }) => {
  const [openMenus, setOpenMenus] = useState({
    menuOpenHome: false,
    menuOpenapps: false,
    menuOpenpages: false,
    menuOpenwinget: false,
    menuOpenfrom: false,
    menuOpentable: false,
  });

  const [showSidebar, setShowSidebar] = useState(false); 

  const handleMenuClick = (key) => {
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
    <div className="fixed top-0 bottom-0">
      {/* Mobile toggle button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed z-50 p-2 rounded-md shadow-md md:hidden top-[80px] left-4 bg-base-200"
      >
        <Menu size={24} />
      </button>

      <div
        className={`
          ${
            collapse
              ? "w-[150px]    transition-all duration-1000 ease-in-out"
              : "w-[300px]  transition-all duration-1000 ease-in-out"
          }
          ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0
        
          h-screen flex flex-col justify-between bg-base-content text-base-100 border-r 
          shadow-md fixed md:relative z-40
        `}
      >
        {/* Logo */}
        <div
          className={`h-[100px] flex items-center ${
            collapse ? "justify-center" : "justify-start"
          } px-6`}
        >
          <h1 className="text-2xl font-bold text-base-100">
            {collapse ? "Nova" : "NovaAdmin"}
          </h1>
        </div>

        {/* Menu List */}
        <ul
          className={`flex-1 overflow-y-auto pt-[10px] ${
            collapse ? "px-[10px]" : "px-[20px]"
          }`}
        >
          {sidebarData.map((menuItem) => (
            <li
              key={menuItem.key}
              className={`font-bold cursor-pointer flex flex-col gap-1 py-2 ${
                collapse ? "items-center group" : "items-start"
              }`}
              onClick={() => handleMenuClick(menuItem.key)}
            >
              <div
                className={`flex ${
                  collapse
                    ? "flex-col justify-center items-center"
                    : "flex-row items-center"
                  } gap-3 w-full px-3 py-2 rounded-md hover:bg-base-300  capitalize hover:text-base-300`}
              >
                <menuItem.icon size={24} className="text-base-100" />
                {!collapse && (
                  <span className="text-base-100">{menuItem.label}</span>
                )}
              </div>

              {/* Submenu */}
              {collapse ? (
                <ul className="absolute left-[80%] top-50 z-50 bg-base-content p-4 rounded-xl shadow-md hidden group-hover:block">
                  {menuItem.items.map((subItem, index) => (
                    <li key={index} className="py-1">
                      <a
                        href={subItem.path}
                        className="flex items-center gap-3 px-3 py-2 text-sm capitalize rounded-lg text-base-100 hover:bg-base-300"
                      >
                        <subItem.icon size={18} />
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                openMenus[menuItem.key] && (
                  <ul className="pl-6 mt-2 space-y-2 border-l border-secondary">
                    {menuItem.items.map((subItem, index) => (
                      <li key={index}>
                        <a
                          href={subItem.path}
                          className="flex items-center gap-3 px-3 py-2 text-sm capitalize rounded-lg text-base-100 hover:bg-base-300"
                        >
                          <subItem.icon size={18} />
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

        {/* Collapse Button */}
        <div
          className={`h-[80px] flex items-center px-4 border-t border-secondary`}
        >
          <button
            onClick={handleCollapseClick}
            className="flex items-center gap-2 text-base-100"
          >
            <PanelLeftClose />
            <span className="capitalize">
              {collapse ? "Expand" : "Collapse"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
