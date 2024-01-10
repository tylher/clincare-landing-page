import React, { useState } from "react";

const Navbar = () => {
  const navNames = ["Home", "About", "Services", "Resources", "Contact Us"];
  const [active, setActive] = useState("");

  const handleNavClick = (name) => {
    setActive(name);
  };
  return (
    <ul className="flex items-center gap-10 text-[#012A51]">
      {navNames.map((name) => {
        return (
          <li>
            <a
              className={active === name ? "border-b-2 border-[#012A51]" : ""}
              onClick={() => handleNavClick(name)}
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
