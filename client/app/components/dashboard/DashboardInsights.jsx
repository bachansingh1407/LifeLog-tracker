
import Link from "next/link";
import { MdTaskAlt } from "react-icons/md";
import { HiMiniCalendar } from "react-icons/hi2";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoFlag } from "react-icons/io5";
export default function DashboardInsights() {

    const todayTasks = [
        {
            id: "task_001",
            title: "Complete LifeLog dashboard UI",
            description: "Finish insights, events, and tasks widgets",
            status: "pending", // pending | completed
            priority: "high",  // high | medium | low
            dueDate: "2025-01-18",
            dueTime: "11:00 AM",
            category: "Work",
            estimatedTime: "2h",
        },
        {
            id: "task_002",
            title: "Review backend API structure",
            description: "Check folder structure and naming conventions",
            status: "completed",
            priority: "medium",
            dueDate: "2025-01-18",
            dueTime: "01:00 PM",
            category: "Development",
            estimatedTime: "1h",
        },
        {
            id: "task_003",
            title: "Write daily reflection",
            description: "Log today’s thoughts and learnings",
            status: "pending",
            priority: "low",
            dueDate: "2025-01-18",
            dueTime: "09:00 PM",
            category: "Personal",
            estimatedTime: "15m",
        },
        {
            id: "task_004",
            title: "Workout session",
            description: "Strength training and cardio",
            status: "pending",
            priority: "medium",
            dueDate: "2025-01-18",
            dueTime: "07:00 AM",
            category: "Health",
            estimatedTime: "1h",
        },
        {
            id: "task_005",
            title: "Read system design article",
            description: "Scalability patterns in Node.js apps",
            status: "completed",
            priority: "low",
            dueDate: "2025-01-18",
            dueTime: "10:00 AM",
            category: "Learning",
            estimatedTime: "30m",
        },
        {
            id: "task_006",
            title: "Prepare meeting notes",
            description: "Talking points for mentor session",
            status: "pending",
            priority: "high",
            dueDate: "2025-01-18",
            dueTime: "10:00 AM",
            category: "Work",
            estimatedTime: "20m",
        },
        {
            id: "task_007",
            title: "Clean GitHub README",
            description: "Improve project documentation clarity",
            status: "pending",
            priority: "medium",
            dueDate: "2025-01-18",
            dueTime: "04:00 PM",
            category: "Development",
            estimatedTime: "45m",
        },
        {
            id: "task_008",
            title: "Evening walk",
            description: "30-minute walk for mental clarity",
            status: "pending",
            priority: "low",
            dueDate: "2025-01-18",
            dueTime: "06:30 PM",
            category: "Health",
            estimatedTime: "30m",
        },
        {
            id: "task_009",
            title: "Plan tomorrow’s tasks",
            description: "Outline goals for the next day",
            status: "pending",
            priority: "medium",
            dueDate: "2025-01-18",
            dueTime: "09:30 PM",
            category: "Planning",
            estimatedTime: "20m",
        },
        {
            id: "task_010",
            title: "Check emails & messages",
            description: "Respond to important communications",
            status: "completed",
            priority: "low",
            dueDate: "2025-01-18",
            dueTime: "08:30 AM",
            category: "Admin",
            estimatedTime: "15m",
        },
    ];

    const upcomingEvents = [
        {
            id: "evt_001",
            title: "1:1 with Mentor",
            type: "meeting",
            date: "2025-01-18",
            time: "10:30 AM",
            location: "Google Meet",
            priority: "high",
        },
        {
            id: "evt_002",
            title: "Weekly Planning Session",
            type: "personal",
            date: "2025-01-19",
            time: "08:00 AM",
            location: "Personal",
            priority: "medium",
        },
        {
            id: "evt_003",
            title: "Project Review – LifeLog",
            type: "work",
            date: "2025-01-20",
            time: "06:00 PM",
            location: "Zoom",
            priority: "high",
        },
        {
            id: "evt_004",
            title: "Workout Session",
            type: "health",
            date: "2025-01-21",
            time: "07:00 AM",
            location: "Gym",
            priority: "low",
        },
        

    ];
    const pendingCount = todayTasks.filter(task => task.status === "pending").length;
    // const completedCount = todayTasks.filter(task => task.status === "completed").length;

    return (
        <div className="flex justify-between gap-6 h-110">

            {/* TODO Component */}
            <div className="flex-1 bg-white border border-gray-200 rounded-xl flex flex-col min-h-0">
                {/* Header */}
                <div className="flex justify-between items-center gap-2 p-4 border-b border-gray-100">
                    <div className="flex gap-2 items-center">
                        <span className="text-2xl text-purple-500 bg-purple-100 rounded-md border border-purple-200 p-2">
                            <MdTaskAlt />
                        </span>
                        <div className="flex flex-col">
                            <h3 className="text-gray-600 text-sm font-semibold">
                                Today's Tasks
                            </h3>
                            <p className="text-gray-400 text-xs">
                                {todayTasks.length} Tasks Today |{" "}
                                <span className="text-purple-500 font-medium">
                                    {pendingCount} Pending
                                </span>
                            </p>
                        </div>
                    </div>
                    <Link href="/" className="text-xs text-purple-500 hover:underline">
                        View All Tasks
                    </Link>
                </div>

                {/* Scroll Area */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-300">
                    {todayTasks.map((task) => (
                        <div
                            key={task.id}
                            className="flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition border border-gray-200"
                        >
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-semibold text-gray-700">
                                        {task.title}
                                    </h4>

                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">{task.dueTime}</span>
                                        <IoFlag
                                            size={14}
                                            className={
                                                task.priority === "high"
                                                    ? "text-red-500"
                                                    : task.priority === "medium"
                                                        ? "text-yellow-500"
                                                        : "text-gray-400"
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                                    {task.status === "pending" && (
                                        <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-600 border border-purple-200 text-[11px] font-medium">
                                            Pending
                                        </span>
                                    )}
                                    <span>•</span>
                                    <span>{task.category}</span>
                                    <span>•</span>
                                    <span>{task.estimatedTime}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Events List */}
            <div className="w-[360px] bg-white border border-gray-200 rounded-xl flex flex-col min-h-0">
                {/* Header */}
                <div className="flex justify-between items-center gap-2 p-4 border-b border-gray-100">
                    <div className="flex gap-2 items-center">
                        <span className="text-2xl text-purple-500 p-2 bg-purple-100 rounded-md border border-purple-200">
                            <HiMiniCalendar />
                        </span>
                        <div className="flex flex-col">
                            <h3 className="text-gray-600 text-sm font-semibold">
                                Upcoming Events
                            </h3>
                            <span className="text-gray-400 text-xs">Today's schedule</span>
                        </div>
                    </div>
                    <Link href="/" className="text-xs text-purple-500 hover:underline">
                        View Calendar
                    </Link>
                </div>

                {/* Scroll Area */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-300">
                    {upcomingEvents.map((event) => (
                        <div
                            key={event.id}
                            className="flex gap-4 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"
                        >
                            <div className="flex flex-col items-center justify-center min-w-[48px] rounded-md bg-white border border-gray-200 text-center">
                                <span className="text-xs text-gray-500">
                                    {new Date(event.date).toLocaleString("en-US", { month: "short" })}
                                </span>
                                <span className="text-lg font-semibold text-gray-800">
                                    {new Date(event.date).getDate()}
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-semibold text-gray-700">
                                        {event.title}
                                    </h4>
                                    <span
                                        className={`h-2 w-2 rounded-full mt-1 ${event.priority === "high"
                                                ? "bg-red-500"
                                                : event.priority === "medium"
                                                    ? "bg-yellow-400"
                                                    : "bg-green-500"
                                            }`}
                                    />
                                </div>

                                <div className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                                    <span>{event.time}</span>
                                    <span>•</span>
                                    <span className="text-gray-800">{event.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}