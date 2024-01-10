import React from "react";
import HomeHeadline from "./HomeHeadline";
import ServicesSummary from "./ServicesSummary";
import WhyUs from "./WhyUs";
import ClincareProcess from "./ClincareProcess";

const Home = () => {
  return (
    <div className="py-20 font-dmSans">
      <section className=" px-20">
        <HomeHeadline />
      </section>
      <section className="py-20">
        <ServicesSummary />
      </section>
      <section className="py-20 px-20">
        <WhyUs />
      </section>
      <section className="py-20 px-20 bg-[#012A51]">
        <ClincareProcess />
      </section>
    </div>
  );
};

export default Home;
