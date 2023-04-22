import React from "react";
import HeroImg from "../../Images/heroImage.svg";
// import Mobile from "../../Images/mobileImg.svg"
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full max-h-screen">
      <div className="w-full h-full flex justify-center items-center pt-[3rem]">
        <div className="h-full flex justify-center items-center flex-1">
          <div className="py-8">
            <div className="item-center pl-20 ">
              <div className="mb-3">
                <h1 className="text-bold text-[3rem] font-clash leading-[1.2em]">
                  Africa in one financial platform
                </h1>
              </div>

              <p className=" w-[80%] text-base">
                Africash is a digital ecosystem designed to make Africa one.
                It’s goal is to bring the dream of financial inclusion to all
                people across the continent.
              </p>
              <div className="mt-8">
                <button className="bg-[#068353] text-white text-base capitalize flex items-center font-base gap-3 py-2 px-5 rounded-full hover:bg-[#ecf1ef] hover:text-[#068353]">
                  <span className="font-medium">
                    <AiOutlineDownload />
                  </span>
                  Get started- It’s free
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex-1 w-[60%] bg-cover">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
