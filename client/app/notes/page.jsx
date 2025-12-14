"use client"
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoPin } from "react-icons/go";
import { LuListChecks, LuPen, LuPenLine } from "react-icons/lu";
import { MdFilterListAlt, MdOutlinePlaylistAddCheck, MdOutlineSearch, MdOutlineWatchLater } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { SlNotebook } from "react-icons/sl";
export default function Notes() {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Sample notes data
    const notes = [
        {
            id: 1,
            title: "Meeting Notes - Product Launch",
            content: "Discussed timeline and marketing strategy for upcoming product. Key action items: finalize pricing, prepare demo materials, schedule beta testing.",
            category: "Work",
            pinned: true,
            tags: ["meeting", "product", "planning"],
            updatedAt: "2024-01-15T10:30:00Z",
            color: "bg-blue-50 border-blue-100"
        },
        {
            id: 2,
            title: "Learning Goals 2024",
            content: "Master Next.js 14, improve system design skills, learn about microservices architecture, contribute to open source.",
            category: "Learning",
            pinned: true,
            tags: ["goals", "development", "growth"],
            updatedAt: "2024-01-14T15:45:00Z",
            color: "bg-purple-50 border-purple-100"
        },
        {
            id: 3,
            title: "Project Ideas",
            content: "1. Personal finance tracker 2. Habit building app 3. AI-powered note organizer 4. Collaborative study platform",
            category: "Ideas",
            pinned: false,
            tags: ["ideas", "projects", "future"],
            updatedAt: "2024-01-13T09:20:00Z",
            color: "bg-green-50 border-green-100"
        },
        {
            id: 4,
            title: "Weekly Reflection",
            content: "Good progress on frontend development. Need to focus more on backend integration. Health routine was consistent this week.",
            category: "Personal",
            pinned: false,
            tags: ["reflection", "growth", "review"],
            updatedAt: "2024-01-12T18:00:00Z",
            color: "bg-yellow-50 border-yellow-100"
        },
        {
            id: 5,
            title: "Book Notes - Atomic Habits",
            content: "Key takeaways: 1% better every day, habit stacking, environment design, identity-based habits. Action: Implement morning routine changes.",
            category: "Reading",
            pinned: false,
            tags: ["book", "habits", "productivity"],
            updatedAt: "2024-01-11T14:15:00Z",
            color: "bg-pink-50 border-pink-100"
        },
        {
            id: 6,
            title: "Code Snippets Collection",
            content: "Useful React patterns: custom hooks, context providers, error boundaries. Next.js optimizations: image optimization, dynamic imports.",
            category: "Development",
            pinned: true,
            tags: ["code", "snippets", "react"],
            updatedAt: "2024-01-10T11:00:00Z",
            color: "bg-indigo-50 border-indigo-100"
        },
        {
            id: 7,
            title: "Travel Plans - Summer 2024",
            content: "Potential destinations: Japan, Switzerland, New Zealand. Budget planning, visa requirements, must-visit places.",
            category: "Travel",
            pinned: false,
            tags: ["travel", "planning", "adventure"],
            updatedAt: "2024-01-09T16:30:00Z",
            color: "bg-cyan-50 border-cyan-100"
        },
        {
            id: 8,
            title: "Health & Fitness Routine",
            content: "Morning: 30min workout, Evening: 45min walk. Meal prep schedule, supplements list, weekly progress tracking.",
            category: "Health",
            pinned: false,
            tags: ["health", "fitness", "routine"],
            updatedAt: "2024-01-08T07:45:00Z",
            color: "bg-emerald-50 border-emerald-100"
        }
    ];

    // Filter notes based on search and category
    const filteredNotes = notes.filter(note => {
        const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Get unique categories
    const categories = ['all', ...new Set(notes.map(note => note.category))];

    // Statistics
    const stats = {
        total: notes.length,
        pinned: notes.filter(n => n.pinned).length,
        byCategory: notes.reduce((acc, note) => {
            acc[note.category] = (acc[note.category] || 0) + 1;
            return acc;
        }, {})
    };
    return (
        <div className="font-poppins min-h-screen p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">All Notes</h2>
                    <p className="text-sm text-gray-500">
                        Capture thoughts, ideas, and reflections
                    </p>
                </div>

                <button
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                   bg-purple-600 text-white rounded-lg
                   hover:bg-purple-700 transition"

                >
                    + Add Note
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <MdOutlineSearch size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search notes by title or content..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`outline-0 p-2 rounded ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <CgMenuGridO size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`outline-0 p-2 rounded ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <LuListChecks size={18} />
                        </button>
                    </div>

                    <button className="flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-purple-500 hover:border-gray-400 transition">
                        <MdFilterListAlt size={18} />
                        <span className="hidden sm:inline">Filter</span>
                    </button>
                </div>
            </div>


            <div>
                {/* Notes Grid/List View */}
                {filteredNotes.length > 0 ? (
                    <div className={viewMode === 'grid'
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "space-y-4"
                    }>
                        {filteredNotes.map((note) => (
                            <div
                                key={note.id}
                                className={`
                        bg-white border border-gray-200 rounded-xl hover:shadow-sm transition-all duration-200
                        ${viewMode === 'grid'
                                        ? 'flex flex-col gap-3 p-5 shadow'
                                        : 'flex gap-4 p-4 shadow-sm'
                                    }
                    `}
                            >
                                {viewMode === 'list' && (
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center">
                                            <SlNotebook size={20} className="text-purple-600" />
                                        </div>
                                    </div>
                                )}

                                <div className={`flex-1 ${viewMode === 'list' ? 'min-w-0' : ''}`}>
                                    <div className="flex justify-between items-start gap-3 mb-3">
                                        <div className={`${viewMode === 'list' ? 'flex-1 min-w-0' : ''}`}>
                                            <h3 className={`
                                    font-semibold text-gray-700 leading-tight
                                    ${viewMode === 'list' ? 'text-base truncate' : ''}
                                `}>
                                                {note.title}
                                            </h3>

                                            {/* {viewMode === 'list' && (
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-200 font-medium">
                                                        {note.category}
                                                    </span>
                                                    {note.pinned && (
                                                        <span className="text-xs text-purple-600 flex items-center gap-1">
                                                            <GoPin size={12} />
                                                            Pinned
                                                        </span>
                                                    )}
                                                </div>
                                            )} */}
                                        </div>

                                        <div className="flex items-center gap-1 flex-shrink-0">
                                            {note.pinned && viewMode === 'grid' && (
                                                <span className="text-purple-600">
                                                    <GoPin size={16} />
                                                </span>
                                            )}
                                            <button className="text-gray-400 hover:text-purple-600 transition p-1.5 rounded hover:bg-gray-50">
                                                <LuPen size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <p className={`
                            text-gray-500 text-sm leading-relaxed
                            ${viewMode === 'grid' ? 'line-clamp-3 mb-3' : 'line-clamp-2 mb-4'}
                        `}>
                                        {note.content}
                                    </p>

                                    {/* Footer */}
                                    <div className={`
                            flex justify-between items-center
                            ${viewMode === 'grid' ? 'pt-3 border-t border-gray-200' : ''}
                        `}>
                                        <div className="flex items-center gap-3 text-xs">
                                            {viewMode === 'grid' && (
                                                <span className="px-2 py-1 rounded-full bg-white text-purple-600 border border-purple-200 font-medium">
                                                    {note.category}
                                                </span>
                                            )}

                                            <span className="text-gray-400 flex items-center gap-1">
                                                <MdOutlineWatchLater size={14} />
                                                {new Date(note.updatedAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>

                                        {viewMode === 'list' && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                                    {note.category}
                                                </span>
                                                {note.pinned && (
                                                    <span className="text-purple-600">
                                                        <GoPin size={14} />
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    < div className="text-center py-12 w-full bg-white border border-gray-300 rounded-xl">
                        <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <LuPen size={30} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No notes found</h3>
                        <p className="text-gray-500 mb-6">
                            {searchQuery ? 'Try a different search term' : 'Create your first note to get started'}
                        </p>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                            + Create New Note
                        </button>
                    </div>
                )}
            </div>
        </div >
    )
}