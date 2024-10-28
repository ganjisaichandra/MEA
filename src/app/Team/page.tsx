"use client";
import React from "react";
import im from "../../assets/images/Sai Chandra.jpg";
import im2 from "../../assets/images/hymavathi.jpg";
import im3 from "../../assets/images/Veeresh Kumar G B.jpg";
import Image, { StaticImageData } from "next/image";
type facultyDataType = {
  name: string;
  designation: string;
  pic: StaticImageData | string;
}[];

const facultyData: facultyDataType = [
  {
    name: "Sai Chandra Ganji",
    designation: "Design & Development",
    pic: im,
  },
  {
    name: "ASMD Nayeem",
    designation: "Developement",
    pic: im2,
  },

  {
    name: "Ganesh Talatam",
    designation: "Development",
    pic: im3,
  },
];

const page = () => {
  return (
    <div className=" min-h-screen Text-align-center relative p-4 mb-20">
      <div className="flex  min-h-screen Text-align-center relative justify-center ">
        <div className="w-full p-5">
          <p className=" text-[2rem] sm:text-[3rem] Text-align-center font-metrapolis-light">
            {" "}
            Design and Development Team
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.map((faculty, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={faculty.pic}
                  alt={faculty.name}
                  width={0}
                  height={0}
                  className="w-20 h-20 object-fit rounded-full mx-auto mb-4 border-4 border-black"
                />
                <h3 className="text-xl font-semibold mb-2 text-center text-black">
                  {faculty.name}
                </h3>
                <p className="text-sm italic mb-4 text-center text-black">
                  {faculty.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
