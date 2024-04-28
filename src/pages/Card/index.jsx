import React from "react";
import Header from "../../Layout/Header";
import NavBar from "../../Layout/Header/NavBar";
import ShoppingCard from "./ShoppingCard";
import ProfileMenu from "./ProfileMenu";

const Card = () => {
  return (
    <div className=" bg-gray-0">
      <NavBar />
      {/* <Header /> */}
      <div className="grid grid-cols-6 gap-[19px]">
        <div className="hidden sn:grid sn:col-start-1 sn:col-end-2 sn:col-span-1 ">
          <ProfileMenu />
        </div>
        <div className=" col-start-1 col-end-7 col-span-7  sn:col-start-3 sn:col-end-6 sn:col-span-3">
          <ShoppingCard />
        </div>
      </div>
    </div>
  );
};

export default Card;
