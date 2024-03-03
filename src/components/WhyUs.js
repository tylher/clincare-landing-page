import React from "react";
import familyImage from "../images/Frame 106.png";
import trustingUsers from "../images/trusted-users.svg";
import certified from "../images/success-check.svg";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
    tl.to(".familyImageBox", {
      left: "80px",
      opacity: 1,
      duration: 2,
    });
    tl.to(".familyTextBox", { opacity: 1, duration: 1.5 });
  }, []);
  return (
    <div className="container h-[100vh] relative text-[#012A51] flex flex-col items-center justify-center">
      <div className="familyImageBox opacity-0 h-[100vh] absolute left-[-100%]">
        <img
          src={familyImage}
          className="max-w-full m-auto h-[-webkit-fill-available]"
        />
      </div>
      <div className="  flex flex-row-reverse bg-[#EBF5FF] px-20 ">
        <div className="familyTextBox opacity-0 w-1/2 flex flex-col items-start py-10 gap-5">
          <div>
            <h2 className="font-bold text-4xl leading-loose">We care about</h2>
            <p className="text-xs leading-relaxed">
              At ClinCare agency we seek to improve the quality of care and
              attention given to the old, the sick and the disadvantaged in the
              society by pairing them with professional healthcare workers such
              as private nurses.
            </p>
          </div>
          <div className="text-xs flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-[25px] h-[25px] flex justify-center">
                <img src={trustingUsers} />
              </div>
              <p>Trusted by thousands</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[25px] h-[25px] flex justify-center">
                <img src={certified} />
              </div>

              <p>Government certificate awarded</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[25px] h-[25px] flex justify-center">
                <img src={certified} />
              </div>
              <p>Weekly chekups/reports</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[25px] h-[25px] flex justify-center">
                <img src={certified} />
              </div>
              <p>Proven track of success</p>
            </div>
          </div>
          <button className="bg-[#012A51] text-white rounded-md py-3 px-12 mt-3 font-bold text-sm">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
