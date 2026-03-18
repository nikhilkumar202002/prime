"use client";

import { useState } from "react";

const slots = [
  { time: "8:00", ampm: "am", period: "morning" },
  { time: "9:00", ampm: "am", period: "morning" },
  { time: "10:00", ampm: "am", period: "morning" },
  { time: "11:00", ampm: "am", period: "morning" },
  { time: "12:00", ampm: "am", period: "midday" },
  { time: "1:00", ampm: "pm", period: "afternoon" },
  { time: "2:00", ampm: "pm", period: "afternoon" },
  { time: "3:00", ampm: "pm", period: "afternoon" },
  { time: "4:00", ampm: "pm", period: "evening" },
  { time: "5:00", ampm: "pm", period: "evening" },
];

export default function SpaTimeSlots() {
  const [activeSlot, setActiveSlot] = useState<number>(1);

  return (
    <>
      <p className="text-[22px] capitalize leading-[1.2] mb-5">Available Slots</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
        {slots.slice(0, 5).map((slot, i) => (
          <button
            key={i}
            onClick={() => setActiveSlot(i)}
            className={`rounded-[20px] flex flex-col items-center justify-center gap-3 py-6 ${activeSlot === i ? "bg-black text-white" : "bg-white text-black"}`}
          >
            <span className="text-[22px] font-semibold leading-[1.2]">
              {slot.time} <span className="lowercase">{slot.ampm}</span>
            </span>
            <span className="text-[20px] leading-[1.2] capitalize">{slot.period}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {slots.slice(5, 10).map((slot, i) => (
          <button
            key={i + 5}
            onClick={() => setActiveSlot(i + 5)}
            className={`rounded-[20px] flex flex-col items-center justify-center gap-3 py-6 ${activeSlot === i + 5 ? "bg-black text-white" : "bg-white text-black"}`}
          >
            <span className="text-[22px] font-semibold leading-[1.2]">
              {slot.time} <span className="lowercase">{slot.ampm}</span>
            </span>
            <span className="text-[20px] leading-[1.2] capitalize">{slot.period}</span>
          </button>
        ))}
      </div>
    </>
  );
}
