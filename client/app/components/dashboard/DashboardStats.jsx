"use client";

import {
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiBarChart2,
} from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi";

export default function DashboardStats() {
  const data = {
    notes: { total: 15 },
    ideas: { total: 12 },
    goals: { total: 8, completed: 5 },
    tasks: { total: 7, completed: 4 },
    streak: 6,
    productivity: 70,
  };

  const totalItems =
    data.notes.total +
    data.ideas.total +
    data.goals.total +
    data.tasks.total;

  const completedItems =
    data.goals.completed + data.tasks.completed;

  const completionRate = Math.round(
    (completedItems / (data.goals.total + data.tasks.total)) * 100
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Items */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Items</p>
            <h3 className="text-xl font-bold text-gray-700">
              {totalItems}
            </h3>
          </div>
          <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
            <FiBarChart2 size={20} />
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
          <FiCheckCircle className="text-green-500" />
          {completedItems} completed
        </div>
      </div>

      {/* Completion Rate */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-600 text-sm font-medium">Completion Rate</p>
            <h3 className="text-xl font-bold text-gray-700">
              {completionRate}%
            </h3>
          </div>
          <div className="p-3 rounded-lg bg-green-50 text-green-600">
            <FiTrendingUp size={20} />
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      </div>

      {/* Streak */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-600 text-sm font-medium">Current Streak</p>
            <h3 className="text-xl font-bold text-gray-700">
              {data.streak} days
            </h3>
          </div>
          <div className="p-3 rounded-lg bg-orange-50 text-orange-600">
            <HiOutlineFire size={20} />
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500 flex items-center gap-1">
            <HiOutlineFire size={16} className="text-gray-400" /> Keep going!
        </p>
      </div>

      {/* Productivity */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-600 text-sm font-medium">Productivity</p>
            <h3 className="text-xl font-bold text-gray-700">
              {data.productivity}%
            </h3>
          </div>
          <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
            <FiUsers size={20} />
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          +14% this week
        </p>
      </div>
    </div>
  );
}
