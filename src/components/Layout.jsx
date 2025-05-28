// components/Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from './Header';
import Footer from './Footer';
import { useState } from "react";

const Layout = ({ theme, setTheme }) => {
    const [collapse, setCollapse] = useState(false);
    return (
        <div className="flex min-h-screen overflow-hidden bg-base-100 text-base-content-900 ">
            {/* Sidebar */}
            <Sidebar collapse={collapse} setCollapse={setCollapse} />

            {/* Main Content Section */}
            <div className={`flex flex-col flex-1  ${collapse ? "lg:ml-[150px] transition-all duration-1000 ease-in-out" : "lg:ml-[300px] transition-all duration-1000 ease-in-out"}`}>
                {/* Header */}
                <Header theme={theme} setTheme={setTheme} />

                {/* Main Area with Outlet & Footer */}
                <main className="flex flex-col flex-1 overflow-y-auto bg-base-200 ">
                    {/* Content fills the rest of the screen */}
                    <div className="flex-1 p-4">
                        <Outlet />
                    </div>

                    {/* Footer inside main area */}
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Layout;
