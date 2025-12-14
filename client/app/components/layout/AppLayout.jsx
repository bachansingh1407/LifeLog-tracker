import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout({children}) {
    return (
        <div className="min-h-screen flex font-poppins">
            <aside className="hidden md:block">
                <Sidebar />
            </aside>
            <div className="flex-1 flex flex-col">

                {/* Header */}
                <header className="h-16 bg-white">
                    <Header />
                </header>

                {/* Page Content */}
                <main className="flex-1 px-4 md:px-6 overflow-y-auto ">
                    {children}
                </main>

            </div>
        </div>
    )
}