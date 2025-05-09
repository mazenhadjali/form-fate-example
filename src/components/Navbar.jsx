import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const { pathname } = useLocation();

    const links = [
        { to: "/login", label: "Login" },
        { to: "/signup", label: "Signup" },
        { to: "/transfer", label: "Transfer" },
    ];

    return (
        <nav className="px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-white text-2xl font-extrabold">MyApp</div>
                <ul className="hidden md:flex space-x-8">
                    {links.map(({ to, label }) => {
                        const isActive = pathname === to;
                        return (
                            <li key={to}>
                                <Link
                                    to={to}
                                    className={`
                    relative inline-block 
                    px-3 py-2 text-md font-medium 
                    text-white transition 
                    hover:text-yellow-300
                    ${isActive
                                            ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-yellow-300"
                                            : "after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-1 after:bg-yellow-300 hover:after:left-0 hover:after:w-full"}
                  `}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <input type="checkbox" id="menu-toggle" className="hidden" />
                    <label htmlFor="menu-toggle" className="cursor-pointer">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul className="absolute right-6 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 transform scale-95 transition-all
                         menu-open:opacity-100 menu-open:scale-100"
                    // Toggle visibility when checkbox is checked
                    // Requires a little extra Tailwind plugin or custom CSS:
                    // .menu-open:opacity-100 { opacity: 1; }
                    // .menu-open:scale-100 { transform: scale(1); }
                    >
                        {links.map(({ to, label }) => (
                            <li key={to} className="border-b last:border-none">
                                <Link
                                    to={to}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
