import React from "react";
import locationLogo from "../images/material-symbols_location-on.svg";
import mail from "../images/material-symbols_mail-rounded.svg";
import phone from "../images/material-symbols_call.svg";
import facebook from "../images/uim_facebook-f.svg";
import twitter from "../images/mdi_twitter.svg";
import youtube from "../images/ph_youtube-logo.svg";
import instagram from "../images/mdi_instagram.svg";
import linkedIn from "../images/akar-icons_linkedin-fill.svg";
import companyLogo from "../images/Clin-Care-Logo-1.svg";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#012A51] text-white text-sm px-20 py-20 flex items-center justify-between font-dmSans">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold ">Contact us</h2>
          <p>Let us know how we can support you and help you stay healthy.</p>
        </div>
        <button className="bg-white font-bold text-[#333] py-3 px-5 rounded-lg">
          Get in touch
        </button>
      </section>
      <section className="px-20 pt-10 pb-20 text-[#012A51] font-outfit flex flex-col gap-4 justify-start items-start">
        <img src={companyLogo} />
        <div className=" grid grid-cols-3 gap-10">
          <div>
            <p>
              We at ClinCare agency, believe in the happiness and peace of mind
              of all parties invovled in the care of a vulnurable individual is
              the first paliative care needed for the quick recovery of any sick
              person in the society.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-3">
              <h2 className="font-medium text-2xl">ABOUT</h2>
              <ul>
                <li>Company</li>
                <li>Team</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              {" "}
              <h2 className="font-medium text-2xl">SERVICES</h2>
              <ul>
                <li>Care Support</li>
                <li>Disability Support</li>
                <li>Assisted Living</li>
                <li>Therapitical session</li>
                <li>Nursing Service</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              {" "}
              <h2 className="font-medium text-2xl">RESOURCES</h2>
              <ul>
                <li>Blog</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <img src={locationLogo} />
                  <p>ClinCare building, Ikorodu Lagos State. Nigeria</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={mail} />
                  <p>themiddlemanoldcare@gmail.com</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={phone} />
                  <p>+234 (90) 32106391</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
