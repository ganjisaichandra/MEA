import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo final mea 1.png";
export default function page() {
  return (
    <>
      <div className="w-full h-[45rem] p-10 flex justify-around gap-2 flex-wrap md:flex-nowrap items-center">
        <div className="md:w-1/4">
          <Image src={logo} alt="" className="scale-90 " />
        </div>
        <div className="flex md:w-3/4 justify-start items-start">
          <p className="font-poppins text-justify text-[#777777]  md:text-[1.3rem] text-[1.2rem]">
            MEA is an organization solely focused on creating and sustaining a
            community of students that encourage thought and learning through
            interaction with fellow students giving them technical knowledge and
            experience by Conducting events, trips, workshops for whole year.
            Every year we organize MECHANICA to provide a platform to tech
            enthusiasts, explorers, and entrepreneurs, where they can showcase
            their products, knowledge and technical skills by solving challenges
            or problems, learn new skills, exchange ideas with each other in
            different events and workshops. It also enables students to explore
            new frontiers in technical through a plethora of services MECHANICA
            has to offer.
          </p>{" "}
        </div>
      </div>
    </>
  );
}
