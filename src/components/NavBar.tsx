import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assets/images/Ellipse 1.png";
export default function NavBar() {
  return (
    <>
      <div className="hidden w-full z-10 sticky top-[1.5rem] sm:flex justify-center items-center">
        <div className=" bg-white/50 backdrop-filter backdrop-blur-md rounded-xl  h-[5rem] w-[95%] items-center flex justify-between pl-[5rem] pr-[5rem]">
          <div>
            <Image src={logo} alt="" className="w-[4rem]" />
          </div>
          <ul className="flex gap-6 font-metrapolis-light justify-around">
            <Link href={"/"}>
              {" "}
              <li>HOME</li>{" "}
            </Link>
            <Link href={"/Faculty"}>
              {" "}
              <li>FACULTY</li>
            </Link>
            <Link href={"/Events"}>
              {" "}
              <li>EVENTS</li>
            </Link>
            <Link href={"/Magazine"}>
              {" "}
              <li>MAGAZINE</li>
            </Link>
            <Link href={"/About"}>
              {" "}
              <li>ABOUT</li>
            </Link>
            <Link href={"/Executives"}>
              {" "}
              <li>EXECUTIVES</li>
            </Link>
          </ul>
          {/* <div> */}
          <button className="bg-[#7D7D7D] textt-white rounded-[2rem] h-[3rem] w-[6.5rem] text-white">
            E-Library
          </button>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
