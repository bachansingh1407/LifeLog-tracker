"use client";
import { useState } from "react";
import { MdOutlineSearch, MdOutlineWatchLater } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { LuListChecks, LuPen } from "react-icons/lu";

export default function Goals() {
  const [viewMode, setViewMode] = useState("grid");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const goals = [
    {
      id: 1,
      title: "Master Next.js 14",
      category: "Learning",
      progress: 70,
      status: "active",
      dueDate: "2024-03-31",
    },
    {
      id: 2,
      title: "Daily Workout Routine",
      category: "Health",
      progress: 45,
      status: "active",
      dueDate: "2024-02-15",
    },
    {
      id: 3,
      title: "Build Lifelog MVP",
      category: "Career",
      progress: 90,
      status: "completed",
      dueDate: "2024-01-20",
    },
  ];

  const filteredGoals = goals.filter((goal) => {
    const matchesSearch = goal.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = status === "all" || goal.status === status;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="font-poppins min-h-screen p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Goals</h2>
          <p className="text-sm text-gray-500">
            Track progress and stay focused
          </p>
        </div>

        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          + Add Goal
        </button>
      </div>

      {/* Search + Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <MdOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search goals..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-200 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            className="bg-white border border-gray-300 rounded-lg px-3 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>

          <div className="flex bg-white border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid"
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-500"
              }`}
            >
              <CgMenuGridO />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list"
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-500"
              }`}
            >
              <LuListChecks />
            </button>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }
      >
        {filteredGoals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow transition"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-gray-700">{goal.title}</h3>
              <button className="text-gray-400 hover:text-purple-600">
                <LuPen />
              </button>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{goal.category}</span>
                <span>{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500">
              <span
                className={`px-2 py-1 rounded-full ${
                  goal.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {goal.status}
              </span>

              <span className="flex items-center gap-1">
                <MdOutlineWatchLater />
                {new Date(goal.dueDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
