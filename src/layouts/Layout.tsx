import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const LayoutPage = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="hidden md:block md:w-84 bg-gray-800 text-white">
                <Sidebar />
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Mobile Navbar Toggle (optional) */}
                <div className="md:hidden bg-gray-800 text-white">
                    <Sidebar /> {/* You can handle mobile toggle inside */}
                </div>

                {/* Top Navbar */}
                <Navbar />

                {/* Main Content */}
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default LayoutPage;
