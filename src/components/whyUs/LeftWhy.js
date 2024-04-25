import React from "react";
import whyUs from "../../assets/whyus.svg";
import sc from "../../assets/SC.svg";
import gt from "../../assets/GT.svg";
import ot from "../../assets/OT.svg";
const LeftWhy = () => {
  return (
    <div className="relative why-container">
      <img src={whyUs} className="image" />
      <div className="absolute top-5 right-5">
      <div className="flex flex-col items-center">
          <img src={sc} width={70} className="why-image h-[40px] md:h-full mb-1"/>
          <div className="text-white flex flex-col items-center gap-y-1">
          <div className="font-family-2 font-bold text-sm lg:text-[18px] leading-[25px]">
              255560
            </div>
            <div className="font-family-2 font-medium relative text-sm lg:text-[18px]">
            Satisfied clients
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[32%] right-0 h-[1px] bg-[#fff] lg:w-[191px] max-w-[191px]"></div>
      <div className="absolute top-[35%] right-10">
        <div className="flex flex-col items-center">
          <img src={sc} width={70} className="why-image h-[40px] md:h-full mb-1" />
          <div className="text-white flex flex-col items-center relative">
            <div className="font-family-2 font-bold text-sm lg:text-[18px] leading-[25px]">
              255560
            </div>
            <div className="font-family-2 font-medium relative text-sm lg:text-[18px]">
              Great Tours
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[63%] right-0 h-[1px] bg-[#fff]  lg:w-[191px] max-w-[191px]"></div>
      <div className="absolute top-[66%] right-6">
        <div className="flex flex-col items-center">
          <img src={sc} className="why-image h-[40px] md:h-full mb-1"/>
          <div className="text-white flex flex-col items-center gap-y-1">
          <div className="font-family-2 font-bold text-sm lg:text-[18px] leading-[25px]">
              255560
            </div>
            <div className="font-family-2 font-medium relative text-sm lg:text-[18px]">
            Organized Trip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftWhy;
