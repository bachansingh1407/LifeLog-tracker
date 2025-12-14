"use client";

import Link from "next/link";
import { HiMiniCalendar } from "react-icons/hi2";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function EventCalendar() {
    const events = [
        {
            id: "evt_1",
            title: "1:1 with Mentor",
            date: "2025-12-13", // ✅ FIXED
            color: "#7c3aed",
        },
        {
            id: "evt_2",
            title: "Workout Session",
            date: "2025-12-21",
            color: "#16a34a",
        },
        {
            id: "evt_3",
            title: "Project Review – LifeLog",
            date: "2025-12-20",
            color: "#dc2626",
        },
    ];


    return (
        <div className="w-full bg-white rounded-xl border border-gray-200 p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-3 items-center">
                    <span className="text-xl text-purple-500 p-2 bg-purple-100 rounded-md border border-purple-200">
                        <HiMiniCalendar />
                    </span>
                    <h3 className="text-gray-700 text-sm font-semibold">
                        Calendar
                    </h3>
                </div>

                <Link
                    href="/calendar"
                    className="text-xs text-purple-500 hover:underline"
                >
                    View all events
                </Link>
            </div>

            {/* Calendar */}
            <div className="fc-clean">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    // headerToolbar={false} // clean dashboard look
                    height="auto"
                    events={events}
                    selectable
                    dayMaxEventRows={2}
                    editable
                    eventDrop={(info) => {
                        console.log("Event dropped:", {
                            id: info.event.id,
                            newDate: info.event.startStr,
                        });

                        // later: update state or API call
                    }}
                    dateClick={(info) => {
                        console.log("Clicked date:", info.dateStr);
                        // later: open Add Event modal
                    }}
                    eventClick={(info) => {
                        console.log("Clicked event:", info.event);
                        // later: open Edit Event modal
                    }}
                />
            </div>
        </div>
    );
}
