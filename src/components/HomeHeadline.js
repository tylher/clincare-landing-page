import React from "react";
import headlineImage from "../images/Frame 105.png";

const HomeHeadline = () => {
  return (
    <div className="relative h-[90vh] flex flex-col justify-center ">
      <div className="flex bg-[#012A51] items-center relative my-auto text-white px-20 rounded-2xl py-20">
        <div className="w-[50%] flex flex-col gap-9 items-start">
          <div>
            <h2 className="font-bold text-5xl leading-tight">
              Trusted Care When You Need It Most
            </h2>
            <p className="leading-normal font-normal">
              Trust us to help you navigate the challenges of caregiving and
              ensure the comfort and well-being of your loved ones.
            </p>
          </div>

          <button className="text-[#333333] bg-white py-2 px-4 font-bold rounded-lg">
            Book Consultation
          </button>
        </div>
      </div>
      <div className="absolute  right-20 h-[90vh]">
        <img
          src={headlineImage}
          className="m-auto max-w-full h-[-webkit-fill-available]"
        />
      </div>
    </div>
  );
};

export default HomeHeadline;
