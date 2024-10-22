import im from "../../assets/images/Ellipse 1.png";
import im2 from "../../assets/images/Sai Chandra.jpg";
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
    image: im2,
  },
  {
    name: "Maitri chakarabarthy",
    role: "secretory",
    image: im2,
  },
];
const cosec: cosecretory = [
  {
    name: "Bolla Gowtham",
    role: "co-secretory",
    image: im2,
  },
  {
    name: "K Sudheer Reddy ",
    role: "co-secretory",
    image: im2,
  },
  {
    name: "Arya Gajendra Kumar",
    role: "co-secretory",
    image: im2,
  },
  {
    name: "Kotapti Jagadeesh",
    role: "co-secretory",
    image: im,
  },
  {
    name: "Y Dheeraj",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "M Nitish",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "M Sesha Sivani",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "P Rohit ",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "K Vamsi Krishna",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "Sankar",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "G S V Sai Chandra",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "Sahil Rajpoot",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "MD Saif Feroz Ali",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "K Yashwanthini",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "G Shweta",
    role: "Joint secretory",
    image: im,
  },
  {
    name: "Varsha Singh",
    role: "Joint secretory",
    image: im,
  },
];
const exec: executives = [
  {
    name: "Bala Vardhan",
    role: "executive",
    image: im,
  },

  {
    name: "M kavya",
    role: "executive",
    image: im,
  },
  {
    name: "J Deepika",
    role: "executive",
    image: im,
  },
  {
    name: "K Sriya Varshini",
    role: "executive",
    image: im,
  },
  {
    name: "P Shyam Prasad",
    role: "executive",
    image: im,
  },
  {
    name: "Naseer Hussain",
    role: "executive",
    image: im,
  },
  {
    name: "Abhiram Sampath",
    role: "executive",
    image: im,
  },
  {
    name: "Kale Atharva",
    role: "executive",
    image: im,
  },
  {
    name: "Koushik Gupta",
    role: "executive",
    image: im,
  },
  {
    name: "Manu Nikhil",
    role: "executive",
    image: im,
  },
  {
    name: "Jhon Mojes",
    role: "executive",
    image: im,
  },
  {
    name: "Harshil Mehta",
    role: "executive",
    image: im,
  },
  {
    name: "G Vasavi",
    role: "executive",
    image: im,
  },
  {
    name: "G Navya",
    role: "executive",
    image: im,
  },
  {
    name: "Shriya Shukla",
    role: "executive",
    image: im,
  },
  {
    name: "Sanjay B",
    role: "executive",
    image: im,
  },
  {
    name: "Siddhesh Choure",
    role: "executive",
    image: im,
  },
  {
    name: "Shourav Nandan",
    role: "executive",
    image: im,
  },
  {
    name: "Kaif Khan",
    role: "executive",
    image: im,
  },
  {
    name: "Shaswat Shrey",
    role: "executive",
    image: im,
  },
  {
    name: "Amit",
    role: "executive",
    image: im,
  },
  {
    name: "Kothuru Subhash",
    role: "Volunteer",
    image: im,
  },
  {
    name: "Rajesh",
    role: "Volunteer",
    image: im,
  },
  {
    name: "Vivekanad Ohja",
    role: "Volunteer",
    image: im,
  },
  {
    name: "Vinuthna Ronaki",
    role: "Volunteer",
    image: im,
  },
  {
    name: "A Siva Teja Satya Sri",
    role: "Volunteer",
    image: im,
  },
  {
    name: "Arpit Pichkate",
    role: "Volunteer",
    image: im,
  },
  {
    name: "R Rajesh",
    role: "Volunteer",
    image: im,
  },
  {
    name: "Sadaf",
    role: "Volunteer",
    image: im,
  },
  {
    name: "Shivan Kumar Jha",
    role: "Volunteer",
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
              className=" p-4 w-[32rem] min-w-max rounded-lg flex justify-around items-center shadow-xl bg-blue-900 transform hover:-translate-y-2 transition-all duration-300"
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
                className=" p-6 w-[25rem] min-w-max rounded-lg flex justify-around items-center shadow-xl bg-blue-900 transform hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={exe.image}
                  alt={exe.name}
                  width={0}
                  height={0}
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
                className=" p-6 w-[15rem] min-w-max rounded-lg flex flex-col justify-around items-center shadow-xl bg-blue-900 transform hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={exe.image}
                  alt={exe.name}
                  width={0}
                  height={0}
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
