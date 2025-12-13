'use client';

import { useState } from 'react';
import { 
  FiFileText, 
  FiCalendar, 
  FiLightbulb, 
  FiCheckSquare,
  FiTrendingUp,
  FiClock,
  FiChevronRight,
  FiPlus,
  FiBell,
  FiSearchSS
} from 'react-icons/fi';

export default function Home() {
  const [stats, setStats] = useState({
    notes: { total: 12, pending: 5, done: 7 },
    events: { total: 8, upcoming: 5, past: 3 },
    ideas: { total: 15, active: 10, archived: 5 },
    tasks: { total: 18, pending: 7, inProgress: 6, done: 5 }
  });

  const recentActivities = [
    { id: 1, type: 'task', title: 'Design homepage', time: '10 min ago', completed: true },
    { id: 2, type: 'meeting', title: 'Team sync', time: '1 hour ago', completed: false },
    { id: 3, type: 'note', title: 'Project ideas', time: '2 hours ago', completed: true },
    { id: 4, type: 'idea', title: 'AI features', time: '3 hours ago', completed: false },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Design Review', time: '10:00 AM', date: 'Today', type: 'work' },
    { id: 2, title: 'Lunch with Team', time: '1:00 PM', date: 'Today', type: 'personal' },
    { id: 3, title: 'Client Meeting', time: '3:30 PM', date: 'Tomorrow', type: 'work' },
  ];

  return (
    <div className="font-poppins bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 min-h-screen">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-light text-gray-800">Welcome back, <span className="font-semibold">Alex!</span> 👋</h1>
          <p className="text-sm md:text-base text-gray-500 mt-2">Here's what's happening with your productivity today</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="relative hidden md:block">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes, tasks..."
              className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="p-2 hover:bg-white rounded-xl relative transition-all">
            <FiBell className="text-gray-600 text-lg" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-gray-200">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
              A
            </div>
            <span className="hidden md:inline font-medium text-gray-700">Alex</span>
            <FiChevronRight className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {/* Notes Card */}
        <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-5 md:p-6 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <FiFileText className="text-blue-500 text-xl" />
            </div>
            <div className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
              <FiTrendingUp className="text-xs" />
              <span>+12%</span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-2 mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{stats.notes.total}</h2>
            <span className="text-gray-500 text-sm">Notes</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-gray-600">{stats.notes.pending} Pending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-600">{stats.notes.done} Done</span>
            </div>
          </div>
          
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(stats.notes.done / stats.notes.total) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Events Card */}
        <div className="group bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 p-5 md:p-6 hover:shadow-lg hover:shadow-amber-100 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <FiCalendar className="text-amber-500 text-xl" />
            </div>
            <div className="flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
              <FiClock className="text-xs" />
              <span>Today</span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-2 mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{stats.events.total}</h2>
            <span className="text-gray-500 text-sm">Events</span>
          </div>
          
          <div className="text-sm text-gray-600 mb-3">
            <span className="font-medium text-amber-600">{stats.events.upcoming} Upcoming</span> this week
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D'].map((initial, index) => (
                <div 
                  key={index}
                  className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                >
                  {initial}
                </div>
              ))}
            </div>
            <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1">
              View all <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Ideas Card */}
        <div className="group bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 p-5 md:p-6 hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <FiLightbulb className="text-purple-500 text-xl" />
            </div>
            <div className="text-xs text-purple-700 font-medium px-2 py-1 bg-purple-100 rounded-full">
              Creative
            </div>
          </div>
          
          <div className="flex items-baseline gap-2 mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{stats.ideas.total}</h2>
            <span className="text-gray-500 text-sm">Ideas</span>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-purple-600">{stats.ideas.active}</span>
              <span className="text-xs text-gray-500">Active</span>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-600">{stats.ideas.archived}</span>
              <span className="text-xs text-gray-500">Archived</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['UI', 'AI', 'Web3', 'Mobile'].map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tasks Card */}
        <div className="group bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100 p-5 md:p-6 hover:shadow-lg hover:shadow-cyan-100 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <FiCheckSquare className="text-cyan-500 text-xl" />
            </div>
            <div className="flex items-center gap-1 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
              <span>Urgent: {stats.tasks.pending}</span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-2 mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{stats.tasks.total}</h2>
            <span className="text-gray-500 text-sm">Tasks</span>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">In Progress</span>
              <span className="font-medium text-cyan-600">{stats.tasks.inProgress}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Pending</span>
              <span className="font-medium text-amber-600">{stats.tasks.pending}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Completed</span>
              <span className="font-medium text-green-600">{stats.tasks.done}</span>
            </div>
          </div>
          
          <button className="w-full mt-4 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-medium hover:shadow-md hover:shadow-cyan-200 transition-all flex items-center justify-center gap-2">
            <FiPlus /> Add Task
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Recent Activity</h3>
            <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1">
              View all <FiChevronRight />
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div 
                key={activity.id}
                className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  activity.type === 'task' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'meeting' ? 'bg-amber-100 text-amber-600' :
                  activity.type === 'note' ? 'bg-green-100 text-green-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {activity.type === 'task' && <FiCheckSquare />}
                  {activity.type === 'meeting' && <FiCalendar />}
                  {activity.type === 'note' && <FiFileText />}
                  {activity.type === 'idea' && <FiLightbulb />}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{activity.title}</h4>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                
                <div className={`w-3 h-3 rounded-full ${
                  activity.completed ? 'bg-green-500' : 'bg-amber-500'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl text-white p-5 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg md:text-xl font-semibold">Upcoming Events</h3>
            <button className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-1">
              View calendar <FiChevronRight />
            </button>
          </div>
          
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{event.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    event.type === 'work' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-300">
                    <FiClock className="text-sm" />
                    <span className="text-sm">{event.time} • {event.date}</span>
                  </div>
                  
                  <button className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-colors">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick Add Section */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center gap-3">
              <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <FiPlus /> Add Event
              </button>
              <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center gap-2 transition-all">
                <FiPlus /> Quick Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-gray-800">Daily Productivity</h4>
            <p className="text-sm text-gray-600">You're doing great! Keep it up 💪</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4h 20m</div>
              <div className="text-xs text-gray-500">Focus Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">12/18</div>
              <div className="text-xs text-gray-500">Tasks Done</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-xs text-gray-500">Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}