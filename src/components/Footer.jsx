import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-yellow-500 bg-opacity-70 backdrop-blur-lg bottom-0 left-0 right-0 py-3 px-3 md:px-10">
      <div className="flex flex-row justify-between px-16">
        <h2 className="text-lg font-bold text-black">FutureFemTeck</h2>
        <div>
          <p>Careers</p>
          <p>Mentorship</p>
          <p>Scholarships</p>
        </div>
        <div>
          <p>Contacts:</p>
          <p>info@futurefemtech.com</p>
          <p>+254 712 345678</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-row justify-between px-16">
        <p>&copy; 2024 FutureFemTech, Inc. All Rights Reserved.</p>
        <div className="flex flex-row gap-9">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
