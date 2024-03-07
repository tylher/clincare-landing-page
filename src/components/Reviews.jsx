import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="flex  w-[fit-content] gap-[3vw] transform translate-x-[-26vw]">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default Reviews;
