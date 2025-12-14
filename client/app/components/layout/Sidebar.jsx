"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbSmartHome } from "react-icons/tb";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { BsJournalText, BsBarChart } from "react-icons/bs";
import { MdOutlineFlag } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Sidebar() {
    const pathname = usePathname();
    const [expendSidebar, setExpendSidebar] = useState(true);

    const menuItems = [
        {
            name: "Home",
            href: "/",
            icon: <TbSmartHome size={22} />,
        },
        {
            name: "Notes",
            href: "/notes",
            icon: <BsJournalText size={20} />,
        },
        {
            name: "Goals",
            href: "/goals",
            icon: <MdOutlineFlag size={20} />,
        },
        {
            name: "Ideas",
            href: "/ideas",
            icon: <HiOutlineLightBulb size={22} />,
        },
        {
            name: "Insights",
            href: "/insights",
            icon: <BsBarChart size={20} />,
        },
        {
            name: "Settings",
            href: "/settings",
            icon: <IoSettingsOutline size={22} />,
        },
        {
            name: "Logout",
            href:"/login",
            icon: <IoLogOutOutline size={20} />
        }
    ];

    // Collapse sidebar automatically on small screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setExpendSidebar(false);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className={`h-full flex flex-col justify-between border-r border-gray-100 bg-gray-50 transition-all duration-300 ease-in-out ${expendSidebar ? "w-64" : "w-20"
                }`}
        >
            <div className="flex flex-col">
                {/* Logo / Brand */}
                <div className="flex items-center justify-between p-6 pb-4">
                    <div
                        className={`flex items-center gap-3 transition-all duration-300 ${expendSidebar ? "opacity-100" : "opacity-0 overflow-hidden w-0"
                            }`}
                    >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                            <GrBlog size={18} />
                        </div>
                        <span className="text-xl font-semibold text-gray-800 tracking-tight">Lifelog</span>
                    </div>
                    <button
                        onClick={() => setExpendSidebar(!expendSidebar)}
                        className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                        {expendSidebar ? <RxCross2 size={20} /> : <HiOutlineMenu size={22} />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-2">
                    <div className={`text-xs font-medium text-gray-400 uppercase tracking-wider mb-4 px-3 transition-all duration-300 ${expendSidebar ? "opacity-100" : "opacity-0 overflow-hidden"}`}>
                        Menu
                    </div>
                    <div className="space-y-1">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        flex items-center gap-3 px-3 py-3 rounded-xl
                                        transition-all duration-200 ease-out
                                        ${isActive
                                            ? "bg-white border border-purple-200"
                                            : "text-gray-600 hover:bg-white hover:text-gray-900"
                                        }
                                    `}
                                >
                                    <div className={`
                                        flex items-center justify-center
                                        transition-all duration-200
                                        ${isActive
                                            ? "text-gray-600 scale-110"
                                            : "text-gray-400 group-hover:text-gray-600"
                                        }
                                    `}>
                                        {item.icon}
                                    </div>
                                    {expendSidebar && (
                                        <span className={`font-medium text-sm tracking-wide transition-all duration-200 ${isActive ? "text-gray-600 font-medium" : ""}`}>
                                            {item.name}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                      
                    </div>
                </nav>
            </div>

        </div>
    );
}