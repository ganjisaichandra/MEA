import Image from "next/image";
import FacultyS from "@/components/FacultyS";
import home from "../assets/images/unsplash_Rj5OIPWEmCE.png";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import Gallery from "@/components/Gallery";
import Ddt from "@/components/Ddt";
import MeaTitle from "@/components/MeaTitle";
export default function Home() {
  return (
    <>
      <MeaTitle />
      <div className="w-full flex items-center justify-around h-[100vh]">
        <div className="flex justify-center gap-5 w-1/2 flex-col">
          <p className="text-[2rem] font-metrapolis-semibold">
            Mechanical Engineering Association
          </p>
          <p className="text-[#777777] font-poppins text-justify">
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
          </p>
          <div className="colbar w-full h-[2rem] animate-colchange  rounded-full"></div>
          <div className="flex justify-between font-bold w-full items-center">
            <button className="bg-black p-2 rounded-xl  text-[0.8rem]  text-white ">
              <p className="w-[8rem] inline-block">GET IN TOUCH</p>
            </button>
            <p>FOLLOW US</p>
            <div className="flex justify-center items-center gap-3">
              <FaInstagram size={25} className="social-link" />
              {/* <TiSocialInstagram size={25} /> */}
              <TiSocialFacebook size={25} className="social-link" />
              <TiSocialLinkedin size={25} className="social-link" />
              <TiSocialYoutube size={25} className="social-link" />
            </div>
          </div>
        </div>
        <div>
          <Image src={home} alt="" />
        </div>
      </div>

      <div className="w-full h-[15rem]  flex justify-center items-center">
        <div className="w-[95%] h-full grid grid-cols-3 justify-between gap-5 p-8 items-center justify-items-center rounded-[1rem] bg-[#cacaca]">
          <div className="gap-3 flex flex-col col-span-1">
            <h1 className="font-poppins font-bold -tracking-[0.84px]">
              OUR MISSION
            </h1>
            <p className="text-[#777777] font-poppins font-light">
              To make an Environment for each and every student of the
              department to Make them engaged witht the juniors , seniors and
              proferssors
            </p>
          </div>
          <div className="gap-3 flex flex-col col-span-1">
            <h1 className="font-poppins font-bold -tracking-[0.84px]">
              OUR VISION
            </h1>
            <p className="text-[#777777] font-poppins font-light">
              i) Delve into the Tech aspect
              <br /> ii) Provide an opportunity to learn
              <br />
              iii) Improve the experience of every student
            </p>
          </div>
          <div className="gap-3 flex flex-col">
            <h1 className="font-poppins font-bold -tracking-[0.84px]">
              WHY US
            </h1>
            <p className="text-[#777777] font-poppins font-light">
              We understand the student's problems when they come to IITM. we
              are here to help them from their early phase at this new
              environment'.{" "}
            </p>
          </div>
        </div>
      </div>
      <Gallery />
      <FacultyS />
      <Ddt />
    </>
  );
}
