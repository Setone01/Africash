import React from "react";
import logo from "../../Images/logo.svg";
import { navlinks } from "../../dummydb";

const Navbar = () => {
  
  return (
    <div className="w-full h-20 bg-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <div className="w-[90%] h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-13 cursor-pointer" src={logo} alt="navlogo" />
        </div>
        <div>
          <ul className="flex items-center gap-8">
          {navlinks.map((link, index) => (
            <li className=" text-base text-black font-normal capitalize hover:text-[#068353] cursor-pointer active:text-[#068353]" key={index}>{link.nav}</li>
            ))}
            <div className="flex items-center justify-between gap-8 group">
            <button className="bg-white text-[#068353] text-base border-2 border-[#068353] py-1.5 px-5 rounded-full capitalize hover:text-white hover:bg-[#068353]">login</button>
            <button className="bg-[#068353] text-white text-base capitalize py-2 px-5 rounded-full hover:bg-[#ecf1ef] hover:text-[#068353]">Signup</button>
          </div>
          </ul>

          
        </div>
      </div>
    </div>
  );
  
};

export default Navbar;
