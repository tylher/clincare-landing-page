import React from "react";
import { services } from "../utils/servicesData";
import serviceLogo from "../images/child-care-outline.svg";

const ServicesSummary = () => {
  return (
    <div className="text-[#333333] px-20 flex flex-col gap-14">
      <div className="text-center flex flex-col gap-4">
        <h2 className="font-bold text-4xl">Expert Care Services</h2>
        <p className="w-2/5 mx-auto">
          Use the cards below to learn how Clin-Care Agency can help your loved
          ones.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-14">
        {services.map((service, index) => {
          return (
            <div className="flex flex-col items-center gap-4">
              <img
                src={serviceLogo}
                width={36}
                className="bg-[#EBF5FF] rounded-md p-1"
              />
              <div className="flex flex-col text-center gap-4">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed">{service.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSummary;
