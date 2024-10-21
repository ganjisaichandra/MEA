import im from "../../assets/images/Ellipse 1.png";
import React from "react";
import Image, { StaticImageData } from "next/image";
type secretory = {
  name: string;
  role: string;
  image: StaticImageData | string;
}[];
type cosecretory = {
  name: string;
  role: string;
  image: StaticImageData | string;
}[];
type executives = {
  name: string;
  role: string;
  image: StaticImageData | string;
}[];
const sec: secretory = [
  {
    name: "Viswanadha Reddy",
    role: "secretory",
    image: im,
  },
  {
    name: "NA",
    role: "secretory",
    image: im,
  },
];
const cosec: cosecretory = [
  {
    name: "NA",
    role: "co-secretory",
    image: im,
  },
];
const exec: executives = [
  {
    name: "NA",
    role: "executive",
    image: im,
  },
  {
    name: "NA",
    role: "executive",
    image: im,
  },
];
const page = () => {
  return (
    <div className=" min-h-screen relative p-4 mb-20">
      <div className="flex  min-h-screen w-full relative justify-center ">
        <div className="flex justify-around items-center w-full flex-wrap gap-8 ">
          {sec.map((exe, index) => (
            <div
              key={index}
              className=" p-6 w-[30rem] min-w-max rounded-lg flex justify-around items-center shadow-xl bg-blue-900 transform hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={exe.image}
                alt={exe.name}
                width={0}
                height={0}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-black filter brightness-110 contrast-125"
              />
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-2 text-center text-white">
                  {exe.name}
                </h3>
                <p className="text-xl font-metrapolis-bold mb-4 text-center text-white">
                  {exe.role}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-around items-center w-full flex-wrap gap-8 ">
            {cosec.map((exe, index) => (
              <div
                key={index}
                className=" p-6 w-[30rem] min-w-max rounded-lg flex justify-around items-center shadow-xl bg-blue-900 transform hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={exe.image}
                  alt={exe.name}
                  width={12}
                  height={12}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-black"
                />
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2 text-center text-white">
                    {exe.name}
                  </h3>
                  <p className="text-xl font-metrapolis-bold mb-4 text-center text-white">
                    {exe.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-around items-center w-full flex-wrap gap-8 ">
            {exec.map((exe, index) => (
              <div
                key={index}
                className=" p-6 w-[30rem] min-w-max rounded-lg flex flex-col justify-around items-center shadow-xl bg-blue-900 transform hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={exe.image}
                  alt={exe.name}
                  width={12}
                  height={12}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-black"
                />
                <h3 className="text-lg font-semibold mb-2 text-center text-white">
                  {exe.name}
                </h3>
                <p className="text-xl font-metrapolis-bold mb-4 text-center text-white">
                  {exe.role}
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
