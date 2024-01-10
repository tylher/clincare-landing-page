import React from "react";
import Navbar from "./Navbar";
import ClincareLogo from "../images/Clin-Care-Logo-1.svg";

const Header = () => {
  return (
    <div className="flex px-20 py-2 border-b border-[#e0e0e0] max-w-full items-center justify-between text-[18px] font-medium font-inter">
      <div>
        <img src={ClincareLogo} width={57} />
      </div>
      <Navbar />
      <button>Book a Consult</button>
    </div>
  );
};

export default Header;
