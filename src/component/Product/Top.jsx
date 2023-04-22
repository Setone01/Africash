import React from "react";
import mobileTop from "../../Images/mobiletop.svg";

const Top = () => {
  return (
    <div className="max-h-max py-8">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <img src={mobileTop} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default Top;
