import React from "react";

const Heading = ({ title,subtitle }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <div className="w-[30px] h-[2px] bg-[#C2292E]"></div>
        <div className="uppercase font-Merriweather font-family-2 text-[#C2292E] text-[16px] tracking-[8%] leading-[27px]">
          {title}
        </div>
      </div>
      <div className="text-[#000] font-bold font-Merriweather text-[36px] capitalize leading-[1]">
        {subtitle}
      </div>
    </>
  );
};

export default React.memo(Heading);
