import React from "react";
import { Link } from "react-router-dom";
import DivLink from "../../component/modal/DivLink";

const Feature = () => {
  return (
    <div className="flex flex-col py-8 px-4 gap-[18px] sn:gap-16 sn:px-16 sn:pt-8 sn:pb-12 ">
      <div className="flex flex-col py-0 px-4 gap-4">
        <div className="flex flex-col gap-1 sn:gap-4 text-right">
          <span className=" text-2xl sn:text-5xl sn:leading-[56px] font-normal text-secondary-main">
            آزمون تخصصی شماره 3
          </span>
          <span className=" text-xs sn:text-[22px] leading-10 font-normal text-neutral-gray25">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </span>
        </div>
        <div className=" flex justify-center items-center gap-1 sn:gap-16">
          <DivLink
            bgcolor={"bg-white"}
            textcolor={"text-tertiary-main"}
            bordered={" border-[1px] border-tertiary-main"}
          >
            تعداد سوال: 10 سوال تخصصی
          </DivLink>

          <DivLink
            bgcolor={"bg-white"}
            textcolor={"text-tertiary-main"}
            bordered={" border-[1px] border-tertiary-main"}
          >
            زمان پاسخگویی: 30 دقیقه
          </DivLink>

          <DivLink
            bgcolor={"bg-white"}
            textcolor={"text-tertiary-main"}
            bordered={" border-[1px] border-tertiary-main"}
          >
            زمان باقی مانده: 29:59
          </DivLink>
        </div>
      </div>
    </div>
  );
};

export default Feature;
