import React from "react";
import HomeHeadline from "./HomeHeadline";
import ServicesSummary from "./ServicesSummary";
import ClincareProcess from "./ClincareProcess";
import WhyUs from "./WhyUs";
import Blog from "./Blog";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="pt-20 font-dmSans">
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
      <section className="p-20">
        <Blog />
      </section>
      <section className="overflow-hidden">
        <Reviews />
      </section>
    </div>
  );
};

export default Home;
