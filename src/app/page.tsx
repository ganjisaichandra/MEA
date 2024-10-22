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
      <div className="w-full flex items-center flex-wrap justify-around h-max mb-10 gap-5">
        <div className="flex justify-center flex-wrap gap-5 p-3 sm:p-5  ma:p-1 ma:w-1/2 flex-col">
          <p className="text-[1.2rem] sm:text-2xl md:text-3xl font-metrapolis-semibold">
            Mechanical Engineering Association
          </p>
          <p className="text-[#777777] font-poppins text-[0.9rem] sm:text-lg text-justify">
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
            <button className="bg-black p-1 sm:p-2 rounded-xl  text-white ">
              <p className="w-[6rem] sm:w-[8rem] inline-flex items-center justify-center text-[0.6rem] sm:text-[1rem] ">
                GET IN TOUCH
              </p>
            </button>
            <p className="text-[0.7rem] sm:text-[1rem]">FOLLOW US</p>
            <div className="flex justify-center items-center gap-3">
              <FaInstagram
                size={25}
                className="social-link scale:80 sm:scale:100"
              />
              {/* <TiSocialInstagram size={25} /> */}
              <TiSocialFacebook
                size={25}
                className="social-link scale:80 sm:scale:100"
              />
              <TiSocialLinkedin
                size={25}
                className="social-link scale:80 sm:scale:100"
              />
              <TiSocialYoutube
                size={25}
                className="social-link scale:80 sm:scale:100"
              />
            </div>
          </div>
        </div>
        <div className="p-1 hidden ma:block">
          <Image src={home} alt="" />
        </div>
      </div>

      <div className="w-full h-max flex justify-center items-center">
        <div className="w-[95%] h-full flex flex-col sm:flex-row  justify-between gap-5 p-8 sm:items-center  rounded-[1rem] bg-[#cacaca]">
          <div className="gap-3 sm:w-1/3 flex flex-col col-span-1">
            <h1 className="font-poppins font-bold -tracking-[0.84px]">
              OUR MISSION
            </h1>
            <p className="text-[#777777] font-poppins font-light">
              To create an engaging, technology-focused learning environment
              that inspires students to collaborate, innovate, and achieve
              excellence in mechanical engineering.
            </p>
          </div>
          <div className="gap-3 flex flex-col sm:w-1/3">
            <h1 className="font-poppins font-bold -tracking-[0.84px]">
              OUR VISION
            </h1>
            <p className="text-[#777777] font-poppins font-light">
              i) Cultivate a culture of creativity.
              <br /> ii) Promote hands-on experience and exploration.
              <br />
              iii) Empower students to drive change.
            </p>
          </div>
          <div className="gap-3 flex flex-col sm:w-1/3">
            <h1 className="font-poppins font-bold -tracking-[0.84px]">
              WHY US
            </h1>
            <p className="text-[#777777] font-poppins font-light">
              We recognize that transitioning to a new academic institution can
              be challenging, and we are dedicated to providing comprehensive
              support to students as they acclimate to their environment..{" "}
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
