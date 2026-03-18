"use client";

import { useState } from "react";

const slots = [
  { time: "8:00", ampm: "am", period: "Platinum" },
  { time: "9:00", ampm: "am", period: "Platinum" },
  { time: "10:00", ampm: "am", period: "Morning" },
  { time: "11:00", ampm: "am", period: "Morning" },
  { time: "12:00", ampm: "am", period: "Midday" },
  { time: "1:00", ampm: "pm", period: "Afternoon" },
  { time: "2:00", ampm: "pm", period: "Afternoon" },
  { time: "3:00", ampm: "pm", period: "Afternoon" },
  { time: "4:00", ampm: "pm", period: "Evening" },
  { time: "5:00", ampm: "pm", period: "Evening" },
];

export default function PoolTimeSlots() {
  const [activeSlot, setActiveSlot] = useState<number>(1);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3" id="timeSlots">
      {slots.map((slot, i) => (
        <button
          key={i}
          onClick={() => setActiveSlot(i)}
          className={`time-slot rounded-[20px] py-5 flex flex-col items-center gap-2 ${activeSlot === i ? "selected" : ""}`}
        >
          <span className="text-[18px] font-semibold">{slot.time} {slot.ampm}</span>
          <span className="text-[15px] capitalize">{slot.period}</span>
        </button>
      ))}
    </div>
  );
}
