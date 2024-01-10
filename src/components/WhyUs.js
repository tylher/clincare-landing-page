import React from "react";
import familyImage from "../images/Frame 106.png";

const WhyUs = () => {
  return (
    <div className="h-[90vh] relative text-[#012A51] flex flex-col items-center justify-center">
      <div className="h-[90vh] absolute left-20">
        <img
          src={familyImage}
          className="max-w-full m-auto h-[-webkit-fill-available]"
        />
      </div>
      <div className="flex flex-row-reverse bg-[#EBF5FF] px-20 ">
        <div className="w-1/2 flex flex-col items-start">
          <div>
            <h2>We care about</h2>
            <p>
              At ClinCare agency we seek to improve the quality of care and
              attention given to the old, the sick and the disadvantaged in the
              society by pairing them with professional healthcare workers such
              as private nurses.
            </p>
          </div>
          <ul></ul>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
