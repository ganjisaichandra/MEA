"use client";
import React from "react";
import im from "../../assets/images/Ellipse 1.png";
import Image, { StaticImageData } from "next/image";
type facultyDataType = {
  name: string;
  designation: string;
  pic: StaticImageData | string;
}[];

const facultyData: facultyDataType = [
  {
    name: "NA",
    designation: "NA",
    pic: im,
  },
  {
    name: "NA",
    designation: "NA",
    pic: im,
  },

  {
    name: "NA",
    designation: "NA",
    pic: im,
  },
];

const page = () => {
  return (
    <div className=" text-white min-h-screen relative p-4">
      <div className="flex flex-col sm:flex-row min-h-screen relative justify-center top-20">
        <div className="w-full p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.map((faculty, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={faculty.pic}
                  alt={faculty.name}
                  width={12}
                  height={12}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-black"
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
