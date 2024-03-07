import React from "react";

const ReviewCard = () => {
  return (
    <div className=" w-[48vw]">
      <div className="bg-white p-8 flex flex-col gap-5 text-[#012A51]">
        <h2 className="font-bold text-[36px]">“My mom was taken care of”</h2>
        <p className="text-[20px]">
          "I can't thank the caregivers at this company enough for their
          compassionate and professional service. They have made a world of
          difference in the quality of life for my aging parents. The caregivers
          are reliable, prompt, and treat my parents with respect and kindness.
          I highly recommend ClinCare Agency to anyone in need of elderly care
          services."
        </p>
        <div className="flex flex-col gap-1">
          <h2 className="text-[20px] font-bold">DEBORAH OMONIYI</h2>
          <p className="text-xs">Pharmacist</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
