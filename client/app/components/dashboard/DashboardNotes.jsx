import Link from "next/link";
import { SlNotebook } from "react-icons/sl";
import { GoPin } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuPen } from "react-icons/lu";

export default function DashboardNotes() {
    const notes = [
        {
            id: "note_001",
            title: "Dashboard UX Improvements",
            content:
                "The dashboard should feel calm and focused. Avoid too many colors. Insights at top, tasks in center, notes & events on the side. Micro-interactions should be subtle.",
            category: "Work",
            tags: ["dashboard", "ux", "design"],
            pinned: true,
            createdAt: "2025-01-15",
            updatedAt: "2025-01-17",
        },
        {
            id: "note_002",
            title: "Daily Reflection – Friday",
            content:
                "Felt productive in the morning. Lost focus after lunch. Need to reduce context switching and avoid checking messages while coding.",
            category: "Personal",
            tags: ["reflection", "focus"],
            pinned: false,
            createdAt: "2025-01-17",
            updatedAt: "2025-01-17",
        },
        {
            id: "note_003",
            title: "LifeLog Feature Ideas",
            content:
                "Add streaks for writing notes, quick add from dashboard, and a weekly summary email. Calendar integration would make planning smoother.",
            category: "Ideas",
            tags: ["lifelog", "features"],
            pinned: true,
            createdAt: "2025-01-14",
            updatedAt: "2025-01-16",
        },
        {
            id: "note_004",
            title: "Mentor Meeting Notes",
            content:
                "Focus on fundamentals. Build fewer projects but finish them properly. Document decisions and write clean commits.",
            category: "Work",
            tags: ["mentorship", "career"],
            pinned: false,
            createdAt: "2025-01-13",
            updatedAt: "2025-01-13",
        },
        {
            id: "note_005",
            title: "System Design Learning",
            content:
                "Caching is not just Redis. Think in layers: browser cache, CDN, application cache, database optimization.",
            category: "Learning",
            tags: ["system-design", "backend"],
            pinned: false,
            createdAt: "2025-01-12",
            updatedAt: "2025-01-12",
        },
        {
            id: "note_006",
            title: "Health Reminder",
            content:
                "Sitting too long affects energy. Take a 5-minute walk every 90 minutes. Hydration drops focus drastically.",
            category: "Health",
            tags: ["health", "habits"],
            pinned: false,
            createdAt: "2025-01-11",
            updatedAt: "2025-01-11",
        },
        {
            id: "note_007",
            title: "Content Ideas for Portfolio",
            content:
                "Write a case study for LifeLog. Explain thought process, trade-offs, UI decisions, and what I would improve next.",
            category: "Ideas",
            tags: ["portfolio", "writing"],
            pinned: false,
            createdAt: "2025-01-10",
            updatedAt: "2025-01-10",
        },
    ];

    return (
        <div className=" bg-white w-full border border-gray-200 rounded-xl">
            <div className="flex justify-between items-center gap-2 p-4 border-b border-gray-100">
                <div className="flex gap-2 items-center">
                    <span className="text-xl text-purple-500 bg-purple-100 rounded-md border border-purple-200 p-2">
                        <SlNotebook />
                    </span>
                    <div className="flex flex-col">
                        <h3 className="text-gray-600 text-sm font-semibold">
                            Recent Notes
                        </h3>
                        <p className="text-gray-400 text-xs">
                            {notes.length} Notes
                        </p>
                    </div>
                </div>
                <Link href="/" className="text-xs text-purple-500 hover:underline">
                    View All Notes
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 h-100 overflow-y-scroll">
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className="shadow bg-blue-50/40 border border-gray-200 flex flex-col gap-3 p-5 rounded-xl hover:shadow-sm transition"
                    >
                        <div className="flex-1 flex flex-col ">
                            <div className="flex justify-between items-start gap-3">
                                <h3 className="font-semibold text-gray-700 leading-tight">
                                    {note.title}
                                </h3>

                                {note.pinned && (
                                    <span className="text-purple-600">
                                        <GoPin size={16} />
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-3">
                                {note.content}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="pt-3 border-t border-gray-300 flex justify-between items-center">
                            <div className="flex items-center gap-3 text-xs">
                                <span className="px-2 py-1 rounded-full bg-white text-purple-600 border border-purple-200 font-medium">
                                    {note.category}
                                </span>

                                <span className="text-gray-400 flex items-center gap-1">
                                    <MdOutlineWatchLater size={14} />
                                    {new Date(note.updatedAt).toLocaleDateString()}
                                </span>
                            </div>

                            <button className="text-gray-400 hover:text-gray-800 transition p-2 bg-white border rounded-lg border-gray-300 hover:border-gray-400">
                                <LuPen size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}