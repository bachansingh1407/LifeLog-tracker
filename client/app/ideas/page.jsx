"use client";
import { useState, useMemo } from "react";
import { FiEdit2 } from "react-icons/fi";
import { LuSparkles, LuPlus, LuTrash2, LuCheck, LuChevronRight, LuFileText, LuTarget, LuCalendar } from "react-icons/lu";
import { RiLightbulbFlashLine, RiAlertLine, RiQuestionLine } from "react-icons/ri";

export default function Ideas() {
    const [activeIdea, setActiveIdea] = useState(null);
    const [newEnhancement, setNewEnhancement] = useState("");
    const [enhType, setEnhType] = useState("improvement");
    const [editingEnhancement, setEditingEnhancement] = useState(null);
    const [editText, setEditText] = useState("");

    const [ideas, setIdeas] = useState([
        {
            id: 1,
            title: "Expense Splitter",
            description: "Automatically split shared expenses with smart transaction detection",
            confidence: "high",
            category: "productivity",
            enhancements: [
                { id: 1, text: "Auto-detect UPI transactions", type: "improvement" },
                { id: 2, text: "Handle refund edge cases", type: "risk" },
                { id: 3, text: "Offline mode support", type: "improvement" },
            ],
            updatedAt: "Jan 20, 2024",
            createdAt: "Jan 15, 2024",
            color: "bg-gradient-to-br from-blue-50 via-blue-50/50 to-white"
        },
        {
            id: 2,
            title: "Energy Planner",
            description: "Schedule tasks based on your daily energy patterns",
            confidence: "medium",
            category: "wellness",
            enhancements: [
                { id: 1, text: "Energy-based task scheduling", type: "improvement" },
            ],
            updatedAt: "Jan 18, 2024",
            createdAt: "Jan 10, 2024",
            color: "bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-white"
        },
        {
            id: 3,
            title: "Digital Garden",
            description: "Visual knowledge graph connecting notes and ideas",
            confidence: "high",
            category: "knowledge",
            enhancements: [
                { id: 1, text: "Auto-relationship detection", type: "improvement" },
                { id: 2, text: "Privacy considerations", type: "risk" },
            ],
            updatedAt: "Yesterday",
            createdAt: "Jan 22, 2024",
            color: "bg-gradient-to-br from-purple-50 via-purple-50/50 to-white"
        },
        {
            id: 4,
            title: "Habit Stacker",
            description: "Chain micro-habits for better consistency and growth",
            confidence: "medium",
            category: "habits",
            enhancements: [],
            updatedAt: "Jan 15, 2024",
            createdAt: "Jan 12, 2024",
            color: "bg-gradient-to-br from-amber-50 via-amber-50/50 to-white"
        },
    ]);

    // Memoized today's date
    const today = useMemo(() => {
        return new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
        });
    }, []);

    // Enhancement type configurations
    const enhancementTypes = {
        improvement: {
            icon: <RiLightbulbFlashLine className="text-emerald-500" />,
            label: "Improvement",
            placeholder: "How can this be improved?",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100"
        },
        risk: {
            icon: <RiAlertLine className="text-rose-500" />,
            label: "Risk",
            placeholder: "What potential risks exist?",
            color: "text-rose-600",
            bg: "bg-rose-50",
            border: "border-rose-100"
        },
        question: {
            icon: <RiQuestionLine className="text-blue-500" />,
            label: "Question",
            placeholder: "What needs clarification?",
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100"
        }
    };

    // Category colors
    const categoryColors = {
        productivity: "bg-blue-100 text-blue-700",
        wellness: "bg-emerald-100 text-emerald-700",
        knowledge: "bg-purple-100 text-purple-700",
        habits: "bg-amber-100 text-amber-700",
        finance: "bg-rose-100 text-rose-700",
        creativity: "bg-violet-100 text-violet-700"
    };

    // Enhanced idea operations
    const handleAddEnhancement = () => {
        if (!newEnhancement.trim() || !activeIdea) return;

        const newId = activeIdea.enhancements.length > 0
            ? Math.max(...activeIdea.enhancements.map(e => e.id)) + 1
            : 1;

        const updatedIdea = {
            ...activeIdea,
            enhancements: [
                ...activeIdea.enhancements,
                { id: newId, text: newEnhancement, type: enhType },
            ],
            updatedAt: "Just now"
        };

        setIdeas(prev => prev.map(idea => idea.id === activeIdea.id ? updatedIdea : idea));
        setActiveIdea(updatedIdea);
        setNewEnhancement("");
    };

    const handleEditEnhancement = (enhancementId, newText) => {
        if (!activeIdea || !newText.trim()) return;

        const updatedIdea = {
            ...activeIdea,
            enhancements: activeIdea.enhancements.map(e =>
                e.id === enhancementId ? { ...e, text: newText } : e
            ),
            updatedAt: "Just now"
        };

        setIdeas(prev => prev.map(idea => idea.id === activeIdea.id ? updatedIdea : idea));
        setActiveIdea(updatedIdea);
        setEditingEnhancement(null);
        setEditText("");
    };

    const handleDeleteEnhancement = (enhancementId) => {
        if (!activeIdea) return;

        if (window.confirm("Delete this enhancement?")) {
            const updatedIdea = {
                ...activeIdea,
                enhancements: activeIdea.enhancements.filter(e => e.id !== enhancementId),
                updatedAt: "Just now"
            };

            setIdeas(prev => prev.map(idea => idea.id === activeIdea.id ? updatedIdea : idea));
            setActiveIdea(updatedIdea);
        }
    };

    const handleCreateNewIdea = () => {
        const categories = ["productivity", "wellness", "knowledge", "habits"];
        const colors = [
            "bg-gradient-to-br from-blue-50 via-blue-50/50 to-white",
            "bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-white",
            "bg-gradient-to-br from-purple-50 via-purple-50/50 to-white",
            "bg-gradient-to-br from-amber-50 via-amber-50/50 to-white"
        ];

        const randomIndex = Math.floor(Math.random() * categories.length);
        const newId = Math.max(...ideas.map(i => i.id)) + 1;

        const newIdea = {
            id: newId,
            title: `New Idea ${newId}`,
            description: "Describe your idea here...",
            confidence: "medium",
            category: categories[randomIndex],
            enhancements: [],
            updatedAt: "Just now",
            createdAt: today,
            color: colors[randomIndex]
        };

        setIdeas([newIdea, ...ideas]);
        setActiveIdea(newIdea);
    };

    // Render empty state
    const renderEmptyState = () => (
        <div className="h-full flex flex-col items-center justify-center py-16 border-2 border-dashed border-gray-200 rounded-2xl bg-white">
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-4">
                <LuSparkles className="text-3xl text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Select an Idea</h3>
            <p className="text-gray-500 mb-6 text-center max-w-sm">
                Choose an idea from the sidebar or create a new one to start refining.
            </p>
            <button
                onClick={handleCreateNewIdea}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
                <LuPlus />
                Create New Idea
            </button>
        </div>
    );

    // Render enhancement item
    const renderEnhancementItem = (enh) => (
        <div key={enh.id} className={`p-4 rounded-xl border ${enhancementTypes[enh.type].border} ${enhancementTypes[enh.type].bg}`}>
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                    <div className="mt-0.5">
                        {enhancementTypes[enh.type].icon}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-medium ${enhancementTypes[enh.type].color} uppercase tracking-wide`}>
                                {enh.type}
                            </span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">
                                Added {activeIdea.updatedAt}
                            </span>
                        </div>
                        {editingEnhancement === enh.id ? (
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    autoFocus
                                />
                                <button
                                    onClick={() => handleEditEnhancement(enh.id, editText)}
                                    className="p-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200"
                                >
                                    <LuCheck size={16} />
                                </button>
                                <button
                                    onClick={() => {
                                        setEditingEnhancement(null);
                                        setEditText("");
                                    }}
                                    className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                                >
                                    ✕
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-700 text-sm">{enh.text}</p>
                        )}
                    </div>
                </div>
                {editingEnhancement !== enh.id && (
                    <div className="flex gap-1 ml-2">
                        <button
                            onClick={() => {
                                setEditingEnhancement(enh.id);
                                setEditText(enh.text);
                            }}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors"
                        >
                            <FiEdit2 size={16} />
                        </button>
                        <button
                            onClick={() => handleDeleteEnhancement(enh.id)}
                            className="p-2 text-gray-400 hover:text-rose-600 hover:bg-white rounded-lg transition-colors"
                        >
                            <LuTrash2 size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="font-poppins min-h-screen p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">
            {/* <div className="max-w-7xl mx-auto"> */}
            {/* Header */}

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">All Ideas</h2>
                    <p className="text-sm text-gray-500">
                        Capture thoughts, refine them, and watch them grow
                    </p>
                </div>

                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    + Add Idea
                </button>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Column - Idea List */}
                <div className="lg:col-span-1">
                    <div className="space-y-4">
                        {ideas.map((idea) => (
                            <div
                                key={idea.id}
                                onClick={() => setActiveIdea(idea)}
                                className={`cursor-pointer rounded-xl p-4 transition-all duration-200 ${activeIdea?.id === idea.id
                                    ? "ring-2 ring-indigo-500 shadow-lg bg-white"
                                    : "bg-white border border-gray-200 hover:shadow-md hover:border-gray-300"
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-semibold text-gray-900">{idea.title}</h3>
                                            <span className={`px-2 py-0.5 text-xs rounded-full ${categoryColors[idea.category]}`}>
                                                {idea.category}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {idea.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <LuSparkles size={14} />
                                        <span>{idea.enhancements.length} thoughts</span>
                                    </div>
                                    <span className="text-xs">{idea.updatedAt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Idea Details */}
                <div className="lg:col-span-3">
                    {activeIdea ? (
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-full">
                            {/* Header */}
                            <div className="p-6 border-b border-gray-100">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h2 className="text-xl font-bold text-gray-600">{activeIdea.title}</h2>
                                            <span className={`px-2.5 py-1 text-xs rounded-full ${categoryColors[activeIdea.category]}`}>
                                                {activeIdea.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm mb-4">{activeIdea.description}</p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">

                                            <div className="text-sm text-gray-500">Updated {activeIdea.updatedAt}</div>
                                            <span className="flex items-center gap-1">
                                                <LuSparkles size={14} />
                                                {activeIdea.enhancements.length} thoughts
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="flex items-center gap-1 text-gray-500 text-sm">
                                            <LuCalendar size={14} />
                                            Created {activeIdea.createdAt}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Enhancements Section */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900">Enhancements</h3>
                                    <span className="text-sm text-gray-500">
                                        {activeIdea.enhancements.length} total
                                    </span>
                                </div>

                                {/* Enhancements List */}
                                {activeIdea.enhancements.length > 0 ? (
                                    <div className="space-y-3 mb-8 max-h-[400px] overflow-y-auto pr-2">
                                        {activeIdea.enhancements.map(renderEnhancementItem)}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 mb-8 border-2 border-dashed border-gray-200 rounded-xl">
                                        <LuSparkles className="text-3xl text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500 mb-2">No enhancements yet</p>
                                        <p className="text-sm text-gray-400">Start refining your idea below</p>
                                    </div>
                                )}

                                {/* Add Enhancement Form */}
                                <div className="border-t border-gray-100 pt-6">
                                    <h4 className="font-medium text-gray-900 mb-4">Add Enhancement</h4>
                                    <div className="space-y-4">
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <select
                                                value={enhType}
                                                onChange={(e) => setEnhType(e.target.value)}
                                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700"
                                            >
                                                {Object.entries(enhancementTypes).map(([key, config]) => (
                                                    <option key={key} value={key}>
                                                        {config.label}
                                                    </option>
                                                ))}
                                            </select>

                                            <div className="flex-1 relative">
                                                <input
                                                    value={newEnhancement}
                                                    onChange={(e) => setNewEnhancement(e.target.value)}
                                                    placeholder={enhancementTypes[enhType].placeholder}
                                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    maxLength={200}
                                                />
                                                {newEnhancement.length > 0 && (
                                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                                                        {newEnhancement.length}/200
                                                    </span>
                                                )}
                                            </div>
                                            <button
                                                onClick={handleAddEnhancement}
                                                disabled={!newEnhancement.trim()}
                                                className={`px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all ${newEnhancement.trim()
                                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90"
                                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                    }`}
                                            >
                                                <LuPlus />
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="border-t border-gray-100 pt-6 mt-6">
                                    <div className="flex flex-wrap gap-3">
                                        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:opacity-90">
                                            <LuTarget size={16} />
                                            Convert to Goal
                                            <LuChevronRight size={16} />
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
                                            <LuFileText size={16} />
                                            Export as Note
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : renderEmptyState()}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}