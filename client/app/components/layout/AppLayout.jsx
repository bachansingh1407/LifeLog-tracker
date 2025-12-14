"use client"
import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
    const pathname = usePathname();

    // 👉 Auth pages (NO sidebar, NO header)
    const isAuthPage =
        pathname === "/login" || pathname === "/signup";
    return (
       <div>
        {isAuthPage?(
          <div className = "min-h-screen font-poppins" > { children }</div>
        ) : (
        <div className="min-h-screen flex font-poppins">
            <aside className="hidden md:block">
                <Sidebar />
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="h-16 bg-white">
                    <Header />
                </header>

                <main className="flex-1 px-4 md:px-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )}
       </div>
  );
}
