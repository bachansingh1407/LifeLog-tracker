"use client";
import { useState } from "react";
import {
    LuUser,
    LuMail,
    LuCalendar,
    LuMapPin,
    LuTarget,
    LuTrendingUp,
    LuAward,
    LuClock,
    LuEdit2,
    LuGlobe,
    LuBookOpen,
    LuHeart,
    LuZap,
    LuBrain,
    LuSparkles,
    LuSettings,
    LuDownload,
    LuShare2,
    LuBell,
    LuLock
} from "react-icons/lu";
import { FiActivity, FiTarget } from "react-icons/fi";
import { MdOutlineInsights, MdOutlineWorkspacePremium } from "react-icons/md";

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");

    // User profile data
    const [profile, setProfile] = useState({
        name: "Bachan Singh",
        username: "@bachansingh",
        email: "bachansingh1407@gmail.com",
        bio: "Frontend developer focused on building clean, user-centric interfaces with a strong emphasis on UX, performance, and continuous improvement.", location: "Palampur, Himachal Pradesh",
        joinedDate: "December, 2025",
        timezone: "Indian Standard Time(IST-8)",
        avatarColor: "from-indigo-500 to-purple-600"
    });

    // Stats data
    const stats = {
        streak: 42,
        goalsCompleted: 127,
        totalHours: 856,
        productivityScore: 87
    };

    // Activity data
    const recentActivity = [
        {
            id: 1,
            title: "Completed 'Morning Meditation' goal",
            time: "2 hours ago",
            type: "goal",
            color: "bg-emerald-100",
            icon: <LuTarget className="text-emerald-600" />
        },
        {
            id: 2,
            title: "Added 3 new ideas",
            time: "5 hours ago",
            type: "idea",
            color: "bg-blue-100",
            icon: <LuSparkles className="text-blue-600" />
        },
        {
            id: 3,
            title: "Weekly productivity increased by 12%",
            time: "Yesterday",
            type: "insight",
            color: "bg-purple-100",
            icon: <MdOutlineInsights className="text-purple-600" />
        },
        {
            id: 4,
            title: "Reached 42-day streak",
            time: "2 days ago",
            type: "milestone",
            color: "bg-amber-100",
            icon: <LuAward className="text-amber-600" />
        }
    ];

    // Goals progress
    const goalsProgress = [
        { name: "Learn Spanish", progress: 65, color: "bg-blue-500" },
        { name: "Morning Routine", progress: 92, color: "bg-emerald-500" },
        { name: "Read 24 Books", progress: 58, color: "bg-purple-500" },
        { name: "Fitness Challenge", progress: 76, color: "bg-rose-500" }
    ];

    // Personal preferences
    const preferences = {
        wakeTime: "6:30 AM",
        sleepTime: "11:00 PM",
        focusHours: "10 AM - 2 PM",
        learningStyle: "Visual + Hands-on",
        energyPeak: "Morning"
    };

    const achievements = [
        {
            id: 1,
            category: "Ideas",
            title: "Idea Generator",
            description: "Create 10 ideas",
            level: 1,
            progress: 10,
            target: 10,
            unlocked: true,
            icon: "💡"
        },
        {
            id: 2,
            category: "Ideas",
            title: "Idea Generator",
            description: "Create 50 ideas",
            level: 2,
            progress: 34,
            target: 50,
            unlocked: false,
            icon: "💡"
        },
        {
            id: 3,
            category: "Streak",
            title: "Consistency King",
            description: "Maintain a 30-day streak",
            level: 2,
            progress: 42,
            target: 30,
            unlocked: true,
            icon: "🔥"
        },
        {
            id: 4,
            category: "Focus",
            title: "Deep Focus",
            description: "Reach 90% productivity score",
            level: 3,
            progress: 87,
            target: 90,
            unlocked: false,
            icon: "🧠"
        }
    ];


    return (
        <div className="min-h-screen">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {/* Left Column - Profile Card */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Profile Card */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                        {/* Cover */}
                        <div className="h-32 bg-purple-500"></div>

                        {/* Avatar & Basic Info */}
                        <div className="px-6 pb-6">
                            <div className="flex flex-col items-center -mt-12">
                                <div className={`w-24 h-24 bg-gradient-to-br ${profile.avatarColor} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 border-4 border-white shadow-lg`}>
                                    BS
                                </div>

                                <div className="text-center mb-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">{profile.name}</h2>
                                    <p className="text-gray-600 mb-3">{profile.username}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{profile.bio}</p>
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90"
                                    >
                                        {/* <LuEdit2 /> */}
                                        Edit Profile
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                        <LuDownload />
                                    </button>
                                </div>
                            </div>

                            {/* Personal Info */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <LuMail className="text-gray-400" />
                                    <span className="text-gray-700">{profile.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <LuMapPin className="text-gray-400" />
                                    <span className="text-gray-700">{profile.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <LuCalendar className="text-gray-400" />
                                    <span className="text-gray-700">Joined {profile.joinedDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    {/* <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white shadow rounded-xl">
                  <div className="text-xl font-bold text-gray-900">{stats.streak}</div>
                  <div className="text-xs text-gray-500">Day Streak</div>
                </div>
                <div className="text-center p-3 bg-white shadow rounded-xl">
                  <div className="text-xl font-bold text-gray-900">{stats.goalsCompleted}</div>
                  <div className="text-xs text-gray-500">Goals Done</div>
                </div>
                <div className="text-center p-3 bg-white shadow rounded-xl">
                  <div className="text-xl font-bold text-gray-900">{stats.totalHours}h</div>
                  <div className="text-xs text-gray-500">Tracked Time</div>
                </div>
                <div className="text-center p-3 bg-white shadow rounded-xl">
                  <div className="text-xl font-bold text-gray-900">{stats.productivityScore}%</div>
                  <div className="text-xs text-gray-500">Productivity</div>
                </div>
              </div>
            </div> */}

                    {/* Preferences */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Personal Patterns</h3>
                        <div className="space-y-3">
                            {Object.entries(preferences).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center py-2">
                                    <span className="text-sm text-gray-600">
                                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                    </span>
                                    <span className="text-sm font-medium text-gray-900">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Main Content */}
                <div className="lg:col-span-2 space-y-6 ">
                    {/* Tabs */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden h-full">
                        <div className="bg-white border-b border-gray-200">
                            <div className="flex overflow-x-auto">
                                {[
                                    { id: "overview", label: "Overview", icon: <LuUser /> },
                                    { id: "goals", label: "Goals", icon: <LuTarget /> },
                                    { id: "activity", label: "Activity", icon: <FiActivity /> },
                                    { id: "achievements", label: "Achievements", icon: <LuAward /> },
                                    { id: "insights", label: "Insights", icon: <LuBrain /> }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id
                                            ? "border-indigo-500 text-indigo-600"
                                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                            }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            {/* Overview Tab */}
                            {activeTab === "overview" && (
                                <div className="space-y-6">
                                    {/* Goals Progress */}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-4">Active Goals Progress</h3>
                                        <div className="space-y-4">
                                            {goalsProgress.map((goal, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="font-medium text-gray-700">{goal.name}</span>
                                                        <span className="text-gray-500">{goal.progress}%</span>
                                                    </div>
                                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full ${goal.color} rounded-full transition-all duration-300`}
                                                            style={{ width: `${goal.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recent Activity */}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
                                        <div className="space-y-3">
                                            {recentActivity.map(activity => (
                                                <div key={activity.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white hover:shadow transition">
                                                    <div className={`p-2 rounded-lg ${activity.color}`}>
                                                        {activity.icon}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                                                        <div className="text-xs text-gray-500">{activity.time}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Productivity Chart */}
                                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                                        <h3 className="font-semibold text-gray-900 mb-8">Weekly Productivity</h3>
                                        <div className="flex items-end justify-between h-32">
                                            {[65, 80, 75, 90, 50, 70, 88].map((value, index) => (
                                                <div key={index} className="flex flex-col items-center gap-2">

                                                    <div className="relative w-10 h-24">
                                                        {/* Background */}
                                                        <div className="absolute bottom-0 w-full h-full bg-gray-200 rounded-t-xl" />

                                                        {/* Progress */}
                                                        <div
                                                            className={`absolute bottom-0 w-full rounded-t-xl transition-all ${value >= 85
                                                                ? "bg-emerald-400"
                                                                : value >= 75
                                                                    ? "bg-sky-400"
                                                                    : "bg-amber-400"
                                                                }`}
                                                            style={{ height: `${value}%` }}
                                                        />
                                                    </div>
                                                    <div className="text-xs text-gray-500">Day {index + 1}</div>

                                                    <div className="text-xs font-medium text-gray-700">{value}%</div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* Goals Tab */}
                            {activeTab === "goals" && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {[
                                            { title: "Completed Goals", count: 127, color: "bg-emerald-500" },
                                            { title: "Active Goals", count: 8, color: "bg-blue-500" },
                                            { title: "Behind Schedule", count: 2, color: "bg-amber-500" },
                                            { title: "Long-term Goals", count: 5, color: "bg-purple-500" }
                                        ].map((stat, index) => (
                                            <div key={index} className={`bg-white border border-gray-200 rounded-xl p-5`}>
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="text-lg font-bold text-gray-900">{stat.count}</div>
                                                    <div className={`w-3 h-3 rounded-full ${stat.color}`}></div>
                                                </div>
                                                <div className="text-sm text-gray-600">{stat.title}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Goal Completion Rate</h4>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">78%</div>
                                        <div className="text-sm text-gray-600">Higher than last month (+12%)</div>
                                        <div className="h-2 bg-white/50 rounded-full mt-4 overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: "78%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Activity Tab */}
                            {activeTab === "activity" && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        {[
                                            { label: "Today", value: "4.2h" },
                                            { label: "This Week", value: "28.5h" },
                                            { label: "This Month", value: "112h" },
                                            { label: "All Time", value: "856h" }
                                        ].map((stat, index) => (
                                            <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                                                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                                                <div className="text-sm text-gray-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-4">Activity Timeline</h4>
                                        <div className="relative space-y-2">
                                            {/* Vertical line */}
                                            {/* <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-emerald-400/40 via-emerald-400/20 to-transparent" /> */}

                                            {[
                                                { time: "6:30 AM", activity: "Morning meditation completed", duration: "15 min", type: "mind" },
                                                { time: "7:15 AM", activity: "Workout session", duration: "45 min", type: "health" },
                                                { time: "9:00 AM", activity: "Deep work session", duration: "2.5 hours", type: "focus" },
                                                { time: "2:00 PM", activity: "Learning session", duration: "1 hour", type: "learn" },
                                                { time: "8:00 PM", activity: "Evening reflection", duration: "20 min", type: "mind" }
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="relative flex items-start gap-4"
                                                >

                                                    {/* Content */}
                                                    <div className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:shadow-sm transition">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-xs font-semibold text-gray-500 tracking-wide">
                                                                {item.time}
                                                            </span>
                                                            <span className="text-xs text-gray-400">
                                                                {item.duration}
                                                            </span>
                                                        </div>

                                                        <div className="text-sm font-medium text-gray-700">
                                                            {item.activity}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* Achievements Tab */}
                            {activeTab === "achievements" && (
                                <div className="space-y-6">
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-lg font-bold text-gray-700">
                                                {achievements.filter(a => a.unlocked).length} of {achievements.length}
                                            </div>
                                            <div className="text-sm text-gray-600">Achievements unlocked</div>
                                        </div>
                                        <MdOutlineWorkspacePremium className="text-3xl text-purple-500" />
                                    </div>

                                    {/* Achievement List */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {achievements.map((ach) => {
                                            return (
                                                <div
                                                    key={ach.id}
                                                    className={`flex items-start gap-3 rounded-lg border px-3 py-2.5 transition
                                                        ${ach.unlocked
                                                            ? "bg-white border-purple-400 border-2"
                                                            : "bg-white border-gray-200 opacity-70"
                                                        }`}
                                                >
                                                    {/* Icon */}
                                                    <div
                                                        className={`w-9 h-9 flex items-center justify-center rounded-lg text-lg shrink-0
                                                            ${ach.unlocked
                                                                ? "bg-emerald-500/10"
                                                                : "bg-gray-200"
                                                            }`}
                                                    >
                                                        {ach.icon}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {ach.title}
                                                            </div>

                                                            {/* Level */}
                                                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/5 text-gray-600">
                                                                Lv {ach.level}
                                                            </span>
                                                        </div>

                                                        <div className="text-xs text-gray-500 leading-snug">
                                                            {ach.description}
                                                        </div>

                                                       

                                                        {/* Footer */}
                                                        <div className="flex justify-between text-[11px] mt-1">
                                                            <span className="text-gray-400">
                                                                {ach.progress}/{ach.target}
                                                            </span>
                                                            {ach.unlocked && (
                                                                <span className="text-emerald-600 font-medium">Unlocked</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}


                            {/* Insights Tab */}
                            {activeTab === "insights" && (
                                <div className="space-y-6">
                                    {/* <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                                        <h4 className="font-medium mb-4">Personal Insights</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-sm text-gray-300 mb-1">Most Productive Day</div>
                                                <div className="text-lg font-semibold">Wednesday</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-300 mb-1">Peak Focus Time</div>
                                                <div className="text-lg font-semibold">10 AM - 1 PM</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-300 mb-1">Goal Success Rate</div>
                                                <div className="text-lg font-semibold">78%</div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="space-y-4">
                                        <div className="p-4 border bg-white hover:shadow border-gray-200 rounded-lg">
                                            <div className="flex items-start gap-3">
                                                <LuZap className="text-amber-500 mt-1" />
                                                <div>
                                                    <div className="font-medium text-gray-900 mb-1">Energy Patterns</div>
                                                    <div className="text-sm text-gray-600">
                                                        Your energy peaks in the morning. Schedule important tasks before noon.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 border bg-white hover:shadow border-gray-200 rounded-lg">
                                            <div className="flex items-start gap-3">
                                                <LuHeart className="text-rose-500 mt-1" />
                                                <div>
                                                    <div className="font-medium text-gray-900 mb-1">Consistency Score</div>
                                                    <div className="text-sm text-gray-600">
                                                        Your consistency has improved by 24% this month. Keep going!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 border bg-white hover:shadow border-gray-200 rounded-lg">
                                            <div className="flex items-start gap-3">
                                                <LuBookOpen className="text-blue-500 mt-1" />
                                                <div>
                                                    <div className="font-medium text-gray-900 mb-1">Learning Pace</div>
                                                    <div className="text-sm text-gray-600">
                                                        You complete learning goals 30% faster on weekends.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}