import React from "react";
import footerImg from "../assets/footer-img.svg";

const Footer = () => {
  return (
      <div className="footer-container">
        <img src={footerImg} 
            className='image'
        />

      <div className="p-[20px] xl:px-[100px] xl:pt-[35px]"></div>

      </div>
  );
};

export default Footer;
