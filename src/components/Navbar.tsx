import { useState } from "react";
import { Link } from "react-router-dom";

const navmenu = [
    { name: "About", link: "/" },
    { name: "Certificate", link: "/certificates" },
    { name: "Skill", link: "/skills" },
    { name: "Resume", link: "/resume" },
    { name: "Project", link: "/projects" }
];

interface NavbarProps {
    isDrawer?: boolean;
    onSidebarToggle?: () => void;
    onNavbarToggle?: () => void;
}

const Navbar = ({ isDrawer = false, onSidebarToggle, onNavbarToggle }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (isDrawer) {
        return (
            <div className="h-full w-full p-4">
                <div className="flex flex-col space-y-4">
                    {navmenu.map((item) => (
                        <Link
                            key={item.name}
                            to={item.link}
                            className="text-gray-800 hover:text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
                            onClick={() => onNavbarToggle?.()}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left side - Sidebar toggle and logo */}
                    <div className="flex items-center space-x-4">
                        {/* Sidebar toggle button (only on mobile) */}
                        <button
                            onClick={onSidebarToggle}
                            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
                            aria-label="Toggle sidebar"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        {/* Logo/Brand */}
                        <Link to="/" className="text-xl font-bold text-gray-800">
                            My<span className="text-indigo-600">Portfolio</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navmenu.map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-500 hover:text-gray-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h8M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navmenu.map((item) => (
                        <Link
                            key={item.name}
                            to={item.link}
                            className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;