import Link from "next/link";
import { FaRegChartBar } from "react-icons/fa6";

const weeklyData = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 65 },
  { day: "Thu", value: 75, today: true },
  { day: "Fri", value: 50 },
  { day: "Sat", value: 90 },
  { day: "Sun", value: 45 },
];

export default function WeeklyProgress() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3 items-center">
          <span className="text-xl text-purple-500 bg-purple-100 rounded-md border border-purple-200 p-2">
            <FaRegChartBar />
          </span>
          <h3 className="text-gray-700 text-sm font-semibold">
            Weekly Progress Overview
          </h3>
        </div>

        <Link href="/" className="text-xs text-purple-500 hover:underline">
          View detailed analytics
        </Link>
      </div>

      {/* Chart */}
      <div className="grid grid-cols-7 gap-4 items-end h-40">
        {weeklyData.map((item) => (
          <div key={item.day} className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">
              {item.day}
            </span>

            <div className="relative flex items-end h-28 w-full justify-center">
              {/* Tooltip */}
              {item.today && (
                <span className="absolute -top-7 bg-purple-600 text-white text-xs px-2 py-0.5 rounded">
                  Today
                </span>
              )}

              {/* Bar */}
              <div
                className={`w-10 rounded-t-lg transition-all ${
                  item.today ? "bg-purple-500" : "bg-gray-300"
                }`}
                style={{ height: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-gray-100 flex justify-between text-sm">
        <span className="text-gray-600">
          Productivity score this week:{" "}
          <strong className="text-gray-800">65%</strong>
        </span>
        <span className="text-green-600 font-medium">
          ↑ 12% from last week
        </span>
      </div>
    </div>
  );
}
