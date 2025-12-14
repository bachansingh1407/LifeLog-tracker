"use client";
import { useState } from "react";
import {
    LuSettings,
    LuUser,
    LuBell,
    LuPalette,
    LuDatabase,
    LuShield,
    LuMoon,
    LuSun,
    LuGlobe,
    LuTrash2,
    LuDownload,
    LuKey,
    LuSmartphone,
    LuClock,
    LuEye,
    LuMail,
    LuChevronRight,
    LuCheck,
    LuInfo,
    LuCloud
} from "react-icons/lu";
import { FiActivity, FiEdit2 } from "react-icons/fi";

export default function Settings() {
    const [activeSection, setActiveSection] = useState("general");
    const [theme, setTheme] = useState("light");
    const [notifications, setNotifications] = useState({
        dailyReminders: true,
        goalDeadlines: true,
        weeklyInsights: false,
        emailDigest: false
    });
    const [privacy, setPrivacy] = useState({
        profileVisible: false,
        showProgress: true,
        dataCollection: true
    });

    // User profile data
    const [profile, setProfile] = useState({
        name: "Bachan Singh",
        email: "bachansingh1407@gmail.com",
        bio: "Building better habits, one day at a time.",
        timezone: "UTC+5:30",
        language: "English"
    });

    // Settings sections
    const sections = [
        {
            id: "general",
            title: "General",
            icon: <LuSettings />,
            color: "text-gray-600",
            bg: "bg-gray-50"
        },
        {
            id: "profile",
            title: "Profile",
            icon: <LuUser />,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            id: "notifications",
            title: "Notifications",
            icon: <LuBell />,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            id: "appearance",
            title: "Appearance",
            icon: <LuPalette />,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            id: "data",
            title: "Data & Privacy",
            icon: <LuDatabase />,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            id: "security",
            title: "Security",
            icon: <LuShield />,
            color: "text-amber-600",
            bg: "bg-amber-50"
        }
    ];

    // Themes
    const themes = [
        { id: "light", name: "Light", icon: <LuSun />, color: "bg-gray-100" },
        { id: "dark", name: "Dark", icon: <LuMoon />, color: "bg-gray-800" },
        { id: "system", name: "System", icon: <LuSettings />, color: "bg-gradient-to-r from-gray-100 to-gray-800" }
    ];

    // Languages
    const languages = [
        { code: "en", name: "English" },
        { code: "es", name: "Español" },
        { code: "fr", name: "Français" },
        { code: "de", name: "Deutsch" },
        { code: "ja", name: "日本語" }
    ];

    // Timezones
    const timezones = [
        "UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-9:00", "UTC-8:00",
        "UTC-7:00", "UTC-6:00", "UTC-5:00", "UTC-4:00", "UTC-3:00",
        "UTC-2:00", "UTC-1:00", "UTC+0:00", "UTC+1:00", "UTC+2:00",
        "UTC+3:00", "UTC+4:00", "UTC+5:00", "UTC+5:30", "UTC+6:00",
        "UTC+7:00", "UTC+8:00", "UTC+9:00", "UTC+10:00", "UTC+11:00", "UTC+12:00"
    ];

    const handleNotificationToggle = (key) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handlePrivacyToggle = (key) => {
        setPrivacy(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleExportData = () => {
        alert("Exporting your data... This may take a moment.");
        // In a real app, this would trigger a data export
    };

    const handleDeleteAccount = () => {
        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            alert("Account deletion scheduled. You will receive a confirmation email.");
        }
    };

    const renderGeneralSettings = () => (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold text-gray-700 mb-4">Application Settings</h4>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <LuGlobe className="text-blue-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-700">Language</div>
                                <div className="text-sm text-gray-500">Interface language</div>
                            </div>
                        </div>
                        <select
                            className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                            value={profile.language}
                            onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                        >
                            {languages.map(lang => (
                                <option key={lang.code} value={lang.name}>{lang.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-50 rounded-lg">
                                <LuCloud className="text-amber-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-700">Auto Sync</div>
                                <div className="text-sm text-gray-500">Automatically sync your data to cloud</div>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={false}
                                onChange={() => handleNotificationToggle(key)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-50 rounded-lg">
                                <LuClock className="text-purple-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-700">Time Zone</div>
                                <div className="text-sm text-gray-500">Set your local time</div>
                            </div>
                        </div>
                        <select
                            className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                            value={profile.timezone}
                            onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                        >
                            {timezones.map(tz => (
                                <option key={tz} value={tz}>{tz}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-50 rounded-lg">
                                <FiActivity className="text-amber-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-700">Daily Reminder Time</div>
                                <div className="text-sm text-gray-500">When to send daily reminders</div>
                            </div>
                        </div>
                        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
                            <option>9:00 AM</option>
                            <option>10:00 AM</option>
                            <option>12:00 PM</option>
                            <option>6:00 PM</option>
                            <option>8:00 PM</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderProfileSettings = () => (
        <div className="space-y-6">
            <div className="flex items-center gap-6">
                <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        BS
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50">
                        <FiEdit2 className="text-gray-600" size={16} />
                    </button>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-700">{profile.name}</h3>
                    <p className="text-gray-600">{profile.email}</p>
                    <p className="text-gray-500 text-sm mt-2">{profile.bio}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about yourself..."
                    />
                </div>
            </div>
        </div>
    );

    const renderNotificationSettings = () => (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold text-gray-700 mb-4">Notification Preferences</h4>
                <div className="space-y-3">
                    {Object.entries(notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${key === 'dailyReminders' ? 'bg-blue-50' : key === 'goalDeadlines' ? 'bg-purple-50' : key === 'weeklyInsights' ? 'bg-indigo-50' : 'bg-gray-50'}`}>
                                    <LuBell className={key === 'dailyReminders' ? 'text-blue-600' : key === 'goalDeadlines' ? 'text-purple-600' : key === 'weeklyInsights' ? 'text-indigo-600' : 'text-gray-600'} />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-700">
                                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {key === 'dailyReminders' && 'Daily progress updates and reminders'}
                                        {key === 'goalDeadlines' && 'Goal deadline notifications'}
                                        {key === 'weeklyInsights' && 'Weekly summary and insights'}
                                        {key === 'emailDigest' && 'Email digest of weekly activity'}
                                    </div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={() => handleNotificationToggle(key)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-700 mb-4">Notification Channels</h4>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <LuSmartphone className="text-green-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-700">Push Notifications</div>
                                <div className="text-sm text-gray-500">Receive notifications on your device</div>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-50 rounded-lg">
                                <LuMail className="text-red-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-700">Email Notifications</div>
                                <div className="text-sm text-gray-500">Receive notifications via email</div>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAppearanceSettings = () => (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold text-gray-700 mb-4">Theme</h4>
                <div className="">
                    <div className="flex gap-4 justify-around">
                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5"> */}
                        {themes.map(t => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id)}
                                className={`group relative overflow-hidden ounded-2xl p-6 rounded-xl border border-gray-300 transition-all duration-300 ${theme === t.id
                                    ? 'ring-4 ring-indigo-500/30 shadow-xl bg-gradient-to-br from-white to-gray-50'
                                    : 'hover:shadow-lg hover:scale-[1.02] bg-gray-50 shadow-sm'
                                    }`}
                            >
                                {/* Selection badge */}
                                {theme === t.id && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="px-3 py-1 bg-indigo-500 text-white text-xs font-medium rounded-full">
                                            Active
                                        </div>
                                    </div>
                                )}

                                {/* Theme preview mockup */}
                                <div className={`relative rounded-xl overflow-hidden ${t.id === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} p-4 mb-5 shadow-inner`}>
                                    {/* Mockup header */}
                                    <div className={`flex items-center justify-between mb-4 ${t.id === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${t.id === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                            <div className={`w-20 h-2 rounded ${t.id === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                        </div>
                                        <div className={`w-8 h-2 rounded ${t.id === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                    </div>

                                    {/* Mockup content */}
                                    <div className="space-y-3">
                                        <div className={`w-full h-2 rounded ${t.id === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                        <div className={`w-3/4 h-2 rounded ${t.id === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                        <div className={`w-1/2 h-2 rounded ${t.id === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                    </div>

                                    {/* Icon overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`p-3 rounded-full ${t.id === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                                            <div className={t.id === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                                {t.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Theme info */}
                                <div className="text-center">
                                    <div className="font-semibold text-gray-900 text-lg mb-1">{t.name}</div>
                                    <div className="text-sm text-gray-500">
                                        {t.id === 'light' && 'Clean and bright interface'}
                                        {t.id === 'dark' && 'Comfortable for nighttime'}
                                        {t.id === 'system' && 'Adapts to your device'}
                                    </div>
                                </div>

                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none"></div>
                            </button>
                        ))}
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-700 mb-4">Display Preferences</h4>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg">
                                <LuEye className="text-gray-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-700">Reduced Motion</div>
                                <div className="text-sm text-gray-500">Minimize animations and transitions</div>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-50 rounded-lg">
                                <LuPalette className="text-purple-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-700">Accent Color</div>
                                <div className="text-sm text-gray-500">Choose your primary color theme</div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'].map(color => (
                                <button
                                    key={color}
                                    className="w-8 h-8 rounded-full border-2 border-gray-200"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDataPrivacySettings = () => (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold text-gray-700 mb-4">Privacy Settings</h4>
                <div className="space-y-3">
                    {Object.entries(privacy).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-50 rounded-lg">
                                    <LuEye className="text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-700">
                                        {key === 'profileVisible' && 'Public Profile'}
                                        {key === 'showProgress' && 'Show Progress Publicly'}
                                        {key === 'dataCollection' && 'Anonymous Data Collection'}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {key === 'profileVisible' && 'Allow others to view your profile'}
                                        {key === 'showProgress' && 'Share your progress and achievements'}
                                        {key === 'dataCollection' && 'Help improve Lifelog with anonymous data'}
                                    </div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={() => handlePrivacyToggle(key)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-700 mb-4">Data Management</h4>
                <div className="space-y-4">
                    <button
                        onClick={handleExportData}
                        className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <LuDownload className="text-green-600" />
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="font-medium text-gray-700">Export Your Data</div>
                                <div className="text-sm text-gray-500">Download all your data in JSON format</div>
                            </div>
                        </div>
                        <LuChevronRight className="text-gray-400" />
                    </button>

                    <button
                        onClick={() => alert('This will clear all your local data.')}
                        className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-50 rounded-lg">
                                <LuTrash2 className="text-amber-600" />
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="font-medium text-gray-700">Clear Local Data</div>
                                <div className="text-sm text-gray-500">Remove cached data from this device</div>
                            </div>
                        </div>
                        <LuChevronRight className="text-gray-400" />
                    </button>

                    <button
                        onClick={handleDeleteAccount}
                        className="w-full flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg hover:bg-red-50 transition text-red-600"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-50 rounded-lg">
                                <LuTrash2 />
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="font-medium text-gray-700">Delete Account</div>
                                <div className="text-sm text-red-500">Permanently delete your account and all data</div>
                            </div>
                        </div>
                        <LuChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );

    const renderSecuritySettings = () => (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold text-gray-700 mb-4">Security</h4>
                <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <LuKey className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-700">Change Password</div>
                                    <div className="text-sm text-gray-500">Update your account password</div>
                                </div>
                            </div>
                            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Change
                            </button>
                        </div>
                        <div className="text-xs text-gray-500">
                            Last changed: 2 months ago
                        </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-50 rounded-lg">
                                    <LuShield className="text-purple-600" />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-700">Two-Factor Authentication</div>
                                    <div className="text-sm text-gray-500">Add an extra layer of security</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                        </div>
                        <div className="text-xs text-gray-500">
                            Currently active via authenticator app
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-700 mb-4">Sessions</h4>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <LuSmartphone className="text-green-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Chrome on Mac</div>
                                <div className="text-sm text-gray-500">Active now • San Francisco, US</div>
                            </div>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg">
                                <LuSmartphone className="text-gray-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Safari on iPhone</div>
                                <div className="text-sm text-gray-500">Yesterday • New York, US</div>
                            </div>
                        </div>
                        <button className="text-sm text-red-600 hover:text-red-700">
                            Revoke
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="font-poppins min-h-screen p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">


            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">All Settings</h2>
                    <p className="text-sm text-gray-500">Customize your Lifelog experience</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-1.5 text-sm bg-gray-500 text-white rounded-lg hover:bg-purple-700 transition">
                        Cancel
                    </button>
                    <button className="px-4 py-1.5 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                        Sve changes
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Sidebar */}
                <div className="lg:w-70">
                    <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-6">
                        <div className="space-y-1">
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeSection === section.id
                                        ? `${section.bg} ${section.color} font-medium`
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className={activeSection === section.id ? section.color : 'text-gray-400'}>
                                        {section.icon}
                                    </div>
                                    <span>{section.title}</span>
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="px-4">
                                <div className="text-xs font-medium text-gray-500 mb-2">APP VERSION</div>
                                <div className="text-sm text-gray-900">Lifelog v2.1.0</div>
                                <div className="text-xs text-gray-500 mt-1">© 2025 Lifelog. All rights reserved.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1">
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                        {/* Section Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${sections.find(s => s.id === activeSection)?.bg}`}>
                                    <div className={sections.find(s => s.id === activeSection)?.color}>
                                        {sections.find(s => s.id === activeSection)?.icon}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {sections.find(s => s.id === activeSection)?.title}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {activeSection === 'general' && 'Configure basic application settings'}
                                        {activeSection === 'profile' && 'Manage your personal information'}
                                        {activeSection === 'notifications' && 'Control how and when we notify you'}
                                        {activeSection === 'appearance' && 'Customize the look and feel'}
                                        {activeSection === 'data' && 'Manage your data and privacy settings'}
                                        {activeSection === 'security' && 'Security and account access settings'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Content */}
                        <div className="space-y-6">
                            {activeSection === 'general' && renderGeneralSettings()}
                            {activeSection === 'profile' && renderProfileSettings()}
                            {activeSection === 'notifications' && renderNotificationSettings()}
                            {activeSection === 'appearance' && renderAppearanceSettings()}
                            {activeSection === 'data' && renderDataPrivacySettings()}
                            {activeSection === 'security' && renderSecuritySettings()}
                        </div>

                        {/* Save Button for Mobile */}
                        <div className="lg:hidden mt-8 pt-6 border-t border-gray-200">
                            <div className="flex gap-3">
                                <button className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                                    Cancel
                                </button>
                                <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}