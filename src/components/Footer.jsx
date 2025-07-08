import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-yellow-500 bg-opacity-80 bottom-0 left-0 right-0 py-3 px-3 md:px-10">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between px-2 md:px-16 items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-black my-4">FutureFemTeck</h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8594529691713!2d36.79364937496568!3d-1.2561717987318686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176f89893739%3A0x6677026bfae79ba7!2sThe%20Piano!5e0!3m2!1sen!2ske!4v1730904908935!5m2!1sen!2ske"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 text-xl font-semibold">
          <p>Careers</p>
          <p>Mentorship</p>
          <p>Scholarships</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 text-xl font-semibold">
          <p>Contacts:</p>
          <p>info@futurefemtech.com</p>
          <p>+254 712 345678</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-16 md:mx-10 gap-4 md:gap-0">
        <p className="text-center md:text-left text-sm md:text-base">&copy; 2024 FutureFemTech, Inc. All Rights Reserved.</p>
        <div className="flex flex-row gap-6 md:gap-9 justify-center md:justify-end">
          <FaFacebook className="text-2xl md:text-3xl" />
          <FaInstagram className="text-2xl md:text-3xl" />
          <FaXTwitter className="text-2xl md:text-3xl" />
          <FaYoutube className="text-2xl md:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
