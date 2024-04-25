import React from "react";
import footerImg from "../assets/footer-img.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={footerImg} className="image" />

      <div className="p-[20px] xl:px-[100px] xl:pt-[35px]">
        <div className="grid grid-cols-12">
          <div className="col-span-5 text-[#fff]">1</div>
          <div className="col-span-2">2</div>
          <div className="col-span-2">3</div>
          <div className="col-span-3">4</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
