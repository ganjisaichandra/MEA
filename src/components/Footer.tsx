import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLink } from "react-icons/md";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialLinkedin,
} from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import logo from "../assets/images/Ellipse 2.png";
export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-col h-[22rem] overflow-clip bg-black mt-[2rem] p-2">
        <div className="w-full grid grid-cols-2 justify-items-center h-[16.5rem] p-2 items-center">
          <Image src={logo} className="w-[7.5rem] " alt="" />
          <div className="flex flex-col gap-5">
            <p className="text-white font-poppins font-bold tracking-tight">
              CONTACT US
            </p>
            <div className="flex flex-wrap  gap-10">
              <div className="font-poppins font-bold text-[#777777]">
                <p className="items-center  flex gap-2 hover:text-[#FF0000] duration-150">
                  <MdOutlineLink />
                  <a href="https://nitandhra.ac.in/main/">Nit Andhra Pradesh</a>
                </p>

                <p className="inline-flex gap-2 justify-center items-center hover:text-[#FF0000] duration-150">
                  <IoMailOutline />
                  <a href="mailto:mea.nitandhrapradesh@gmail.com">
                    mea.nitandhrapradesh@gmail.com
                  </a>
                </p>
              </div>
              <div className="font-poppins flex flex-col font-bold text-[#777777]">
                <p className="inline-flex items-center hover:text-[#FF0000]">
                  {" "}
                  <IoIosArrowForward size={15} color="#fff" /> FAQ'S
                </p>
                <p className="inline-flex items-center hover:text-[#FF0000]">
                  {" "}
                  <IoIosArrowForward size={15} color="#fff" /> Site Map
                </p>
                <p className="inline-flex items-center hover:text-[#FF0000]">
                  {" "}
                  <IoIosArrowForward size={15} color="#fff" /> Contact Us
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between flex-wrap-reverse gap-5 items-center  w-full p-5">
          <p className="font-poppins text-white font-light text-center w-full md:w-max text-opacity-50 ">
            © Copyright 2024. All Rights Reserved.
          </p>
          <div className="flex text-[0.8rem] font-metrapolis-bold text-white justify-center flex-wrap w-full md:w-max items-center gap-4 ">
            <p className="flex gap-2 items-center hover:text-[#FF0000]">
              <FaInstagram size={15} />{" "}
              <a href="https://www.instagram.com/mea_nitandhra/">INSTAGRAM</a>
            </p>
            {/* <TiSocialInstagram size={25} /> */}
            <p className="flex gap-2 items-center hover:text-[#FF0000]">
              <TiSocialFacebook size={15} /> FACEBOOK
            </p>{" "}
            <p className="flex gap-2 items-center hover:text-[#FF0000]">
              <TiSocialLinkedin size={15} /> LINKED IN
            </p>{" "}
            <p className="flex gap-2 items-center hover:text-[#FF0000]">
              <TiSocialYoutube size={15} /> YOUTUBE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
