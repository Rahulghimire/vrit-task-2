import React from "react";

const LeftChild = () => {
  return (
    <div className="flex flex-col gap-y-[6px]">
      <div className="flex items-center gap-x-2">
        <div className="w-[30px] h-[2px] bg-[#C2292E]"></div>
        <div className="uppercase font-Merriweather font-family-2 text-[#C2292E] text-[16px] tracking-[8%] leading-[27px]">
          About Himalayan fair reisen
        </div>
      </div>
      <div className="text-[#000] font-bold font-Merriweather text-[36px] capitalize leading-[1]">
        Best Trekking Partner For your holidays
      </div>
      <p className="text-[#655C5C] font-[Work-Sans] text-[16px] leading-[25px] text-justify">
        At Himalayan Fair Reisen, safety is paramount. Our guides are trained in
        wilderness first aid and possess the expertise to navigate the rugged
        Himalayan terrain safely. Moreover, we prioritize responsible tourism, .
        Whether you dream of standing atop the world's highest peaks, immersing
        yourself in the vibrant cultures of Himalayan villages, or simply
        escaping the hustle and bustle of daily life, Himalayan Fair Reisen is
        here to transform your dreams into reality. Join us on an unforgettable
        adventure and discover the enchanting beauty of the Himalayas with
        Himalayan Fair Reisen. With our dedicated team of experienced guides and
        a passion for exploration, we're committed to providing personalized and
        immersive adventures that cater to all levels of trekkers.
      </p>
    </div>
  );
};

export default LeftChild;
