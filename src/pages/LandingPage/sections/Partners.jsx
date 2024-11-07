import React from "react";
import Marquee from "react-fast-marquee";
import {
  partnerLogo1,
  partnerLogo2,
  partnerLogo3,
  partnerLogo4,
  partnerLogo5,
  partnerLogo6,
  partnerLogo7,
  partnerLogo8,
  partnerLogo9,
  partnerLogo10,
  partnerLogo11,
  partnerLogo12,
  partnerLogo13,
  partnerLogo14,
  partnerLogo15,
} from "../../../assets";

const Partners = () => {
  return (
    <div className="py-6 bg-yellow-500 bg-opacity-70">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex gap-6">
          <img src={partnerLogo1} alt="partner-logo-1" className="h-12" />
          <img src={partnerLogo2} alt="partner-logo-2" className="h-12" />
          <img src={partnerLogo3} alt="partner-logo-3" className="h-12" />
          <img src={partnerLogo4} alt="partner-logo-4" className="h-12" />
          <img src={partnerLogo5} alt="partner-logo-5" className="h-12" />
          <img src={partnerLogo6} alt="partner-logo-6" className="h-12" />
          <img src={partnerLogo7} alt="partner-logo-7" className="h-12" />
          <img src={partnerLogo8} alt="partner-logo-8" className="h-12" />
          <img src={partnerLogo9} alt="partner-logo-9" className="h-12" />
          <img src={partnerLogo10} alt="partner-logo-10" className="h-12" />
          <img src={partnerLogo11} alt="partner-logo-11" className="h-12" />
          <img src={partnerLogo12} alt="partner-logo-12" className="h-12" />
          <img src={partnerLogo13} alt="partner-logo-13" className="h-12" />
          <img src={partnerLogo14} alt="partner-logo-14" className="h-12" />
          <img src={partnerLogo15} alt="partner-logo-15" className="h-12" />
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
