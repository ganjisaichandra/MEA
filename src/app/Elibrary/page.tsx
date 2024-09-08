import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
export default function page() {
  return (
    <>
      <div className=" font-metrapolis-semibold min-h-max h-[30rem] flex md:gap-5 md:justify-around justify-center flex-col gap-[5rem] md:flex-row items-center flex-wrap">
        <button className="bg-[#848484] relative w-[20rem] h-[3rem] group">
          <p className="group-hover:text-white duration-150">
            {" "}
            National Digital Library
          </p>
          <IoIosArrowForward
            size={25}
            className="absolute right-4 top-3 text-[#848484] group-hover:text-white duration-150"
          />
        </button>
        <Link href={"/MeaLibrary"}>
          <button className="bg-[#848484] relative w-[20rem] h-[3rem] group">
            <p className="group-hover:text-white duration-150">MEA Library </p>{" "}
            <IoIosArrowForward
              size={25}
              className="absolute right-4 top-3 text-[#848484] group-hover:text-white duration-150"
            />
          </button>
        </Link>
      </div>
      ;
    </>
  );
}
