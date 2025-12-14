'use client';

import DashboardInsights from "./components/dashboard/DashboardInsights";
import DashboardNotes from "./components/dashboard/DashboardNotes";
import DashboardStats from "./components/dashboard/DashboardStats";
import EventCalendar from "./components/dashboard/EventCalendar";
import WeeklyProgess from "./components/dashboard/WeeklyProgress";

export default function Home() {
  const user = {
    name: "Bachan Singh",
    email: "bachansingh1407@gmail.com",
    avatar: "https://i.pravatar.cc/40",
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="font-poppins min-h-screen p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">
      <div className="flex items-start justify-between">
        {/* Welcome things */}
        <div className="flex flex-col">
          <h1 className="text-gray-700 font-medium text-lg">Welcome, {user.name}</h1>
          <span className="text-gray-500 text-sm">Here's your productivity overview for today</span>
        </div>

        {/* Date */}
        <span className="hidden md:block text-sm text-slate-500 py-1 px-2 bg-white rounded-full border border-gray-200">
          {today}
        </span>
      </div>
      <div className="mt-3 w-full flex flex-col gap-8">
        <DashboardStats />
        <DashboardInsights />
        <DashboardNotes />
        <WeeklyProgess />
        <EventCalendar />
      </div>

      <div className="mt-8 text-center">
          <div className="bg-white rounded-xl border border-purple-100 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to take your productivity to the next level?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl text-sm mx-auto">
              Explore advanced features, set long-term goals, and unlock premium insights to maximize your efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2.5 bg-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                Explore Premium Features
              </button>
              <button className="px-6 py-2.5 bg-white text-purple-600 font-medium rounded-lg border border-purple-200 hover:bg-purple-50 transition-all">
                View Tutorials
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}