import React from "react";

export default function MeaTitle() {
  return (
    <>
      <div className="sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem] gap-1 sm:gap-2 flex flex-wrap font-metrapolis-semibold justify-center items-center w-full h-[90vh] min-h-[40rem]">
        <p className="">MECHANICAL </p>
        <p> ENGINEERING </p>
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
