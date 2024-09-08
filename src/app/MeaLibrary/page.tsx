import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className="flex h-[100vh] flex-col min-h-[30rem] justify-center items-center gap-[5rem]">
        <p className="font-metrapolis-bold text-[1.5rem] sm:text-[3rem]">
          MEA LIBRARY
        </p>
        <div className="w-full flex flex-wrap justify-center  items-center gap-[3rem]">
          <Link href={""}>
            <button className="w-[8rem] font-metrapolis-bold border-black border-[0.15rem] rounded-md p-2 sm:text-[1.5rem] hover:bg-blue-900 hover:text-white hover:scale-95">
              1st Year
            </button>
          </Link>
          <Link href={""}>
            <button className="w-[8rem] font-metrapolis-bold border-black border-[0.15rem] rounded-md p-2 sm:text-[1.5rem] hover:bg-blue-900 hover:text-white hover:scale-95">
              2nd Year
            </button>
          </Link>
          <Link href={""}>
            <button className="w-[8rem] font-metrapolis-bold border-black border-[0.15rem] rounded-md p-2 sm:text-[1.5rem] hover:bg-blue-900 hover:text-white hover:scale-95">
              3rd Year
            </button>
          </Link>
          <Link href={""}>
            <button className="w-[8rem] font-metrapolis-bold border-black border-[0.15rem] rounded-md p-2 sm:text-[1.5rem] hover:bg-blue-900 hover:text-white hover:scale-95">
              4th Year
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
