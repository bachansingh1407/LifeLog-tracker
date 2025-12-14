"use client";
import { useState } from "react";
import {
    LuSparkles,
    LuPen,
    LuCheckCircle,
    LuArrowRight,
    LuHistory,
    LuTrendingUp,
    LuLightbulb,
    LuTarget,
    LuCalendar,
    LuChevronRight
} from "react-icons/lu";
import { MdOutlineInsights } from "react-icons/md";

export default function Insights() {
    const [todayInsight, setTodayInsight] = useState("");
    const [decision, setDecision] = useState("");
    const [activeTab, setActiveTab] = useState("today");

    const [savedInsights, setSavedInsights] = useState([
        {
            id: 1,
            date: "Jan 22, 2024",
            insight: "I do my best work late evening when distractions are low.",
            decision: "Schedule deep work after 8 PM",
            tags: ["productivity", "timing"],
            mood: "focused"
        },
        {
            id: 2,
            date: "Jan 19, 2024",
            insight: "Too many goals at once reduce consistency.",
            decision: "Limit active goals to 3",
            tags: ["goals", "focus"],
            mood: "reflective"
        },
        {
            id: 3,
            date: "Jan 18, 2024",
            insight: "Morning meditation improves my focus throughout the day.",
            decision: "Keep 10-minute morning meditation routine",
            tags: ["wellness", "routine"],
            mood: "balanced"
        },
        {
            id: 4,
            date: "Jan 15, 2024",
            insight: "Breaking tasks into smaller chunks makes them less overwhelming.",
            decision: "Use Pomodoro technique for complex tasks",
            tags: ["productivity", "method"],
            mood: "productive"
        },
    ]);

    // Stats
    const stats = {
        totalInsights: savedInsights.length,
        avgPerWeek: 3.2,
        decisionRate: "78%",
        streak: 7
    };

    const saveInsight = () => {
        if (!todayInsight.trim() && !decision.trim()) return;

        const newInsight = {
            id: Date.now(),
            date: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
            insight: todayInsight,
            decision: decision,
            tags: ["today"],
            mood: "insightful"
        };

        setSavedInsights([newInsight, ...savedInsights]);
        setTodayInsight("");
        setDecision("");
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) return "Today";
        if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
        return dateString;
    };

    return (
        <div className="font-poppins min-h-screen p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">

            {/* Header */}

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">All Insights</h2>
                    <p className="text-sm text-gray-500">
                        Capture reflections, identify patterns, and make intentional decisions
                    </p>
                </div>
                {/* 
                <button
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                   bg-purple-600 text-white rounded-lg
                   hover:bg-purple-700 transition"

                >
                    + Add Note
                </button> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
                {/* Left: Today's Reflection */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Today's Insight */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                                    <LuPen className="text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Today&apos;s Reflection</h3>
                                    <p className="text-sm text-gray-500">What did you learn about yourself today?</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Insight
                                    </label>
                                    <textarea
                                        value={todayInsight}
                                        onChange={(e) => setTodayInsight(e.target.value)}
                                        placeholder="I noticed that I work better when..."
                                        rows={4}
                                        className="w-full p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                    />
                                    <div className="text-xs text-gray-400 mt-2">
                                        Tip: Be specific about patterns or behaviors you observed
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Action / Decision
                                    </label>
                                    <input
                                        value={decision}
                                        onChange={(e) => setDecision(e.target.value)}
                                        placeholder="Based on this, I will..."
                                        className="w-full p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                    />
                                    <div className="text-xs text-gray-400 mt-2">
                                        What will you do differently tomorrow?
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        onClick={saveInsight}
                                        disabled={!todayInsight.trim() && !decision.trim()}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${todayInsight.trim() || decision.trim()
                                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 shadow-md"
                                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                            }`}
                                    >
                                        <LuSparkles />
                                        Save Insight
                                        <LuArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Prompt Suggestions */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                            <LuLightbulb className="text-indigo-600" />
                            Reflection Prompts
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                "What made me most productive today?",
                                "When did I feel most energized?",
                                "What distraction should I eliminate?",
                                "What habit served me well?",
                                "What could I have done better?",
                                "What inspired me today?"
                            ].map((prompt, index) => (
                                <button
                                    key={index}
                                    onClick={() => setTodayInsight(prompt)}
                                    className="text-left p-3 bg-white/50 hover:bg-white border border-indigo-100 rounded-lg text-sm text-gray-700 transition hover:shadow-sm"
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Insight History */}
                <div className="lg:col-span-4 space-y-6">
                    {/* History Header */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-50 rounded-lg">
                                    <LuHistory className="text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Past Insights</h3>
                                    <p className="text-sm text-gray-500">Your reflections over time</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">{savedInsights.length} total</span>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 mb-6">
                            <button
                                onClick={() => setActiveTab("today")}
                                className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === "today"
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Recent
                            </button>
                            {/* <button
                                onClick={() => setActiveTab("patterns")}
                                className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === "patterns"
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Patterns
                            </button> */}
                            <button
                                onClick={() => setActiveTab("decisions")}
                                className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === "decisions"
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Decisions
                            </button>
                        </div>

                        {/* Insights List */}
                        {savedInsights.length > 0 ? (
                            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2">
                                {savedInsights.map((item) => (
                                    <div
                                        key={item.id}
                                        className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition bg-white"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-medium text-gray-400">
                                                {formatDate(item.date)}
                                            </span>
                                            {item.tags && item.tags.length > 0 && (
                                                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                                                    {item.tags[0]}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                                            {item.insight}
                                        </p>

                                        {item.decision && (
                                            <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                                                <div className="flex items-start gap-2">
                                                    <LuTarget className="text-emerald-600 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <div className="text-xs font-medium text-emerald-700 mb-1">Action Taken</div>
                                                        <div className="text-sm text-emerald-800">{item.decision}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <LuPen className="text-gray-400 text-2xl" />
                                </div>
                                <h4 className="font-medium text-gray-700 mb-2">No insights yet</h4>
                                <p className="text-sm text-gray-500 mb-4">
                                    Start by reflecting on your day
                                </p>
                                <button
                                    onClick={() => document.querySelector('textarea')?.focus()}
                                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                >
                                    Write your first insight →
                                </button>
                            </div>
                        )}
                    </div>

                   
                </div>
            </div>

        </div>
    );
}