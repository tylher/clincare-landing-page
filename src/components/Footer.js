import React from "react";
import locationLogo from "../images/material-symbols_location-on.svg";
import mail from "../images/material-symbols_mail-rounded.svg";
import phone from "../images/material-symbols_call.svg";
import facebook from "../images/iconoir_facebook.svg";
import twitter from "../images/pajamas_twitter.svg";
import youtube from "../images/ph_youtube-logo.svg";
import instagram from "../images/mdi_instagram.svg";
import linkedIn from "../images/mingcute_linkedin-line.svg";
import companyLogo from "../images/Clin-Care-Logo-1.svg";
import heartLogo from "../images/Heart.svg";
import playLogo from "../images/Play arrow.svg";

const Footer = () => {
  return (
    <div className="flex p-20 gap-24 text-[#333] font-dmSans justify-between">
      <section className="text-sm flex justify-between">
        <div className="w-[50%] flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img src={companyLogo} />
              <h2 className="text-[20px] font-medium">Clin-Care Agency</h2>
            </div>
            <p>
              Become a part of stories that keep us motivated in bringing small
              but important change, every single day
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold">Follow us</h3>
            <ul className="flex items-center gap-4">
              <li>
                <img src={instagram} />
              </li>
              <li>
                <img src={linkedIn} />
              </li>
              <li>
                <img src={facebook} />
              </li>
              <li>
                <img src={twitter} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-[20px] mb-8 font-bold">Menu</h2>
          <ul className="flex flex-col gap-2">
            <li> About </li>
            <li>Services</li>
            <li>Resources</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[20px] mb-8 font-bold">Contact Us</h2>
          <div>
            <h4>Phone & Email:</h4>
            <ul className="flex flex-col gap-2 font-bold">
              <li>
                <a href="tel:+234 901 782 4563">+234 901 782 4563</a>
              </li>
              <li>
                <a href="info247@gmail.com">info247@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="text-center text-[20px] bg-[#EBF5FF] p-10 flex flex-col gap-7 font-medium ">
        <p className="font-bold">
          Join us and let’s make a better world, today
        </p>
        <button className="flex bg-[#012A51] text-white w-full  items-center py-2 justify-center gap-2 rounded-full">
          <img src={heartLogo} /> Donate now
        </button>
        <button className="flex items-center py-2 justify-center gap-2 w-full border-[#333333] border-2 rounded-full">
          <img src={playLogo} /> More ways to help
        </button>
      </section>
    </div>
  );
};

export default Footer;
