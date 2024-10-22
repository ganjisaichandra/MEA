import React from "react";
import EventCards from "@/components/EventCards";
import { StaticImageData } from "next/image";
type eventCards = {
  image: string | StaticImageData;
  link: string;
  venue: string;
  date: string;
  time: string;
  name: string;
}[];
import im from "../../assets/images/GC Tech Odyssey.jpg";

const cards: eventCards = [
  {
    image: im,
    link: " ",
    venue: "KalaBharathi",
    date: "23/2/2024",
    time: "11:00AM",
    name: "Hello",
  },
  {
    image: im,
    link: " ",
    venue: "KalaBharathi",
    date: "23/2/2024",
    time: "11:00AM",
    name: "Hello",
  },
  {
    image: im,
    link: " ",
    venue: "KalaBharathi",
    date: "23/2/2024",
    time: "11:00AM",
    name: "Hello",
  },
  {
    image: im,
    link: " ",
    venue: "KalaBharathi",
    date: "23/2/2024",
    time: "11:00AM",
    name: "Hello",
  },
  {
    image: im,
    link: " ",
    venue: "KalaBharathi",
    date: "23/2/2024",
    time: "11:00AM",
    name: "Hello",
  },
];

export default function Page() {
  return (
    <div className="group flex flex-col justify-center items-center w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-[90%] md:w-[80%] p-5  flex  ${
            index % 2 === 1 ? "justify-end" : "justify-start"
          }`}
        >
          <EventCards {...card} index={index} />
        </div>
      ))}
    </div>
  );
}
