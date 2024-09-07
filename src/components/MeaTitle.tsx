import React from "react";

export default function MeaTitle() {
  return (
    <>
      <div className="gap-5 text-[3rem] flex font-metrapolis-semibold justify-center items-center w-full h-[100vh]">
        <p className="">MECHANICAL ENGINEERING </p>
        <div className=" h-[4.5rem] overflow-clip">
          <div className=" inset-0 animate-rotateText">
            <p className="text-black h-[4.5rem] flex items-center justify-center">
              ASSOCIATION
            </p>{" "}
            <p className="text-red-500 h-[4.5rem] flex items-center justify-center">
              ASSOCIATION
            </p>
            <p className="text-blue-600 h-[4.5rem] flex items-center justify-center">
              ASSOCIATION
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
