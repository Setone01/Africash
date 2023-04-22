import React from "react";
import mobileB from "../../Images/mobileB.svg";
import { BsArrowRight } from "react-icons/bs";

const Base = () => {
  return (
    <div className="max-h-max py-8">
      <div className="flex justify-center items-center flex-row-reverse ">
        <div className=" flex justify-center flex-1">
          <img className="flex items-center" src={mobileB} alt="mobile" />
        </div>
        <div className="flex-1 ">
          <div className="mb-3">
            <h2 className="text-[30px] font-medium leading-8">
              Travel every country in Africa without hopping on a plane
            </h2>
          </div>
          <p className="text-[18px]">
            We are building a digital community that will empower you to take
            control of your money and make it work for you.
          </p>
          <div className="mt-3 font-medium text-base text-[green]">
            <button className="flex items-center">
              Learn More{" "}
              <span className="ms-3">
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
