"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const user = {
        name: "Bachan Singh",
        email: "bachansingh1407@gmail.com",
        avatar: "https://i.pravatar.cc/40",
    };

    const getTitle = () => {
        if (pathname.includes("tasks")) return "Tasks";
        if (pathname.includes("notes")) return "Notes";
        if (pathname.includes("ideas")) return "Ideas";
        if (pathname.includes("goals")) return "Goals";
        if (pathname.includes("insights")) return "Insights";
        if (pathname.includes("settings")) return "Settings";
        return "Dashboard";
    };

    return (
        <div className="h-full px-4 md:px-6 flex items-center justify-between">

            {/* Page Title */}
            <h1 className="text-lg font-semibold text-slate-900">
                {getTitle()}
            </h1>

            {/* Right Section */}
            <div className="flex items-center gap-4">

                {/* Profile */} 
                <Link
                href="/profile"
                 className="outline-0 flex items-center gap-3 rounded-xl p-2 hover:bg-gray-100 transition-all duration-200 group">
                    {/* Avatar with subtle gradient and shadow */}
                    <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-semibold shadow-sm">
                            BS
                        </div>
                    </div>

                    {/* User info - hidden on small screens if needed */}
                    <div className="hidden md:block text-left">
                        <h3 className="font-medium text-gray-800 text-sm leading-tight group-hover:text-gray-900 transition-colors">
                            {user.name}
                        </h3>
                        <span className="text-xs text-gray-500 font-normal truncate max-w-[180px] block group-hover:text-gray-600 transition-colors">
                            {user.email}
                        </span>
                    </div>

                    {/* Optional dropdown arrow */}
                    <svg
                        className="hidden md:block w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </Link>

            </div>
        </div>
    );
}
