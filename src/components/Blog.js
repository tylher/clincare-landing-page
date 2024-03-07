import React from "react";
import blogImg from "../images/image 5.png";
import chevronRight from "../images/ChevronRight.svg";

const Blog = () => {
  return (
    <div className="grid grid-cols-2 gap-10 text-[#333]">
      <div className="p-7 bg-white rounded-3xl  flex flex-col gap-5">
        <div className="w-full mx-auto">
          <img src={blogImg} />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[24px] font-bold ">
            Advantages of home based care
          </h2>
          <h4 className="font-bold">
            BY <span className="text-[#652D90]">AYANFE ADEJUMOBI</span> ON{" "}
            <span className="text-[#652D90]">FEBRUARY 20, 2023</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod
            tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit seddo eiusmod tempor incididunt ut
            labore et.
          </p>
        </div>
        <a className="flex items-center text-[#652D90]">
          Continue reading <img src={chevronRight} />
        </a>
      </div>
      <div className="p-7 bg-white  rounded-3xl flex flex-col gap-5">
        <div className="w-full mx-auto">
          <img src={blogImg} />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[24px] font-bold ">
            Advantages of home based care
          </h2>
          <h4 className="font-bold">
            BY <span className="text-[#652D90]">AYANFE ADEJUMOBI</span> ON{" "}
            <span className="text-[#652D90]">FEBRUARY 20, 2023</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod
            tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit seddo eiusmod tempor incididunt ut
            labore et.
          </p>
        </div>
        <a className="flex items-center text-[#652D90]">
          Continue reading <img src={chevronRight} />
        </a>
      </div>
    </div>
  );
};

export default Blog;
