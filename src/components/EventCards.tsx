import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Image from "next/image";
type eventCard = {
  index: Number | any;
  image: string | StaticImageData;
  link: string;
  venue: string;
  date: string;
  time: string;
  name: string;
};

export default function EventCards(card: eventCard) {
  return (
    <>
      <div className="w-1/2 relative min-w-[18rem] bg-[#606060] h-[12rem] min-h-max p-6  rounded-md shadow-xl">
        <div
          className={`absolute w-[2rem] h-full  flex items-center rounded-full  shadow-xl top-0 ${card.index % 2 === 1 ? "left-0" : "right-0"}`}
        >
          <div
            className={`w-[2rem] h-[2rem] bg-black border-[0.3rem] border-white  rounded-full ${card.index % 2 == 1 ? "-translate-x-3" : "translate-x-3"}`}
          ></div>
        </div>
        <div className="bg-[#D9D9D9] w-full h-full min-h-max flex rounded-md gap-2 justify-around items-center">
          <Image
            src={card.image}
            alt={card.name}
            className="w-[5rem] h-[5rem]"
          />
          <div className="flex  flex-col text-[0.8rem] font-metrapolis-light min-h-max">
            <p className="w-full mb-2 text-center text-[1rem] font-metrapolis-semibold">
              {card.name}
            </p>
            <p className="w-full text-left ">Venue:{card.venue}</p>
            <p className="w-full text-left ">Date:{card.date}</p>
            <p className="w-full text-left ">Time:{card.time}</p>
            <Link
              href={card.link}
              // className="inline-flex justify-center"
              target="_blank"
            >
              <button className="w-max mt-3 bg-[#FFFFFF] p-1 font-metrapolis-semibold rounded-lg">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
