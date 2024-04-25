import React from "react";
import Heading from "../Heading";
import tick from "../../assets/tick.svg";
import chat from "../../assets/chat.svg"

const RightWhy = () => {
  return (
    <div className="flex flex-col gap-y-[6px]">
      <Heading title={"amongst all"} subtitle={"Why choose us?"} />
      <p className="text-[#655C5C] font-[Work-Sans] text-[16px] leading-[25px] text-justify">
        Choose Himalayan Fair Reisen for your Himalayan adventure and embark on
        a journey of a lifetime. With our team of experienced professionals,
        personalized service, and commitment to safety and responsible tourism,
        we ensure that every aspect of your trek is expertly planned and
        executed. From customizing itineraries to prioritizing your safety and
        minimizing environmental impact, we strive to provide unparalleled
        experiences that leave you with cherished memories. Whether you're
        trekking to Everest Base Camp, exploring the Annapurna region, or
        immersing yourself in the vibrant culture of Nepal, Himalayan Fair
        Reisen promises unforgettable adventures that will exceed your
        expectations. Join us and discover the magic of the Himalayas with
        confidence and peace of mind.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-y-[11px]">
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={tick} />
            </div>
            <div className="font-family-2 font-normal text-[18px] text-[#655C5C]">
              Diverse Destinations
            </div>
            
          </div>
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={tick} />
            </div>
            <div className="font-family-2 font-normal text-[18px] text-[#655C5C]">
              Diverse Destinations
            </div>
            
          </div>
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={tick} />
            </div>
            <div className="font-family-2 font-normal text-[18px] text-[#655C5C]">
              Diverse Destinations
            </div>
            
          </div>
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={tick} />
            </div>
            <div className="font-family-2 font-normal text-[18px] text-[#655C5C]">
              Diverse Destinations
            </div>
            
          </div>
        </div>
        <div className="flex flex-col gap-y-[11px]">
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={tick} />
            </div>
            <div className="font-family-2 font-normal text-[18px] text-[#655C5C]">
              Diverse Destinations
            </div>
            
          </div>
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={tick} />
            </div>
            <div className="font-family-2 font-normal text-[18px] text-[#655C5C]">
              Diverse Destinations
            </div>
            
          </div>
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={tick} />
            </div>
            <div className="font-family-2 font-normal text-[18px] text-[#655C5C]">
              Diverse Destinations
            </div>
            
          </div>
          <div className="flex gap-x-3 items-center">
            <div>
              <img src={tick} />
            </div>
            <div className="font-family-2 font-normal text-[18px] text-[#655C5C]">
              Diverse Destinations
            </div>
          </div>

          <div className="flex justify-end">
            <img
            src={chat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightWhy;
