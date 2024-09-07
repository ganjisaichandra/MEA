import React from "react";

export default function Gallery() {
  return (
    <>
      <div className="w-full mt-[3rem] p-8 flex-col gap-5 flex justify-center items-start">
        {/* <div className="w-full flex p-8 flex-col gap-5 "> */}
        <div className="font-metrapolis-semibold text-[3rem] ">
          <span className="w-[10rem] text-wrap"> GALLERY</span>
        </div>
        <div className="flex w-full h-[25rem]  items-center gap-5 justify-around">
          <div className="bg-black/80 rounded-xl w-full h-[20rem]"></div>
          <div className="bg-black/80 w-full h-[20rem] rounded-xl"></div>
        </div>
      </div>
      {/* </div>{" "} */}
    </>
  );
}
