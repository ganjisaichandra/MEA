"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import logo from "../assets/images/Ellipse 1.png";
import { useState, useEffect } from "react";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  useEffect(() => {
    const sideBar: any = document.getElementById("sideBar");
    if (isOpen) {
      sideBar.classList.remove("translate-x-[20rem]");
    } else {
      sideBar.classList.add("translate-x-[20rem]");
    }
  }, [isOpen]);

  return (
    <>
      <div className=" w-full z-10 sticky top-[1.5rem] flex justify-center items-center">
        <div className=" bg-white/50 backdrop-filter backdrop-blur-md rounded-xl  h-[5rem] w-[95%] items-center flex justify-between lg:pl-[5rem] lg:pr-[5rem]">
          <div>
            <Image src={logo} alt="" className="w-[4rem]" />
          </div>
          <ul className="hidden lg:flex gap-6 font-metrapolis-light justify-around">
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
          <button className="bg-[#7D7D7D] hidden lg:inline-flex justify-center items-center rounded-[2rem] h-[3rem] w-[6.5rem] text-white">
            E-Library
          </button>
          {/* </div> */}
          {/* <div> */}
          {/*   <p className="font-metrapolis-semibold text-[0.8rem]"> */}
          {/*     Mechanical Engineering Association */}
          {/*   </p> */}
          {/* </div> */}
          <div
            className="flex lg:hidden group flex-col justify-center h-full  gap-[0.5rem] pr-2"
            onClick={() => setIsOpen(true)}
          >
            <div className="duration-150 w-[2rem] h-[0.15rem] rounded-lg bg-black"></div>
            <div className="duration-150 w-[1.5rem] group-hover:bg-blue-600 h-[0.15rem] rounded-lg bg-black"></div>
            <div className="duration-150 w-[2rem] group-hover:w-[1rem] h-[0.15rem] rounded-lg bg-black group-hover:bg-red-500"></div>
          </div>
        </div>
      </div>
      <div
        id="sideBar"
        className="w-[20rem] translate-x-[20rem] h-[100vh] bg-black fixed top-0 right-0  flex lg:hidden transform-all duration-150 z-20"
      >
        <ul className=" text-white h-full w-full flex-col flex justify-center gap-2 items-center  text-[1.5rem] font-medium">
          <li>
            <IoIosClose
              onClick={() => setIsOpen(false)}
              size={60}
              className="top-5 hover:rotate-90 duration-[500ms] right-2 text-white hover:text-tedred absolute"
            />
          </li>
          <li className="side-link">
            <Link href="/">HOME</Link>
          </li>
          <li className="side-link">
            <Link href="/Faculty">FACULTY</Link>
          </li>
          <li className="side-link">
            <Link href="/Events">EVENTS</Link>
          </li>
          <li className="side-link">
            <Link href="/Magazine">MAGAZINE</Link>
          </li>
          <li className="side-link">
            <Link href="/About">ABOUT</Link>
          </li>
          <li className="side-link">
            <Link href="/Executives">EXECUTIVES</Link>
          </li>
          <button className="bg-[#7D7D7D]  rounded-[2rem] h-[3rem] w-[60%] text-white">
            E-Library
          </button>
        </ul>
      </div>
    </>
  );
}
