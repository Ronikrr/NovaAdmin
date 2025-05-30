import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ theme, setTheme }) => {
    const [collapse, setCollapse] = useState(false);

    return (
        <div className="flex min-h-screen overflow-hidden bg-base-100 text-base-content-900">
            {/* Sidebar */}
            <Sidebar collapse={collapse} setCollapse={setCollapse} />

            {/* Main Content Section */}
            <div
                className={`flex flex-col flex-1 ${collapse ? "lg:ml-[150px]" : "lg:ml-[300px]"} transition-all duration-1000 ease-in-out`}
            >
                {/* Header (Fixed) */}
                <div
                    className={`fixed top-0 left-0 right-0 z-50  ${collapse ? "lg:ml-[150px]" : "lg:ml-[300px]"}`}
                >
                    <Header theme={theme} setTheme={setTheme} />
                </div>

                {/* Main Area */}
                <main className="flex-1 overflow-y-auto bg-base-200 pt-[64px] pb-[64px]">
                    <div className="p-4">
                        <Outlet />
                    </div>
                </main>

                {/* Footer (Fixed) */}
                <div
                    className={`fixed bottom-0 left-0 right-0 z-50   ${collapse ? "lg:ml-[150px]" : "lg:ml-[300px]"}`}
                >
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
