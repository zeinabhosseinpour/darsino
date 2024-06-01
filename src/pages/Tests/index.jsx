import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { Link, useLocation } from "react-router-dom";
import Hero from "./hero";
import DivLink from "../../component/modal/DivLink";
import Quizs from "./quizs";

const Tests = () => {
  // const location = useLocation();
  // console.log("location", location);
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex justify-between py-8 px-1 sn:px-16">
        <Link to="/shop">
          <DivLink> آزمون‌های تخصصی</DivLink>
        </Link>
        <Link to="/shop">
          <DivLink> آزمون‌های جامع</DivLink>
        </Link>
        <Link to="/shop">
          <DivLink> آزمون‌های جمع بندی</DivLink>
        </Link>
      </div>
      <Quizs />
      <Footer />
    </div>
  );
};

export default Tests;
