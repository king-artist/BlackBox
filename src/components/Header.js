import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { User } from "@nextui-org/react";

function Header() {
  return (
    <div className=" flex-center">
      <div className="flex-center gap-3">
        <img
          src="./logo/logo1.jpg"
          alt="Cryptfest-logo"
          className="w-[28px] h-[28px]"
        />
        <p className="text-[26px] font-[900] font-urbanist">
          {" "}
          Black<span className="font-[400]">BOX </span>
        </p>
      </div>

      <div>
        <p className="font-roboto text-[20px] font-[500]">
          {" "}
          Welcome Back To BlackBoxTrading
        </p>
      </div>

      <div className="flex-center">
        <div className="flex px-3 items-center dark-bg h-[48px] w-[281px] rounded-[16px] justify-between">
          <RiSearch2Line fontSize={24} />
          <input
            className="font-inter font-[500] text-[18px] bg-transparent outline-none text-white "
            placeholder="Search"
          />
        </div>
        <BiBell fontSize={24} className="mx-5"/>
      </div>

      <div className="flex-center ">
        <p className="font-inter font-[500] text-[18px]">User : Ramisa</p>
        <User src="./ramisa.jpg" size="lg" />
      </div>
    </div>
  );
}

export default Header;
